import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';



function Single_blog() {

    useEffect(() => {
        fetch();
    }, []);

    const {id}=useParams();
    const [data, Setdata] = useState({});

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        //console.log(res.data);
        Setdata(res.data);
    }

    return (
        <div>
            {/* breadcrumb */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">View Blog</li>
                </ol>
            </nav>
            {/* breadcrumb */}
            {/* //banner */}
            {/* history */}
            <div className="about-page py-5">
                <div className="container py-xl-5 py-lg-3">
                    <h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">View
                        <span className="font-weight-bold">Blog</span>
                    </h3>
                    <div className="row about-head-wthree">
                        <div className="col-lg-6 left-abw3ls">
                            <img src={data.img} width="100%" alt className="img-fluid" />
                        </div>
                        <div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
                            <h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">{data.title}</h4>
                            <p>{data.desc}</p>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* //history */}
           
            <div className="brands-w3ls py-md-5 py-4">
                <div className="container py-xl-3">
                    <ul className="list-unstyled">
                        <li>
                            <i className="fab fa-supple" />
                        </li>
                        <li>
                            <i className="fab fa-angrycreative" />
                        </li>
                        <li>
                            <i className="fab fa-aviato" />
                        </li>
                        <li>
                            <i className="fab fa-aws" />
                        </li>
                        <li>
                            <i className="fab fa-cpanel" />
                        </li>
                        <li>
                            <i className="fab fa-hooli" />
                        </li>
                        <li>
                            <i className="fab fa-node" />
                        </li>
                    </ul>
                </div>
            </div>
            {/* //brands */}
        </div>

    )
}

export default Single_blog