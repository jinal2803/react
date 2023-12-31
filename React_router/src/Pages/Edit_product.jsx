import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_product() {
    
    useEffect(() => {
        editdata();
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        address: "",
        pincode: "",
        status: ""
    })

    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/product/${id}`);
        //console.log(res.data);
        setFormvalue({
            ...formvalue, id: res.data.id, address: res.data.address,
            pincode: res.data.pincode, status: res.data.status
        });
    }

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }


    const validation = () => {
        let result = true;
        if (formvalue.address == "" || formvalue.address == null) {
            toast.error('Address field is required !');
            result = false;
        }

        if (formvalue.pincode == "" || formvalue.pincode == null) {
            toast.error('Pincode field is required !');
            result = false;
        }

        if (formvalue.status == "" || formvalue.status == null) {
            toast.error('password field is required !');
            result = false;
        }

        return result;
    }

    const redirect = useNavigate();
    const submithandel = async (e) => {

        e.preventDefault();// not refresh page on submit
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/product/${formvalue.id}`, formvalue);
            if (res.status == 200) {
                toast.success('Update Success !');
                setFormvalue({ ...formvalue, address: "", pincode: "", status: "" });
                return redirect('/Manage_product');
            }
        }
    }
    return (

        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Edit Product</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Edit Product
                                </div>

                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>address</label>
                                        <input name="address" value={formvalue.address} onChange={changehandel} className="form-control" type="text" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>pincode</label>
                                        <input name="pincode" value={formvalue.pincode} onChange={changehandel} className="form-control" type="number" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>status</label>
                                        <input name="status" value={formvalue.status} onChange={changehandel} className="form-control" type="text" />
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

export default Edit_product