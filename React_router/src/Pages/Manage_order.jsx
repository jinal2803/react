import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Manage_order() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, Setdata] = useState([]);

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/product');
        Setdata(res.data);
    }
    return (
        <div>
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        {/*    Striped Rows Table  */}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Manage_order
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>address</th>
                                                <th>pincode</th>
                                                <th>status</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr> */}
                                        </tbody>
                                        {
                                            data.map((value, index, entarr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.address}</td>
                                                        <td>{value.pincode}</td>
                                                        <td>{value.status}</td>
                                                        
                                                        <td>

                                                            <button className='btn btn-info'>Edit</button>

                                                            <button className='btn btn-danger'>Delete</button>
                                                        </td>
                                                    </tr>

                                                )
                                            })
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/*  End  Striped Rows Table  */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Manage_order