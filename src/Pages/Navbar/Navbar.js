import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    console.log(user)

    const logout = () => {
        signOut(auth);
        toast.success("Sign Out")
    };

    return (
        <div class="navbar bg-accent px-10">
            <div class="flex-1">
                <Link to="/" class="btn btn-ghost normal-case text-xl text-white">Todo App</Link>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li className='text-white font-bold'><Link to="/">Home</Link></li>
                    {user ? <li className='mt-2'><button onClick={logout} className='btn btn-sm text-white p-1'>SignOut</button></li> : <li className='font-bold text-white'><Link to="/login">Login</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;