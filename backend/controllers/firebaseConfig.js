// firebaseConfig.js
const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyBpz7BNc7HkXRsG3yOoB3GxVmyv8mS11Qk",
    authDomain: "careernavigator-9ad31.firebaseapp.com",
    projectId: "careernavigator-9ad31",
    storageBucket: "careernavigator-9ad31.appspot.com",
    messagingSenderId: "44975840518",
    appId: "1:44975840518:web:632a2bc93b5614eb3d9287",
    measurementId: "G-PZ13LWX8KC"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = { storage };
