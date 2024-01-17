import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

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
          return redirect('/');
        }
        else {
          toast.error('Your Account Blocked so contact customer care!');
          setFormvalue({ ...formvalue, email: "", pwd: "" });
        }
      }
      else {
        toast.error('Wrong Password !');
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

    if(formvalue.email == "" || formvalue.email == null)
    {
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
      <div className='container m-5'>
        <h1>Login</h1>
        <form action="" method='post'>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
            <input type="Password" value={formvalue.pwd} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Password" name="pwd" />
          </div>
          <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
          <Link to="/Signup" cla className='float-right'> If you not registered then signup here</Link >
        </form>

      </div>
    </div>
  )
}

export default Login