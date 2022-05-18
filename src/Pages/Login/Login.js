import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (loading) {
        return <Loading />
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-error'>Error: {error?.message}</p>
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate("/")
    }

    return (
        <div class="hero min-h-screen w-3/5 mx-auto">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" class="input input-bordered" />
                            <p className='my-3 text-primary' ><Link to="/signup">Don't have an account? Singup</Link></p>
                            {errorElement}
                        </div>
                        <div class="form-control">
                            <button onClick={handleLogin} class="btn btn-accent text-white">Login</button>
                        </div>
                    </div>
                </div>
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl font-bold ">Login now!</h1>
                    <p class="py-6">Login the Todo App and make your todo</p>
                </div>
            </div>
        </div>
    );
};

export default Login;