import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvvJEnoAJ3aX0Gcw2qAhRFlMi-31A-R_I",
    authDomain: "anime-comment.firebaseapp.com",
    projectId: "anime-comment",
    storageBucket: "anime-comment.appspot.com",
    messagingSenderId: "105971759820",
    appId: "1:105971759820:web:dceb7d34bbe5f12ada2069",
    measurementId: "G-SK5CPNNGXM"
  };

const fire= firebase.initializeApp(firebaseConfig);

export default fire;