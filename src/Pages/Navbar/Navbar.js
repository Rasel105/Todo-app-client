import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-accent">
            <div class="flex-1">
                <Link to="/" class="btn btn-ghost normal-case text-xl">Todo App</Link>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li className='text-white'><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;