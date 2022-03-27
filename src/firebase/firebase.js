import {initializeApp} from "firebase/app";

import {getAnalytics} from "firebase/analytics";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    signInAnonymously,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

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

const anonLogin = async () => {
    try {
        await signInAnonymously(auth);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const registerEmailPassword = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
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
    signInWithGoogle,
    loginWithEmailPassword,
    anonLogin,
    registerEmailPassword,
    sendPasswordReset,
    logout,
};
