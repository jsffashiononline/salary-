# হিসাব খাতা (Ledger Records)

মোবাইল-ফ্রেন্ডলি আয়-ব্যয়ের হিসাব অ্যাপ। React + Vite + Capacitor দিয়ে Android APK তৈরি করা যায়।

## ফিচার
- আয় ও খরচের হিসাব, ব্যক্তি/প্রতিষ্ঠান, ক্যাটাগরি, তারিখ ও নোট
- গ্যালারি থেকে ছবি নির্বাচন এবং Capacitor Camera দিয়ে ছবি তোলা
- রেকর্ড ও ছবির ডেটা একসঙ্গে IndexedDB-তে সংরক্ষণ
- মোট আয়, মোট খরচ ও ব্যালেন্স
- Android debug APK GitHub Actions artifact হিসেবে প্রকাশ

## Build
`npm install`
`npm run build`
`npx cap add android`
`npx cap sync android`

## Data storage note
বর্তমান সংস্করণে রেকর্ড ও ছবি ডিভাইসের IndexedDB-তে থাকে; এটি Firebase cloud sync নয়। অ্যাপের ডেটা clear/uninstall করলে লোকাল রেকর্ড হারাতে পারে। Firebase cloud sync চালু করতে Firebase project configuration, Authentication/Firestore/Storage rules এবং সুরক্ষিত deployment configuration আলাদাভাবে সেট করতে হবে।

## Android
GitHub Actions-এর `Build Android APK` workflow সফল হলে Actions → workflow run → Artifacts থেকে `app-debug-apk` ডাউনলোড করা যাবে।