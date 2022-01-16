import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyB3d6pBQerimDH50JaGeGM29srh75wISVU",
        authDomain: "rent-a-toad.firebaseapp.com",      
        databaseURL: "https://rent-a-toad-default-rtdb.firebaseio.com"
    });

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
