import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_blog() {
    useEffect(() => {
        editdata();
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        title: "",
        desc: "",
        img: "",
    })

    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        //console.log(res.data);
        setFormvalue({
            ...formvalue, id: res.data.id, title: res.data.title,
            desc: res.data.desc, img: res.data.img
        });
    }




    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }


    const validation = () => {
        let result = true;
        if (formvalue.title == "" || formvalue.title == null) {
            toast.error('title field is required !');
            result = false;
        }

        if (formvalue.desc == "" || formvalue.desc == null) {
            toast.error('desc field is required !');
            result = false;
        }

        if (formvalue.img == "" || formvalue.img == null) {
            toast.error('img field is required !');
            result = false;
        }


        return result;
    }

    const redirect = useNavigate();
    const submithandel = async (e) => {

        e.preventDefault();// not refresh page on submit
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/blog/${formvalue.id}`, formvalue);
            if (res.status == 200) {
                toast.success('Update Success !');
                setFormvalue({ ...formvalue, title: "", desc: "", img: "" });
                return redirect('/Manage_blog');
            }
        }
    }
    return (

        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Edit blog</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Edit Employee
                                </div>

                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input name="title" value={formvalue.title} onChange={changehandel} className="form-control" type="text" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Desc</label>
                                        <input name="desc" value={formvalue.desc} onChange={changehandel} className="form-control" type="text" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="url" value={formvalue.img} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Image URL" name="img" />
                                        <p className="help-block">Help text here.</p>
                                    </div>


                                    <button type="submit" onClick={submithandel} className="btn btn-info">Save</button>
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

export default Edit_blog