import firebase from 'firebase' 
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAGomclNAkx7AAErpEFGiDckZOO77G_D3A",
    authDomain: "cloud-store-a52c6.firebaseapp.com",
    databaseURL: "https://cloud-store-a52c6.firebaseio.com",
    projectId: "cloud-store-a52c6",
    storageBucket: "cloud-store-a52c6.appspot.com",
    messagingSenderId: "1056681824490",
    appId: "1:1056681824490:web:a95637b1232ac117acc793"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();