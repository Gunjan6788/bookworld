import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.module.css'

export default class Router extends React.Component {

    render() {

        return (
            <>
                <div className='m-5'>
                    <nav className="navbar fixed-top navbar-dark bg-dark p-2 shadow-sm rounded">
                        <div className='container'>
                            <Link to='/'><img src='/logo.png' alt='logo' className='float-left' style={{ width: '100px' }} /></Link>

                            <div className='float-left'>
                                <Link to='/About'><span>About</span></Link>
                                <Link to='/Products'><span>New Arrival</span></Link>
                                <Link to='/Login'><span>Log In</span></Link>
                                <Link to='/Signup'><span>Sign up</span></Link>
                                <Link to='/Cart'><img src="/cart.png" alt='cart_icon' style={{ height: '40px' }} /></Link>
                            </div>

                        </div>
                    </nav>
                </div>
                <div class="alert alert-warning alert-dismissible fade show pt-4     text-center" role="alert">
                    <strong>Hollo!!!</strong> You should check books, Hurry 10% discount.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

            </>
        )
    }
}

