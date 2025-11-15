// Firebase Configuration
// Your Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyD4KSThdaHZZqQ_7eO8DWCLuKdfNTi3AKU",
    authDomain: "appointment-system-9f973.firebaseapp.com",
    databaseURL: "https://appointment-system-9f973-default-rtdb.firebaseio.com",
    projectId: "appointment-system-9f973",
    storageBucket: "appointment-system-9f973.firebasestorage.app",
    messagingSenderId: "622580034312",
    appId: "1:622580034312:web:d74afb72398c38e1b3dabd"
};

// Initialize Firebase (using compat SDK for Realtime Database)
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

