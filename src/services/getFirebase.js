import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}