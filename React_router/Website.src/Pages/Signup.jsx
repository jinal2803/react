
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from "axios"

import { toast } from 'react-toastify'

function Signup() {

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: ""

  })

  const changehandel = (e) => {
    validation();
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:3000/user`, formvalue);

    if (res.status == 201) {
      toast.success('Register Success !');
      setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
    }
  }


  //validation

  const validation = () => {
    let result = true;
    if (formvalue.name == "" || formvalue.name == null) {
      toast.error('name required');
      result = false;
    }
    if (formvalue.email == "" || formvalue.email == null) {
      toast.error('email required');
      result = false;
    }
    if (formvalue.password == "" || formvalue.password == null) {
      toast.error('password required');
      result = false;
    }
    if (formvalue.mobile == "" || formvalue.mobile == null) {
      toast.error('mobile required');
      result = false;
    }
    return result
  }

  return (
    <div>
      <div className='container mt-3'>
        <h1>Signup</h1>
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="name" placeholder="Enter name" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
            <input type="password" value={formvalue.pwd} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter pwd" name="pwd" />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile:</label>
            <input type="number" value={formvalue.mobile} onChange={changehandel} className="form-control" id="mobile" placeholder="Enter mobile" name="mobile" />
          </div>





          <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
          <Link to="/Login" className='float-right'>If you already registered then login here </Link >
        </form>

      </div>
    </div>
  )
}

export default Signup