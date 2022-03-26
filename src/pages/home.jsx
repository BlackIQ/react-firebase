import {useState, useEffect} from "react";

import {useAuthState} from "react-firebase-hooks/auth";

import {auth, db, logout} from "../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {useHistory} from "react-router-dom";

const Home = () => {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "/users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return history.push('/login')
        fetchUserName();
    }, [user, loading]);

    return (
        <div>
            <h1>Welcome <b>{name}</b> <button onClick={logout} className='btn btn-danger float-end'>Logout</button></h1>
            <br />
        </div>
    );
}

export default Home;
