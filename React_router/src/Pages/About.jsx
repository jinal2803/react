import React from 'react'

function About() {
    return (
        <div>
            <div className="w3l-about-breadcrumb w3l-search-results py-5 text-center">
                <div className="container py-lg-4 py-md-3">
                    <ul className="breadcrumbs-custom-path mb-sm-3 mb-2 text-center">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true" /> About page </li>
                    </ul>
                    <h3 className="title-big">About Us</h3>
                </div>
            </div>
            {/* about breadcrumb */}
            <section className="w3l-blog-single1 py-5">
                <div className="container py-lg-3">
                    <div className="text2">
                        <p className="text2-text mb-4"><span>We</span> want to provide you with a great experience which is why we want
                            to hear from
                            you. Your feedback helps us bring you more of the events you love and the service you expect. we always
                            appreciate a good nail art tutorial—and this one by polish professional Madeline Poole does not
                            disappoint! Her instructions are clear and the results are clean and creative. Not to mention, this
                            fabulous manicure is the perfect accessory to show off this weekend!</p>
                    </div>
                    <div className="text-bg-image">
                        <img src="assets/images/about.jpg" alt className="img-fluid radius-image" />
                    </div>
                    <div className="text-content-text">
                        <div className="d-grid-2">
                            <div className="text2 mt-4">
                                <h3 className="title-left">Who We Are and What We Stand for</h3>
                                <p className="mt-3">It is a long established fact that a reader will be distracted by the
                                    readable
                                    content of a page when looking at its
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                    letters, as
                                    opposed to using 'Content here,
                                    content here', making it look like readable English. Lorem ipsum dolor sit amet consectetur,
                                    adipisicing
                                    elit. Repellat, hic
                                    reprehenderit
                                    eum cupiditate deleniti asperiores illum ad tenetur aliquam culpa fugit odit consequatur. Rerum
                                    illo
                                    accusantium aliquid quae adipisci fugiat sapiente delectus unde architecto. Tempore saepe maxime
                                    illo
                                    laborum obcaecati.</p>
                                <div className="single-post-content-1 row mt-4 no-gutters">
                                    <div className="col-md-5">
                                        <img src="assets/images/about1.jpg" className="img-fluid radius-image" alt="image" />
                                    </div>
                                    <div className="col-md-7 align-self">
                                        <p className="mt-md-0 mt-4 ml-md-4 ml-0">Lorem ipsum dolor sit amet elit. Dolorum
                                            perspiciatis repellendus velit nam fuga asperiores nemo commodi enim corrupti
                                            tenetur placeat veritatis, dolores laborum illo, ducimus aut quo amet ratione magni
                                            nesciunt? Fuga expedita earum veritatis optio dolorum deserunt eos. Non in simique
                                            quibusdam nihil qui,, debitis ipsa aperiam dicta unde hic.
                                        </p>
                                    </div>
                                </div>
                                <h3 className="title-left mt-sm-5 mt-4">Why choose us</h3>
                                <p className="text2-text2 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis beatae
                                    ullam
                                    expedita. Ut explicabo minima fugit ipsum sapiente fuga et facere est autem iste ducimus totam
                                    accusamus
                                    quasi distinctio, excepturi voluptatum harum porro nostrum nemo iusto culpa expedita cupiditate
                                    omnis.
                                    Animi iusto officiis at voluptates vel laboriosam eum error voluptas. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.</p>
                                <div className="social-media mt-4 text-center">
                                    <ul className="d-flex">
                                        <li className><a href="#"><span className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                                        <li className><a href="#"><span className="fab fa-twitter" aria-hidden="true" /></a></li>
                                        <li className><a href="#"><span className="fas fa-rss" aria-hidden="true" /></a></li>
                                        <li className><a href="#"><span className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                                        <li className><a href="#"><span className="fab fa-google-plus" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About