import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

var firebaseConfig = {
        apiKey: "AIzaSyCp3szvyzcRklQYoEfLyH2fbuYc56fxzC8",
        authDomain: "scheduler-bb7f2.firebaseapp.com",
        databaseURL: "https://scheduler-bb7f2-default-rtdb.firebaseio.com",
        projectId: "scheduler-bb7f2",
        storageBucket: "scheduler-bb7f2.appspot.com",
        messagingSenderId: "372485644717",
        appId: "1:372485644717:web:235225543d8171ae240124",
        measurementId: "G-VSPP4F3YZD"
      };
      // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db =firebase.database().ref()

export default firebase;
