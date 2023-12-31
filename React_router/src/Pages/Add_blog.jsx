import React, { useState } from 'react'
import axios from 'axios'                                            
import { toast } from 'react-toastify'

function Add_blog() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        title: "",
        desc: "",
        img:""
    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id:new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
      }

      const submithandle = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/blog', formvalue)

        if (res.status == 201) {
            toast.success('Register Success!')
            setFormvalue({ ...formvalue, id: "", title: "", desc: "",img:"" });
        }
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Blog</h1>

                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Add Blog
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text" value={formvalue.title} onChange={changehandel} className="form-control" id="title" placeholder="title" name="title" />

                                        </div>
                                        <div className="form-group">
                                            <label>Desc</label>
                                            <input type="text" value={formvalue.desc} onChange={changehandel} className="form-control" id="desc" placeholder="desc" name="desc" />

                                        </div>
                                        <div className="form-group">
                                            <label>Img</label>
                                            <input className="form-control" type="url"
                                                value={formvalue.img} onChange={changehandel} id='img' placeholder='upload img' name='img' />

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

export default Add_blog