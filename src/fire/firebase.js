// import firebase and initializeApp 
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAWB2tpCVDEPkccMaldPOd_OOe7NmKZ0UU",
  authDomain: "jklm-4c2a8.firebaseapp.com",
  databaseURL: "https://jklm-4c2a8-default-rtdb.firebaseio.com",
  projectId: "jklm-4c2a8",
  storageBucket: "jklm-4c2a8.appspot.com",
  messagingSenderId: "378650094261",
  appId: "1:378650094261:web:7146826ee4b91f34032cfc"
};

const init = () => {
    firebase.initializeApp(firebaseConfig);
}

init();
  
export default firebase;