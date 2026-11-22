# Ledger Records — accounting & record management (React + Firebase + Capacitor)

Fields per record: title, type (income/expense), amount, party, category, date, notes, photo, auto ID, created/updated time.
Gallery and camera use `@capacitor/camera` (Android Photo Picker on 13+, so no storage permission; only `CAMERA` is declared).

## 1. Firebase setup (you must supply credentials)
1. console.firebase.google.com → create project → add a **Web app** → copy its config.
2. Authentication → Sign-in method → enable **Email/Password**.
3. Firestore Database → create (production mode) → Rules tab → paste `firestore.rules` → Publish.
4. Storage → Get started → Rules tab → paste `storage.rules` → Publish.
5. `cp .env.example .env` and fill the six `VITE_FIREBASE_*` values.

## 2. Run
```
npm install
npm run dev        # browser test
```

## 3. Android APK
**Local (Android Studio + JDK 17):**
```
npm install && npm run build
npx cap add android
# add to android/app/src/main/AndroidManifest.xml, before <application>:
#   <uses-permission android:name="android.permission.CAMERA" />
#   <uses-feature android:name="android.hardware.camera" android:required="false" />
npx cap sync android
cd android && ./gradlew assembleDebug   # APK: android/app/build/outputs/apk/debug/app-debug.apk
```
**GitHub Actions:** push to GitHub, add the six `VITE_FIREBASE_*` values as repository secrets, run workflow *Build debug APK*, download artifact `app-debug-apk`.

## Save flow
validate → upload image to Firebase Storage → get permanent https download URL → write Firestore doc → success toast only after both succeed.
On failure the form keeps all input, shows the real error code, and Save can be retried. A new file is deleted if the database write fails; the old file is deleted only after the update succeeds.

## Status
Not yet compiled or run by the author of this archive (no network in the build sandbox). Test on your device and report errors.
