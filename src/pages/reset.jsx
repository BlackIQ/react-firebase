import {Link} from "react-router-dom";

const Reset = () => {
    return (
        <div>
            <h2>Recover your account</h2>
            <hr />
            <div className='row'>
                <div className='col-md-6'>
                    <div className='m-1'>
                        <h4 className='text-info'>Reset your password</h4>
                        <p>Just enter the email and we will handle it.</p>
                        <form>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input placeholder='Email' className='form-control' type='email' id='email'/>
                            <br />
                            <button className='btn btn-info w-100'>Send reset password</button>
                        </form>
                        <br />
                        <p>If you remembered password, <Link to='/login' className='text-info'>login now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reset;
