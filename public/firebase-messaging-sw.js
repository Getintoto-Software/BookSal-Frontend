// public/firebase-messaging-sw.js
importScripts('/firebase-config.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp(self.FIREBASE_CONFIG);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message:', payload);
    const { title, body } = payload.notification || {};
    if (title && body) {
        self.registration.showNotification(title, {
            body,
            icon: '/favicon.ico',
            badge: '/badge.png'
        });
    }
});
