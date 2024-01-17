import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate();
    const logout = () => {

        // session delete
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        toast.success('Logout Success');
        return redirect('/');
    }
    return (
        <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg stroke p-0">
                    <h1> <NavLink className="navbar-brand" to="/">
                        <span className="fa fa-bell-o" /> Blog Store
                    </NavLink></h1>
                    {/* if logo is image enable this   
  <a class="navbar-brand" href="#index.html">
<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
  </a> */}
                    <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                        <span className="navbar-toggler-icon fa icon-close fa-times" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-lg-5 mr-lg-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Signup">Signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login">Login</NavLink>
                            </li>
                            
                                
                            
                            {(() => {
                                if (localStorage.getItem('user_id')) {
                                    return (
                                        <li className="nav-item">
                                            <NavLink className="nav-link text-black" to="/profile">Hi... {localStorage.getItem('user_name')}/Profile</NavLink>
                                        </li>
                                    )
                                }
                            })()}



                        </ul>

                        {(() => {
                            if (localStorage.getItem('user_id')) {
                                return (
                                    <div className='col-sm-4 col-6 top-login-butt text-right '>
                                        <Link to="javascript:void(0)" onClick={logout}
                                            className='button-head-mow3 text-black'>Logout</Link>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className='col-sm-4 col-6 top-login-butt text-right mt-sm-2'>
                                        <Link to="/login" className='button-head-mow3 text-black'>Login</Link>
                                    </div>
                                )
                            }
                        }
                        )()
                        }
                        {/*/search-right*/}
                        <div className="navbar-nav search-right nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#Pages" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fa fa-search" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="search_form">
                                    <form action="search-results.html" method="GET">
                                        <input type="text" placeholder="Search" />
                                        <button type="submit" className="btn" value><span className="fa fa-search" aria-hidden="true" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*//search-right*/}
                    </div>
                    {/* toggle switch for light and dark theme */}
                    <div className="mobile-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="mode-container">
                                        <i className="gg-sun" />
                                        <i className="gg-moon" />
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                    {/* //toggle switch for light and dark theme */}
                </nav>


            </div>
        </header>


    )
}

export default Header