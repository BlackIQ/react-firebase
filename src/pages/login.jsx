import {FaGoogle, FaUserSecret} from "react-icons/fa";
import {Link, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";

import {auth, loginWithEmailPassword, anonLogin, signInWithGoogle} from "../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (user) history.push('/home');
    }, [user, loading])

    return (
        <div>
            <h2>Login to you account</h2>
            <hr />
            <div className='row'>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-info'>Authenticate with Email</h4>
                        <p>Authenticate with your Email and password</p>
                        <div>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input placeholder='Email' className='form-control' type='email' id='email' onChange={e => setEmail(e.target.value)}/>
                            <br />
                            <label className='form-label' htmlFor='password'>Password</label>
                            <input placeholder='Password' className='form-control' type='password' id='password' onChange={e => setPassword(e.target.value)}/>
                            <br />
                            <button onClick={() => loginWithEmailPassword(email, password)} className='btn btn-info w-100'>Login</button>
                        </div>
                        <br />
                        <p>If you do not have an account, <Link to='/register' className='text-info'>create now</Link></p>
                        <p>Forgot your password, <Link to='/reset' className='text-info'>reset it now</Link></p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-danger'>Or login with Google</h4>
                        <p>You can use your Google account to login too.</p>
                        <button onClick={() => signInWithGoogle()} className='btn btn-danger w-100'><FaGoogle className='float-start' /><span className='float-end'>Sign in with Google</span></button>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h4 className='text-dark'>Or login anonymously</h4>
                        <p>You can use no account or email or password to login too.</p>
                        <button onClick={() => anonLogin()} className='btn btn-dark w-100'><FaUserSecret className='float-start' /><span className='float-end'>Sign in Anonymously</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
