import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

/*  This is going to be used for future updates,
    just taking the time to set it up now.
*/

const devConfig = {
	apiKey: process.env.FIRE_BASE_DEV_API_KEY,
	authDomain: "dendenmarvin-dev.firebaseapp.com",
	databaseURL: "https://dendenmarvin-dev.firebaseio.com",
	projectId: "dendenmarvin-dev",
	storageBucket: "dendenmarvin-dev.appspot.com",
	messagingSenderId: process.env.MESSAGING_SENDER_ID_DEV
};

const prodConfig = {
	apiKey: process.env.FIRE_BASE_DEV_API_KEY,
	authDomain: "dendenmarvin.firebaseapp.com",
	databaseURL: "https://dendenmarvin.firebaseio.com",
	projectId: "dendenmarvin",
	storageBucket: "dendenmarvin.appspot.com",
	messagingSenderId: process.env.MESSAGING_SENDER_ID_DEV
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();
const fireStoreDb = firebase.firestore();
const settings = {timestampsInSnapshots: true};
fireStoreDb.settings(settings);

export {auth, database, fireStoreDb};
