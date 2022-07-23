import firebase from 'firebase';

 
   const firebaseConfig = {
  apiKey: "AIzaSyAc_Is5ad6vyThOM3_RAtS3QsEXgxjIQVI",
  authDomain: "team-voting-app-9d53f.firebaseapp.com",
  projectId: "team-voting-app-9d53f",
  storageBucket: "team-voting-app-9d53f.appspot.com",
  messagingSenderId: "314919606101",
  appId: "1:314919606101:web:3b012569b37d90184781dc"
};



    
  

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default firebase.database();
