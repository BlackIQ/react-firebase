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

    return (
        <div>
            <h1>Welcome</h1>
            <br />
        </div>
    );
}

export default Home;
