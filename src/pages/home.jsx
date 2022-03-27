import {useEffect} from "react";

import {auth} from "../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

import {useHistory} from "react-router-dom";

const Home = () => {

    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (!user) history.push('/login');
    }, [user, loading])

    if (!user) return null;

    return (
        <div>
            <h1>Welcome {user.displayName ? <b>{user.displayName}</b> : <i>No name</i>}</h1>
        </div>
    );
}

export default Home;
