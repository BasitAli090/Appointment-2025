# Firebase Setup Instructions

To enable real-time synchronization across multiple devices, you need to set up Firebase.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard (you can disable Google Analytics if you want)

## Step 2: Enable Realtime Database

1. In your Firebase project, go to **Realtime Database** in the left menu
2. Click **Create Database**
3. Choose a location (select the closest to your users)
4. Start in **test mode** (we'll update security rules later)
5. Click **Enable**

## Step 3: Get Your Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to "Your apps" section
4. If you don't have a web app, click the **</>** icon to add one
5. Register your app (you can use any name)
6. Copy the `firebaseConfig` object values

## Step 4: Update firebase-config.js

Open `firebase-config.js` and replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",           // Replace with your apiKey
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",  // Replace with your authDomain
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com/",  // Replace with your databaseURL
    projectId: "YOUR_PROJECT_ID",     // Replace with your projectId
    storageBucket: "YOUR_PROJECT_ID.appspot.com",  // Replace with your storageBucket
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  // Replace with your messagingSenderId
    appId: "YOUR_APP_ID"              // Replace with your appId
};
```

## Step 5: Update Database Security Rules

1. In Firebase Console, go to **Realtime Database**
2. Click on the **Rules** tab
3. Replace the rules with:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Note:** These rules allow anyone to read/write. For production, you should add authentication. For now, this allows multiple users to work simultaneously.

## Step 6: Deploy Your App

Upload all files (index.html, script.js, styles.css, firebase-config.js) to a web server. You can use:
- GitHub Pages
- Netlify
- Firebase Hosting
- Any web hosting service

## How It Works

- When you add/edit/delete appointments on one device, it automatically syncs to all other devices in real-time
- If Firebase is not configured, the app falls back to localStorage (works offline on single device)
- All changes are saved to Firebase Realtime Database
- Multiple users can work simultaneously - changes appear instantly on all devices

## Troubleshooting

- If changes don't sync: Check browser console for errors
- Make sure Firebase configuration is correct
- Verify database rules allow read/write access
- Check that you're using the same Firebase project on all devices

