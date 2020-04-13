import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/firebase-storage'

const firebaseConfig = {
  apiKey: "AIzaSyCGImGhNmkFM4ikHXlEmymR5t6dwXFeqmk",
  authDomain: "sen-app-1c224.firebaseapp.com",
  databaseURL: "https://sen-app-1c224.firebaseio.com",
  projectId: "sen-app-1c224",
  storageBucket: "sen-app-1c224.appspot.com",
  messagingSenderId: "471060451894",
  appId: "1:471060451894:web:d2caf849c6b0a9547a7e97"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
export default firebase