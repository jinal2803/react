import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_cart() {

    useEffect(() => {
        editdata();
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        prod_id: "",
        qty: "",
        amount: ""
    })

    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/Cart/${id}`);
        //console.log(res.data);
        setFormvalue({
            ...formvalue, id: res.data.id, prod_id: res.data.prod_id,
            qty: res.data.qty, amount: res.data.amount
        });
    }

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = () => {
        let result = true;
        if (formvalue.prod_id == "" || formvalue.prod_id == null) {
            toast.error('prod_id field is required !');
            result = false;
        }

        if (formvalue.qty == "" || formvalue.qty == null) {
            toast.error('qty field is required !');
            result = false;
        }
        if (formvalue.amount == "" || formvalue.amount == null) {
            toast.error('amount field is required !');
            result = false;
        }
        return result;
    }

    const redirect = useNavigate();
    const submithandel = async (e) => {

        e.preventDefault();// not refresh page on submit
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/Cart/${id}`, formvalue);
            if (res.status == 200) {
                toast.success('Update Success !');
                setFormvalue({ ...formvalue, prod_id: "", qty: "", amount: "" });
                return redirect('/Manage_cart');
            }
        }
    }
    return (
        <div><div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Add cart</h1>

                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                Add Cart
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>prod_id</label>
                                        <input type="number" value={formvalue.prod_id} onChange={changehandel} className="form-control" id="prod_id" placeholder="prod_id" name="prod_id" />

                                    </div>
                                    <div className="form-group">
                                        <label>qty</label>
                                        <input type="number" value={formvalue.qty} onChange={changehandel} className="form-control" id="qty" placeholder="qty" name="qty" />

                                    </div>
                                    <div className="form-group">
                                        <label>amount</label>
                                        <input className="form-control" type="number"
                                            value={formvalue.amount} onChange={changehandel} id='amount' placeholder='amount' name='amount' />

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


export default Edit_cart