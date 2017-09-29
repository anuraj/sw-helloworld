importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase.js');
var config = {
    apiKey: "AIzaSyD726Qm78aJA1VCJyP4x-wjQZ2kTtJt2KE",
    authDomain: "webviewdemoapp.firebaseapp.com",
    databaseURL: "https://webviewdemoapp.firebaseio.com",
    projectId: "webviewdemoapp",
    storageBucket: "webviewdemoapp.appspot.com",
    messagingSenderId: "321043996130"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onMessage(function (payload) {
    console.log("Message received. ", payload);
});

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

