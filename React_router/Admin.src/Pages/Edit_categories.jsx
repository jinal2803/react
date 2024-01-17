import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_categories() {
    
    useEffect(() => {
        editdata();
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        cate_img: ""
    })

    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/Categories/${id}`);
        //console.log(res.data);
        setFormvalue({
            ...formvalue, id: res.data.id, cate_name: res.data.cate_name,
            cate_img: res.data.cate_img
        });
    }

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = () => {
        let result = true;
        if (formvalue.cate_name == "" || formvalue.cate_name == null) {
            toast.error('Name field is required !');
            result = false;
        }

        if (formvalue.cate_img == "" || formvalue.cate_img == null) {
            toast.error('img field is required !');
            result = false;
        }
        return result;
    }

    const redirect = useNavigate();
    const submithandel = async (e) => {

        e.preventDefault();// not refresh page on submit
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/Categories/${id}`, formvalue);
            if (res.status == 200) {
                toast.success('Update Success !');
                setFormvalue({ ...formvalue, cate_name: "", cate_img: ""});
                return redirect('/Manage_categories');
            }
        }
    }
    return (
        <div><div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Basic Forms</h1>

                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                Edit Catagories
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>cate_name</label>
                                        <input type="text" value={formvalue.cate_name} onChange={changehandel} className="form-control" id="name" placeholder="Enter name" name="cate_name" />

                                    </div>
                                    <div className="form-group">
                                        <label>cate_img</label>
                                        <input className="form-control" type="url"
                                            value={formvalue.cate_img} onChange={changehandel} id='img' placeholder='upload img' name='cate_img' />

                                    </div>

                                    <button type="submit" onClick={submithandel} className="btn btn-info">save </button>
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


export default Edit_categories