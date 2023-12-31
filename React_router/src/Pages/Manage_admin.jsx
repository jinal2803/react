import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Manage_admin() {
    const redirect = useNavigate();
    useEffect(() => {
        fetch();
    }, []);

    const [data, setdata] = useState([]);
    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/admin');
        setdata(res.data);
    }
    //    delete data 
    const deletdata = async (id) => {
        const delt = await axios.delete(`http://localhost:3000/admin/${id}`);
        toast.success('Delete sucessfully');
        fetch();
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                        <h1 className="page-head-line">Manage Admin</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    MANAGE Admin
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Button</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value, index, arr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.name}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.password}</td>

                                                                <td>

                                                                <button className='btn btn-info' onClick={() => { redirect('/Edit_admin/' + value.id); }}>Edit</button>

                                                                    <button onClick={() => { deletdata(value.id); }} className='btn btn-danger'>Delete</button>
                                                                </td> 
                                                             </tr>
                                                        )
                                                    })

                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* End  Kitchen Sink */}
                        </div>
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>

    );
}

export default Manage_admin