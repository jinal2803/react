import React from 'react'

function Contact() {
    return (
        <div>
            <div className="w3l-contact-breadcrumb w3l-search-results py-5 text-center">
                <div className="container py-lg-4 py-md-3">
                    <ul className="breadcrumbs-custom-path mb-sm-3 mb-2 text-center">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true" /> Contact page </li>
                    </ul>
                    <h3 className="title-big mb-4">Contact Us</h3>
                    <p>We want to provide you with a great experience which is why we want to hear from you. Your feedback helps us
                        bring you more of the events you love and the service you expect.</p>
                </div>
            </div>
            {/* contact breadcrumb */}
            {/* contacts */}
            <section className="w3l-contact-7 pt-5" id="contact">
                <div className="contacts-9 pt-lg-5 pt-md-4">
                    <div className="container">
                        <div className="top-map">
                            <div className="row map-content-9">
                                <div className="col-lg-8">
                                    <p className="mb-4">Your email address will not be published. Required fields are marked *</p>
                                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" className>
                                        <div className="form-grid">
                                            <div className="input-field">
                                                <label> Your name</label>
                                                <input type="text" name="w3lName" id="w3lName" placeholder required />
                                            </div>
                                            <div className="input-field">
                                                <label> Your Email</label>
                                                <input type="email" name="w3lSender" id="w3lSender" placeholder required />
                                            </div>
                                            <div className="input-field">
                                                <label> Your Phone</label>
                                                <input type="text" name="w3lPhone" id="w3lPhone" placeholder required />
                                            </div>
                                            <div className="input-field">
                                                <label> Your Subject</label>
                                                <input type="text" name="w3lSubject" id="w3lSubject" placeholder />
                                            </div>
                                        </div>
                                        <div className="input-field mt-4">
                                            <label>Enter your message</label>
                                            <textarea name="w3lMessage" id="w3lMessage" placeholder defaultValue={""} />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-style mt-3">Submit</button>
                                    </form>
                                </div>
                                <div className="col-lg-4 cont-details">
                                    <address>
                                        <h5 className>Our Office Address</h5>
                                        <p><span className="fa fa-map-marker" />The blog business centre, 32, My Street,Kingston,
                                            New York 12401United States </p>
                                        <h5 className="mt-4 pt-lg-3">Phone informatiom</h5>
                                        <p><span className="fa fa-mobile" /> <strong>Phone :</strong>
                                            <a href="tel:+1(12) 366 411 4999"> (+1) 366 411 499</a></p>
                                        <p><span className="fa fa-phone" /> <strong>Tel :</strong>
                                            <a href="tel:+1(12) 366 411 4999"> (+1) 366 411 499</a></p>
                                        <p> <span className="fa fa-envelope" /> <strong>Email :</strong>
                                            <a href="mailto:mail@example.com"> mail@example.com</a></p>
                                        <h5 className="mt-4 pt-lg-3 mb-3">Feel free to contact us</h5>
                                        <p>We want to provide you with a great experience which is why we want to hear from you.
                                            .</p>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map mt-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contact