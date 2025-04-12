import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid p-0">
                {/* logo */}
                <a href="./index.html" className="navbar-brand ms-3 my-3 me-5 ms-md-0 text-md-center">
                    <img className="img-fluid w-75" src="logo.png" alt="Logo" />
                </a>

                {/* toggler btn */}
                <button className="navbar-toggler border rounded-circle p-3 me-2 shadow-none" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fs-6"></span>
                </button>

                {/* offcanvas */}
                <div className="offcanvas nav-offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header bg-light-gray">
                        <button className="btn bg-primary text-white fw-semibold px-4 py-2 rounded-0" type="button">
                            Get In Touch
                        </button>
                        <button type="button" className="btn-close p-3 rounded-circle border" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column flex-lg-row align-items-lg-center">
                        {/* menu items */}
                        <ul
                            className="navbar-nav h-100 m-0 fw-semibold d-flex align-items-stretch justify-content-start gap-3 flex-grow-1">
                            <li className="nav-item" title="Home">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item" title="Search">
                                <a className="nav-link" aria-current="page" href="#">Search</a>
                            </li>
                            {/* listing */}
                            <li className="nav-item customDropdown" title="Listing">
                                <a href="#" className="nav-link">Listing <i className="fa-solid fa-angle-down fa-icon"></i></a>
                                <ul className="dropdown-menu p-0 rounded-0 text-dark">
                                    <li><a className="dropdown-item text-dark" href="#">Style: Mosaic</a></li>
                                    <li><a className="dropdown-item text-dark" href="#">Style: Gallery</a></li>
                                    <li><a className="dropdown-item text-dark" href="#">Style: Carousel</a></li>
                                </ul>
                            </li>
                            {/* pages */}
                            <li className="nav-item customDropdown" title="Pages">
                                <a href="#" className="nav-link">Pages <i className="fa-solid fa-angle-down fa-icon"></i></a>
                                <ul className="dropdown-menu p-0 rounded-0 text-dark">
                                    {/* nested dropdown */}
                                    <li className=" nested-dropdown-link">
                                        <a className="dropdown-item text-dark d-flex justify-content-between align-items-center position-relative"
                                            href="#">
                                            <span>Blog</span>
                                            <i className="fa-solid fa-angle-right fa-icon"></i>
                                        </a>
                                        <ul className="nested-dropdown-menu list-unstyled">
                                            <li><a className="dropdown-item text-dark" href="#">Blog</a></li>
                                            <li><a className="dropdown-item text-dark" href="#">Single Post</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item text-dark" href="#">About Us</a></li>
                                    <li><a className="dropdown-item text-dark" href="#">Contact Us</a></li>
                                    <li><a className="dropdown-item text-dark" href="#">Our Team</a></li>
                                    <li><a className="dropdown-item text-dark" href="#">User Page</a></li>
                                    <li><a className="dropdown-item text-dark" href="#">FAQ</a></li>
                                    <li><a className="dropdown-item text-dark" href="#">Page 404</a></li>
                                </ul>
                            </li>

                        </ul>
                        {/* btns */}
                        <div className="nav-action-btns d-none d-lg-flex gap-2 me-5">
                            <button className="btn color-primary fw-semibold d-flex border-primary justify-content-center align-items-center rounded-0"
                                type="button">
                                <i className="fs-6 fa-solid fa-phone"></i>
                                <span style={{fontSize: "15px"}}>(123) 345-6789</span>
                            </button>
                            <button
                                className="btn fs-6 bg-primary text-white fw-semibold d-flex gap-3 justify-content-center align-items-center rounded-0"
                                type="button">
                                <i className="fa-solid fa-paper-plane"></i>
                                <span>Get In Touch</span>
                            </button>
                        </div>
                        {/* contact us */}
                        <div className="nav-contact d-flex d-lg-none flex-column gap-2 my-5 px-2">
                            <p className="color-yellow m-0">Call Support</p>
                            <p className="m-0">(123) 345-6789</p>
                            <p className="color-yellow m-0">Email Address</p>
                            <p>support@tangiblewp.com</p>
                        </div>

                        {/* social links */}
                        <div className="social-links d-flex d-lg-none flex-wrap gap-2">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                            <a href="#"><i className="fa-brands fa-telegram"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}
