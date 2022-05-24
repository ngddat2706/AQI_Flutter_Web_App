importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyConYGhKXHUs4c3R1LYV8TtEQX2SoF8gxk",
    authDomain: "quan-trac-flutter-mobile-app.firebaseapp.com",
    projectId: "quan-trac-flutter-mobile-app",
    storageBucket: "quan-trac-flutter-mobile-app.appspot.com",
    messagingSenderId: "26055329543",
    appId: "1:26055329543:web:3e83696b51d33fbe7de7a2",
    measurementId: "G-LBFE4NYZ1F"
});


const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});