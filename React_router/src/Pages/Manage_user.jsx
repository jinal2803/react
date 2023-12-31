import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'

function Manage_user() {

    const redirect = useNavigate();
    useEffect(() => {
        fetch();
    }, []);

    const [data, Setdata] = useState([]);

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/user');
        Setdata(res.data);
    }

    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        toast.success('Employee delete success');
        fetch();
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                        <h1 className="page-head-line">Manage User</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    MANAGE User
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>id</th>
                                                    <th>name</th>
                                                    <th>email</th>
                                                    <th>password</th>
                                                    <th>mobile</th>
                                                    <th>button</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value, index, entarr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.name}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.password}</td>
                                                                <td>{value.mobile}</td>
                                                                <td>
                                                                    <button className='btn btn-info' onClick={() => { redirect('/Edit_user/' + value.id); }}>Edit</button>

                                                                    <button onClick={() => { deletedata(value.id); }} className='btn btn-danger'>Delete</button>
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
    )
}

export default Manage_user