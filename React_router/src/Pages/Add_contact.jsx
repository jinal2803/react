import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


function Add_contact() {
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        comment: "",

    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const submithandle = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/contact', formvalue)

        if (res.status == 201) {
            toast.success('Register Success!')
            setFormvalue({ ...formvalue, name: "", email: "", mobile: "", comment: "" });
        }
    }
    return (
        <div><div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="page-head-line">Add Contact</h1>

                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                Add Contact
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>name</label>
                                        <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="name" placeholder="Enter name" name="name" />

                                    </div>
                                    <div className="form-group">
                                        <label>email</label>
                                        <input className="form-control" type="email" value={formvalue.email} onChange={changehandel}
                                            id='email' placeholder='email' name='email' />

                                    </div>
                                    <div className="form-group">
                                        <label>mobile</label>
                                        <input className="form-control" type="number" 
                                        value={formvalue.mobile} onChange={changehandel}
                                            id='mobile' placeholder='mobile' name='mobile' />

                                    </div>
                                    <div className="form-group">
                                        <label>comment</label>
                                        <input className="form-control" type="text"
                                        value={formvalue.comment} onChange={changehandel}
                                            id='comment' placeholder='comment' name='comment' />

                                    </div>

                                    <button type="submit" onClick={submithandle} className="btn btn-info">submit </button>
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

export default Add_contact