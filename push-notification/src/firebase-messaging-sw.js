importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDOcrr266K5KDAlpQCFgeMErAYpuqUXPpw",
    authDomain: "pruebaicba.firebaseapp.com",
    databaseURL: "https://pruebaicba.firebaseio.com",
    projectId: "pruebaicba",
    storageBucket: "pruebaicba.appspot.com",
    messagingSenderId: "864259817026",
    appId: "1:864259817026:web:812a1e41cb776111c0f7db",
    measurementId: "G-ZLF2RPDCWB"
});

const messaging = firebase.messaging();