import {useEffect} from "react";

import {auth, logout} from "../firebase/firebase";
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
            <h1>Welcome <button onClick={() => logout()} className='btn btn-danger float-end'>Logout</button></h1>
            <br />
        </div>
    );
}

export default Home;
