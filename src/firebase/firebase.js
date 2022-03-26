import {initializeApp} from "firebase/app";

import {getAnalytics} from "firebase/analytics";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCi7eBl1Dx6di07VfN1h3KYMcYnjyW89TQ",
    authDomain: "reactjs-firebase-1.firebaseapp.com",
    projectId: "reactjs-firebase-1",
    storageBucket: "reactjs-firebase-1.appspot.com",
    messagingSenderId: "902007613322",
    appId: "1:902007613322:web:f67a6ede63afa30a8bca73",
    measurementId: "G-WJKEY2FTQE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app)

const loginWithEmailPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const registerEmailPassword = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

const logout = () => {
    signOut(auth);
}

export {
    auth,
    db,
    signInWithGoogle,
    loginWithEmailPassword,
    registerEmailPassword,
    sendPasswordReset,
    logout,
};
