import React, { useState } from 'react'
import axios from 'axios'                                            
import { toast } from 'react-toastify'


function Add_categories() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        cate_img: ""
    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id:new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
      }

    const submithandle = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/Categories', formvalue)

        if (res.status == 201) {
            toast.success('Register Success!')
            setFormvalue({ ...formvalue, id: "", cate_name: "", cate_img: "" });
        }
    }

return (
    <div><div id="page-wrapper">
        <div id="page-inner">
            <div className="row">
                <div className="col-md-12">
                <h1 className="page-head-line">Add Categories</h1>

                </div>
            </div>
            {/* /. ROW  */}
            <div className="row">
                <div className="col-md-12 ">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Add Catagories
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="form-group">
                                    <label>cate_name</label>
                                    <input type="text" value={formvalue.cate_name} onChange={changehandel} className="form-control" id="name" placeholder="Enter name" name="cate_name" />

                                </div>
                                <div className="form-group">
                                    <label>cate_img</label>
                                    <input className="form-control"  type="url"
                                    value={formvalue.cate_img} onChange={changehandel} id='img' placeholder='upload img' name='cate_img' />

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

export default Add_categories