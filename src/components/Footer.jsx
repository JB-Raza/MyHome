import React from 'react'

export default function Footer() {
    return (
        <>
            {/* footer */}
            <div className="container-fluid bg-dark-blue-gray m-0 px-3 d-flex justify-content-center align-items-center">
                <div className="container-fluid bg-dark-blue-gray m-0 px-5 d-flex justify-content-center align-items-center">
                    <footer className="footer row gy-5 row-cols-5 py-4 my-5">
                        {/* col 1 */}
                        <div className="col col-12 col-sm-8 col-md-4 mx-auto mx-md-0">
                            {/* logo */}
                            <div className="logo h-25 mb-3 text-center text-md-start">
                                <img  loading='lazy'  src="logo-light-90.png" alt="MyHome" className="img-fluid h-75" />
                            </div>
                            <p className=" color-light-normal-gray text-center text-md-start normal-text lh-lg pe-4">Discover leading
                                properties and secure your dream home with us. Expert guidance and support at every step.</p>
                            <div className="contact-details d-flex flex-column gap-2">
                                <div className="d-flex justify-content-center justify-content-md-start gap-2 align-items-center">
                                    <span className="icon d-none d-md-flex">
                                        <i className="fa-solid fa-mobile-screen text-white"></i>
                                    </span>
                                    <a href="tel:(123) 345-6789" className="contact-num color-light-normal-gray small-text">(123)
                                        345-6789</a>
                                </div>
                                <div className="d-flex justify-content-center justify-content-md-start gap-2 align-items-center">
                                    <span className="icon d-none d-md-flex">
                                        <i className="fa-solid fa-location-dot text-white"></i>
                                    </span>
                                    <a href="https://www.google.com/maps?q=New+York,+NY"
                                        className="color-light-normal-gray text-white small-text" target="_blank">518-520 5th AveNew
                                        York, USA</a>
                                </div>
                                <div className="d-flex justify-content-center justify-content-md-start gap-2 align-items-center">
                                    <span className="icon d-none d-md-flex">
                                        <i className="fa-solid fa-at text-white"></i>
                                    </span>
                                    <a href="mailto:support@tangiblewp.com"
                                        className="email color-light-normal-gray text-white small-text">support@tangiblewp.com</a>
                                </div>

                            </div>

                        </div>

                        {/* useful links */}
                        <div className="useful-links col col-12 col-sm-6 col-md-3 col-lg-2">
                            <h5 className="text-white text-center text-sm-start">Useful Links</h5>
                            <ul className="nav mt-sm-5 pt-3 text-white flex-column gap-0 gap-md-3">
                                <li className="nav-item mb-2 text-white">
                                    <a href="#" className="nav-link w-100 p-0 text-white small-text">About Us</a>
                                    <i className="fa fa-angle-right extra-sm-icon d-inline d-md-none"></i>
                                </li>
                                <li className="nav-item mb-2 text-white">
                                    <a href="#" className="nav-link w-100 p-0 color-light-normal-gray small-text">Contact Us</a>
                                    <i className="fa fa-angle-right extra-sm-icon d-inline d-md-none"></i>
                                </li>
                                <li className="nav-item mb-2 text-white">
                                    <a href="#" className="nav-link w-100 p-0 color-light-normal-gray small-text">Our Team</a>
                                    <i className="fa fa-angle-right extra-sm-icon d-inline d-md-none"></i>
                                </li>
                                <li className="nav-item mb-2 text-white">
                                    <a href="#" className="nav-link w-100 p-0 color-light-normal-gray small-text">Blog</a>
                                    <i className="fa fa-angle-right extra-sm-icon d-inline d-md-none"></i>
                                </li>
                                <li className="nav-item mb-2 text-white">
                                    <a href="#" className="nav-link w-100 p-0 color-light-normal-gray small-text">Privacy Policy</a>
                                    <i className="fa fa-angle-right extra-sm-icon d-inline d-md-none"></i>
                                </li>
                            </ul>
                        </div>

                        {/* newest listings */}
                        <div className="col col-12 col-sm-6 col-md-5 col-lg-3">
                            <h5 className="text-white text-center text-sm-start">Newest Listings</h5>
                            <div className="mt-sm-5 pt-3 d-flex flex-column align-items-center align-items-sm-start gap-3 ">
                                {/* listing 1 */}
                                <div className="listing d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
                                    <img  loading='lazy'  src="listingcards/1.jpg" alt="1" className="img-fluid" />
                                    <span className="text-white">
                                        <h6 className="fw-normal m-0 text-center text-sm-start">Minimalist style flat</h6>
                                        <p className="price m-0 small-text text-light-normal-gray text-center text-sm-start">$ 1,800,000
                                        </p>
                                    </span>
                                </div>
                                {/* listing 2 */}
                                <div className="listing d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
                                    <img  loading='lazy'  src="listingcards/2.jpg" alt="1" className="img-fluid" />
                                    <span className="text-white">
                                        <h6 className="fw-normal m-0 text-center text-sm-start">Modern two bedroom apartment</h6>
                                        <p className="price m-0 small-text text-light-normal-gray text-center text-sm-start">$ 1,500
                                            /month</p>
                                    </span>
                                </div>
                                {/* listing 3 */}
                                <div className="listing d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
                                    <img  loading='lazy'  src="listingcards/3.jpg" alt="3" className="img-fluid" />
                                    <span className="text-white">
                                        <h6 className="fw-normal m-0 text-center text-sm-start">Quaint Timber Cottage</h6>
                                        <p className="price m-0 small-text text-light-normal-gray text-center text-sm-start">$ 5,000
                                            /month</p>
                                    </span>
                                </div>
                                {/* listing 4 */}
                                <div className="listing d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
                                    <img  loading='lazy'  src="listingcards/4.jpg" alt="4" className="img-fluid" />
                                    <span className="text-white">
                                        <h6 className="fw-normal m-0 text-center text-sm-start">Bright Office</h6>
                                        <p className="price m-0 small-text text-light-normal-gray text-center text-sm-start">$ 1,800,000
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* social links */}
                        <div className="col col-10 col-lg-3 mx-auto px-xl-4">
                            <h5 className="text-white text-center text-lg-start">Follow Our Social Media</h5>
                            {/* social links */}
                            <div
                                className="mt-lg-5 pt-3 d-flex justify-content-center justify-content-lg-start flex-wrap text-white gap-2">
                                <a href="#" className="footer-social-icon text-white border border-secondary rounded-circle">
                                    <i className="fa-brands fa-facebook-f  m-0 p-0"></i></a>
                                <a href="#" className="footer-social-icon text-white border border-secondary rounded-circle"><i
                                    className="fa-brands fa-x-twitter"></i></a>
                                <a href="#" className="footer-social-icon text-white border border-secondary rounded-circle"><i
                                    className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#" className="footer-social-icon text-white border border-secondary rounded-circle"><i
                                    className="fa-brands fa-instagram"></i></a>
                                <a href="#" className="footer-social-icon text-white border border-secondary rounded-circle"><i
                                    className="fa-brands fa-youtube"></i></a>
                                <a href="#" className="footer-social-icon text-white border border-secondary rounded-circle"><i
                                    className="fa-brands fa-tiktok"></i></a>
                                <a href="#" className="footer-social-icon text-white border border-secondary rounded-circle"><i
                                    className="fa-brands fa-telegram"></i></a>
                            </div>
                        </div>

                    </footer>
                </div>
            </div>

            <div className="last-footer bg-dark-blue-gray">
                <p className="py-4 small-text color-dark-gray text-center m-0">
                    © 2024 MyHome - Real Estate WordPress Theme. All rights reserved.
                </p>
            </div>
        </>
    )
}
