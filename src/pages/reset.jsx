import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";

import {auth, sendPasswordReset} from "../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";


const Reset = () => {

    const [email, setEmail] = useState('');

    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (user) history.push('/home');
    }, [user, loading])

    return (
        <div>
            <h2>Recover your account</h2>
            <hr />
            <div className='row'>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-info'>Reset your password</h4>
                        <p>Just enter the email and we will handle it.</p>
                        <div>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input placeholder='Email' className='form-control' type='email' id='email' onChange={e => setEmail(e.target.value)}/>
                            <br />
                            <button onClick={() => sendPasswordReset(email)} className='btn btn-info w-100'>Send reset password</button>
                        </div>
                        <br />
                        <p>If you remembered password, <Link to='/login' className='text-info'>login now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reset;
