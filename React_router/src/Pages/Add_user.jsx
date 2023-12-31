import React, {useState}from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add_user() {

    const [formvalue,setFormvalue] = useState({
        
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:""
    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id:new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
      }


      const submithandle = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/user', formvalue)

        if (res.status == 201) {
            toast.success('Register Success!')
            setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: ""});
        }
    }
    return (
        <div><div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Add User</h1>

                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                Add User
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>name</label>
                                        <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="name"  placeholder="Enter name" name="name" />

                                    </div>
                                    <div className="form-group">
                                        <label>email</label>
                                        <input className="form-control" type="email"
                                         value={formvalue.email} onChange={changehandel}
                                            id='email' placeholder='email' name='email' />

                                    </div>
                                    <div className="form-group">
                                        <label>password</label>
                                        <input className="form-control" type="password"
                                        value={formvalue.password} onChange={changehandel}
                                            id='password' placeholder='password' name='password' />

                                    </div>
                                    <div className="form-group">
                                        <label>mobile</label>
                                        <input className="form-control" type="number"
                                        value={formvalue.mobile} onChange={changehandel}
                                            id='mobile' placeholder='mobile' name='mobile' />

                                    </div>
                                    

                                    <button type="submit" onChange={submithandle}  className="btn btn-info">submit </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


    )
}

export default Add_user