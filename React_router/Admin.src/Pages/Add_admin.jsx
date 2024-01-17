import React, { useState } from 'react'
import axios from 'axios'                                            
import { toast } from 'react-toastify'

function Add_admin() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password:""
    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const submithandle = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/admin', formvalue)

        if (res.status == 201) {
            toast.success('Register Success!')
            setFormvalue({ ...formvalue,id: "", name: "", email: "", password: "" });
        }
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Admin</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Add Admin
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

export default Add_admin