import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDJhtFFU8wez_JaDHJMmbVQ_gLvEoM-XlA",
    authDomain: "suelo-dd389.firebaseapp.com",
    projectId: "suelo-dd389",
    storageBucket: "suelo-dd389.appspot.com",
    messagingSenderId: "855738430670",
    appId: "1:855738430670:web:c934a1ef7e4dfa31374c9f"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}