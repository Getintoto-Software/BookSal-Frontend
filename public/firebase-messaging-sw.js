// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCrEq8RvWyCCa8dLfmuCR_9ViF_DivkR7g",
    authDomain: "booksall-a0fb3.firebaseapp.com",
    projectId: "booksall-a0fb3",
    storageBucket: "booksall-a0fb3.firebasestorage.app",
    messagingSenderId: "913686080361",
    appId: "1:913686080361:web:6f7da9ddbf85bd5d6a6bf8",
    measurementId: "G-8YNY2VPXV0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message:', payload);
    const { title, body } = payload.notification || {};
    if (title && body) {
        self.registration.showNotification(title, {
            body,
            icon: '/favicon.ico', // Customize with your app's icon
            badge: '/badge.png'   // Optional
        });
    }
});