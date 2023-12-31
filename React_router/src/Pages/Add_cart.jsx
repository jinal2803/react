import React, { useState } from 'react'
import axios from 'axios'                                            
import { toast } from 'react-toastify'

function Add_cart() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        prod_id:"",
        qty: "",
        amount: "",
    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id:new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
      }

      const submithandle = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/Cart', formvalue)

        if (res.status == 201) {
            toast.success('Register Success!')
            setFormvalue({ ...formvalue, id: "",prod_id:"", qty: "", amount: "" });
        }
    }
    return (
        <div>
            <div id="page-wrapper">
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

export default Add_cart