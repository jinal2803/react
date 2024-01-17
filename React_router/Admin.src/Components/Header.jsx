import React, { useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Header() {

     const redirect = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('admin_id')) {
            //  return redirect('/');
        }
    }, []);

    const logout = () => {

        localStorage.removeItem('admin_id');
        localStorage.removeItem('admin_name');
        toast.success('Logout Success');
         return redirect('/');
    }


    return (
        <>

            <div id="wrapper">
                <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link className="navbar-brand" to="/dashboard">COMPANY NAME</Link>
                    </div>
                    <div className="header-right">
                        <a href="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></a>
                        <a href="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></a>
                        <a href="javascript:void(0)" onClick={logout} className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-2x" /></a>


                    </div>


                </nav>
                {/* /. NAV TOP  */}
                <nav className="navbar-default navbar-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">
                            <li>
                                <div className="user-img-div">
                                    <img src="assets/img/user.png" className="img-thumbnail" />
                                    <div className="inner-text">
                                        {
                                            (
                                                () => {
                                                    if (localStorage.getItem('admin_id')) {
                                                        return (
                                                            <>
                                                                {localStorage.getItem('admin_name')}
                                                            </>
                                                        )
                                                    }
                                                }
                                            )()
                                        }

                                        <br />
                                        <small>Last Login : 2 Weeks Ago </small>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <NavLink className="active-menu" to="/dashboard"><i className="fa fa-dashboard " />Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Log In </NavLink>

                                <ul className="nav nav-second-level">
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_emp"><i className="fa fa-toggle-on" />Add Employee</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_emp"><i className="fa fa-toggle-on" />Manage Employee</NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_categories"><i className="fa fa-toggle-on" />Add Categories</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_categories"><i className="fa fa-toggle-on" />Manage Categories</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_contact"><i className="fa fa-toggle-on" />Add_contact</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_contact"><i className="fa fa-toggle-on" />Manage_contact</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_customer"><i className="fa fa-toggle-on" />Add_customer</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_customer"><i className="fa fa-toggle-on" />Manage_customer</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_user"><i className="fa fa-toggle-on" />Add_user</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_user"><i className="fa fa-toggle-on" />Manage_user</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_product"><i className="fa fa-toggle-on" />Add_product</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_product"><i className="fa fa-toggle-on" />Manage_product</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_blog"><i className="fa fa-toggle-on" />Add_blog</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_blog"><i className="fa fa-toggle-on" />Manage_blog</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_cart"><i className="fa fa-toggle-on" />Add_cart</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_cart"><i className="fa fa-toggle-on" />Manage_cart</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <ul className="nav nav-second-level">
                                            <li>
                                                <NavLink to="/Add_admin"><i className="fa fa-toggle-on" />Add_admin</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Manage_admin"><i className="fa fa-toggle-on" />Manage_admin</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>

        </>

    )
} export default Header


