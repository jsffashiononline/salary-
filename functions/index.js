const {onCall,HttpsError}=require('firebase-functions/v2/https');
const {initializeApp}=require('firebase-admin/app');
const {getAuth}=require('firebase-admin/auth');
const {getFirestore,FieldValue}=require('firebase-admin/firestore');
const bcrypt=require('bcryptjs');
const crypto=require('crypto');
initializeApp();
const db=getFirestore();
function normalizePhone(phone){
 if(typeof phone!=='string')throw new HttpsError('invalid-argument','সঠিক মোবাইল নম্বর দিন।');
 let p=phone.replace(/[\s()-]/g,'');
 if(/^01\d{9}$/.test(p))p='+88'+p;
 else if(/^8801\d{9}$/.test(p))p='+'+p;
 if(!/^\+8801[3-9]\d{8}$/.test(p))throw new HttpsError('invalid-argument','বাংলাদেশের সঠিক মোবাইল নম্বর দিন।');
 return p;
}
exports.phonePasswordAuth=onCall({region:'us-central1',maxInstances:10},async(request)=>{
 const {action,password}=request.data||{};
 if(!['login','register'].includes(action))throw new HttpsError('invalid-argument','অনুরোধ সঠিক নয়।');
 if(typeof password!=='string'||password.length<6||password.length>128)throw new HttpsError('invalid-argument','পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।');
 const phone=normalizePhone(request.data.phone);
 const key=crypto.createHash('sha256').update(phone).digest('hex');
 const ref=db.collection('phoneAccounts').doc(key);
 if(action==='register'){
  const passwordHash=await bcrypt.hash(password,12),uid=crypto.randomUUID();
  await db.runTransaction(async tx=>{const snap=await tx.get(ref);if(snap.exists)throw new HttpsError('already-exists','এই নম্বর দিয়ে অ্যাকাউন্ট আগে থেকেই আছে।');tx.create(ref,{uid,passwordHash,createdAt:FieldValue.serverTimestamp()});});
  return {customToken:await getAuth().createCustomToken(uid)};
 }
 const snap=await ref.get();
 if(!snap.exists||!(await bcrypt.compare(password,snap.data().passwordHash)))throw new HttpsError('unauthenticated','মোবাইল নম্বর বা পাসওয়ার্ড সঠিক নয়।');
 return {customToken:await getAuth().createCustomToken(snap.data().uid)};
});
