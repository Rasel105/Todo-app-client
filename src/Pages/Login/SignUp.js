import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Fade from 'react-reveal/Fade';
import SocialLogin from '../Shared/SocialLogin';
import signup from '../../assets/signup.jpg'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (loading) {
        return <Loading />
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-error'>Error: {error?.message}</p>
    }
    const handleSignUp = () => {
        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate("/")
    }



    return (

        <Fade left>
            <div class="hero min-h-screen w-3/5 mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" class="input input-bordered" />
                                <p className='my-3 text-primary'><Link to="/login">Have an account? Login</Link></p>
                                {errorElement}
                            </div>
                            <div class="form-control">
                                <button onClick={handleSignUp} class="btn btn-accent text-white">Signup</button>
                            </div>
                            <div class="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                    <div class="text-center lg:text-left">
                        <h1 class="text-2xl font-bold  mb-4">Signup now!</h1>
                        <img className='rounded-3xl' src={signup} alt="" />
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default SignUp;