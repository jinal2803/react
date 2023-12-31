import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'


function Manage_blog() {

    const redirect = useNavigate();
    useEffect(() => {
        fetch();
    }, []);

    const [data, Setdata] = useState([]);

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/blog');
        Setdata(res.data);
    }

    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/blog/${id}`);
        toast.success(`blog delete success`);
        fetch();
    }
    return (
        <div>

            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                        <h1 className="page-head-line">Manage Blog</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                Manage Blog
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>id</th>
                                                    <th>title</th>
                                                    <th>desc</th>
                                                    <th>img</th>
                                                    <th>button</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value, index, entarr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.title}</td>
                                                                <td>{value.desc}</td>
                                                                <td><img src={value.img} width="50px" alt="" /></td>
                                                                <td>

                                                                    <button className='btn btn-info' onClick={() => { redirect('/Edit_blog/' + value.id); }}>Edit</button>

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

export default Manage_blog