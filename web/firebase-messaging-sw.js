importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyBnlVcao_qfQf_xpX3phL5dCEz15sgatmk",
  authDomain: "push-notification-df5a5.firebaseapp.com",
  projectId: "push-notification-df5a5",
  storageBucket: "push-notification-df5a5.appspot.com",
  messagingSenderId: "219628265332",
  appId: "1:219628265332:web:dfdc4bad1f678e8b711621"

});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
