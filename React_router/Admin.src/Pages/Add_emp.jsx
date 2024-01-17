import React, { useState } from 'react'
import axios from 'axios'                                            
import { toast } from 'react-toastify'

function Add_emp() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password:"",
        mobile:"",
        img:""
    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const submithandle = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/employee', formvalue)

        if (res.status == 201) {
            toast.success('Register Success!')
            setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "", img: "" });
        }
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Employee</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Add Employee
                                </div>
                                
                                <div className="panel-body">
                                        <div className="form-group">
                                            <label>Enter Name</label>
                                            <input name="name" value={formvalue.name} onChange={changehandel} className="form-control" type="text" />
                                            
                                        </div>
										 <div className="form-group">
                                            <label>Enter Email</label>
                                            <input name="email" value={formvalue.email} onChange={changehandel} className="form-control" type="email" />
                                            
                                        </div>
										<div className="form-group">
                                            <label>Enter Password</label>
                                            <input name="password" value={formvalue.password} onChange={changehandel} className="form-control" type="password" />
                                        
                                        </div>
										<div className="form-group">
                                            <label>Enter Mobile</label>
                                            <input name="mobile" value={formvalue.mobile} onChange={changehandel} className="form-control" type="number" />
                                            
                                        </div>
										<div className="form-group">
                                            <label>Upload Image</label>
                                            <input name="img" value={formvalue.img} onChange={changehandel} className="form-control" type="url" />
                                            
                                        </div>
                                   
                                    
                                    <button type="submit" onClick={submithandle} className="btn btn-info">Submit</button>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>

    )
}

export default Add_emp