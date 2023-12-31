import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { toast } from 'react-toastify'

function Login() {
    
    
  const redirect = useNavigate();

  const [formvalue, setFormvalue] = useState({
    email: "",
    pwd: "",
  })

  const changehandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    validation();
    e.preventDefault();
    const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
    if (res.data.length>0) 
    {
      if(res.data[0].pwd==formvalue.pwd) 
      {
        if (res.data[0].status=="Unblock") 
        {
          localStorage.setItem('user_id', res.data[0].id);
          localStorage.setItem('user_name', res.data[0].name);
          toast.success('Login Success !')
          setFormvalue({ ...formvalue, email: "", pwd: "" });
          return redirect('/dashboard');
        }
        else {
          toast.error('Your Account Blocked so contact customer care!');
          setFormvalue({ ...formvalue, email: "", pwd: "" });
        }
      }
      else {
        toast.exrror('Wrong Password !');
        setFormvalue({ ...formvalue, email: "", pwd: "" });
      }
    }
    else {
      toast.error('Username not found !');
      setFormvalue({ ...formvalue, email:"", pwd:"" });
    }
  }

  //validation

  const validation = () => {
    let result = true;
    if(formvalue.email == "" || formvalue.email == null){
      toast.error('E-mail required');
      result = false;
    }
    if(formvalue.pwd == "" || formvalue.pwd == null){
      toast.error('pwd required');
      result = false;
    }
    return result 
  }

    return (
        <div>
            <div className="container">
                <div className="row text-center " style={{ paddingTop: 100 }}>
                    <div className="col-md-12">
                        <img src="assets/img/logo-invoice.png" />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form action='' method='post' role="form">
                                <hr />
                                <h5>Enter Details to Login</h5>
                                <br />
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="Password" value={formvalue.pwd} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Password" name="pwd" />
                                </div>
                                
                                <button className='btn btn-primary' onClick={submithandel}>Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login