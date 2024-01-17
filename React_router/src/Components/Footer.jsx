import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="py-5">
                <div className="container pt-md-5">
                    <div className="footer-logo mb-lg-5 mb-4 text-center">
                        <a className="navbar-brand" href="index.html"><span className="fa fa-bell-o" /> Blog Store</a>
                        <p>We want to provide you with a great experience. Your feedback helps us
                            bring you more of the events you love and the service you expect.</p>
                    </div>
                    <div className="footer-grid">
                        <div className="w3l-copyright text-center">
                            <div className="social text-center">
                                <ul className="d-flex justify-content-center">
                                    <li className="mx-md-2 mx-1"><a href="#url" className="facebook"><span className="fab fa-facebook-f" /></a></li>
                                    <li className="mx-md-2 mx-1"><a href="#url" className="twitter"><span className="fab fa-twitter" /></a></li>
                                    <li className="mx-md-2 mx-1"><a href="#url" className="rss"><span className="fas fa-rss" /></a></li>
                                    <li className="mx-md-2 mx-1"><a href="#url" className="linkedin"><span className="fab fa-linkedin-in" /></a></li>
                                    <li className="mx-md-2 mx-1"><a href="#url" className="google"><span className="fab fa-google-plus" /></a></li>
                                </ul>
                            </div>
                            <p className="mt-4">© 2020 Blog Store. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="=_blank"> W3layouts
                            </a></p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer */}
            {/* move top */}
            <button onclick="topFunction()" id="movetop" title="Go to top">
                ⤴
            </button>
        </div>

    )
}

export default Footer