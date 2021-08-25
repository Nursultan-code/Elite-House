import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyA1F0nbVcFPocA5YSn8yOvqNHD-kGE2iIo",
    authDomain: "users-data-23730.firebaseapp.com",
    projectId: "users-data-23730",
    storageBucket: "users-data-23730.appspot.com",
    messagingSenderId: "74604815333",
    appId: "1:74604815333:web:0c5bab1706eef8da46850c"
})

export const auth = app.auth()
export default app