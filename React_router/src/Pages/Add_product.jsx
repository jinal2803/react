import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add_product() {

  const [formvalue, setFormvalue] = useState({
    id: "",
    address: "",
    pincode: "",
    status: "",
  })

  const changehandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const submithandle = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/product', formvalue)

    if (res.status == 201) {
      toast.success('Register Success!')
      setFormvalue({ ...formvalue, address: "", pincode: "", status: "" });
    }
  }
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Add Product</h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  Add Product
                </div>

                <div className="panel-body">
                  <div className="form-group">
                    <label>address</label>
                    <input name="address" value={formvalue.address} onChange={changehandel} className="form-control" type="text" />

                  </div>
                  <div className="form-group">
                    <label>pincode</label>
                    <input name="pincode" value={formvalue.pincode} onChange={changehandel} className="form-control" type="number" />

                  </div>
                  <div className="form-group">
                    <label>status</label>
                    <input name="status" value={formvalue.status} onChange={changehandel} className="form-control" type="text" />

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

export default Add_product