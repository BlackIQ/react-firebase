import {FaGoogle} from "react-icons/fa";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h2>Login to you account</h2>
            <hr />
            <div className='row'>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-info'>Authenticate with Email</h4>
                        <p>Authenticate with your Email and password</p>
                        <form>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input placeholder='Email' className='form-control' type='email' id='email'/>
                            <br />
                            <label className='form-label' htmlFor='password'>Password</label>
                            <input placeholder='Password' className='form-control' type='password' id='password'/>
                            <br />
                            <button className='btn btn-info w-100'>Login</button>
                        </form>
                        <br />
                        <p>If you do not have an account, <Link to='/register' className='text-info'>create now</Link></p>
                        <p>Forgot your password, <Link to='/reset' className='text-info'>reset it now</Link></p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-danger'>Or login with Google</h4>
                        <p>You can use your Google account to login too.</p>
                        <button className='btn btn-danger w-100'><FaGoogle className='float-start' /><span className='float-end'>Sign in with Google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
