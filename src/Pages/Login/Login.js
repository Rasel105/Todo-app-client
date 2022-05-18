import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'


const Login = () => {
  
    return (
        <div class="hero min-h-screen w-3/5 mx-auto">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Password" class="input input-bordered" />
                            <p className='my-3 text-primary' ><Link to="/signup">Don't have an account? Singup</Link></p>
                        </div>
                        <div class="form-control">
                            <button class="btn btn-accent text-white">Login</button>
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