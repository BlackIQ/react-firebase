import {FaGoogle} from "react-icons/fa";
import {Link, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";

import {auth, registerEmailPassword, signInWithGoogle} from "../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (user) history.push('/home');
    }, [user, loading])

    return (
        <div>
            <h2>Register a new account</h2>
            <hr />
            <div className='row'>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-info'>Register with Email</h4>
                        <p>Create a new account with your Email and password</p>
                        <div>
                            <label className='form-label' htmlFor='name'>Name</label>
                            <input placeholder='Name' className='form-control' type='text' id='name' onChange={e => setName(e.target.value)}/>
                            <br />
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input placeholder='Email' className='form-control' type='email' id='email' onChange={e => setEmail(e.target.value)}/>
                            <br />
                            <label className='form-label' htmlFor='password'>Password</label>
                            <input placeholder='Password' className='form-control' type='password' id='password' onChange={e => setPassword(e.target.value)}/>
                            <br />
                            <button onClick={() => registerEmailPassword(name, email, password)} className='btn btn-info w-100'>Register</button>
                        </div>
                        <br />
                        <p>If you have an account, <Link to='/login' className='text-info'>login now</Link></p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-danger'>Or create with Google</h4>
                        <p>You can use your Google account to create account.</p>
                        <button onClick={() => signInWithGoogle()} className='btn btn-danger w-100'><FaGoogle className='float-start' /><span className='float-end'>Register with Google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
