import {FaGoogle} from "react-icons/fa";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h2>Register a new account</h2>
            <hr />
            <div className='row'>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-info'>Register with Email</h4>
                        <p>Create a new account with your Email and password</p>
                        <form>
                            <label className='form-label' htmlFor='name'>Name</label>
                            <input placeholder='Name' className='form-control' type='text' id='name'/>
                            <br />
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input placeholder='Email' className='form-control' type='email' id='email'/>
                            <br />
                            <label className='form-label' htmlFor='password'>Password</label>
                            <input placeholder='Password' className='form-control' type='password' id='password'/>
                            <br />
                            <button className='btn btn-info w-100'>Register</button>
                        </form>
                        <br />
                        <p>If you have an account, <Link to='/login' className='text-info'>login now</Link></p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-danger'>Or create with Google</h4>
                        <p>You can use your Google account to create account.</p>
                        <button className='btn btn-danger w-100'><FaGoogle className='float-start' /><span className='float-end'>Register with Google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
