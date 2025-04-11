import React from 'react'

export default function ContactForm() {
  return (
    <section className="contact-us-section container-fluid p-0 my-5 ">
        <div className="row h-100 m-0 d-flex flex-column flex-md-row align-items-center gap-5 justify-content-between">
            {/* col 1 */}
            <div
                className="col col-11 col-md-5 d-flex flex-column justify-content-center text-center text-md-start gap-4 h-100">
                <h1 className="fs-2 text-white">Connect with Us Today</h1>
                <p className="fs-5 fw-normal color-normal-gray">Reach out to our team for any inquiries or assistance you
                    may need. Whether you're looking for your
                    dream home, need guidance on the buying process, or have any other questions, we're here to help.
                    Let's make your real estate journey seamless and enjoyable.</p>

                {/* stats */}
                <div className="row g-4 w-50 w-sm-100 mx-auto mx-sm-0 p-0">
                    <span className="col col-12 col-sm-6 d-flex gap-2 text-white p-0">
                        <h1 className="fs-1 m-0 text-white">100+</h1>
                        <h5 className="fs-6 fw-semibold m-0 border-left-primary py-2 ps-2">Happy Clients</h5>
                    </span>
                    <span className="col col-12 col-sm-6 d-flex gap-2 text-white p-0">
                        <h1 className="fs-1 m-0 text-white">50+</h1>
                        <h5 className="fs-6 fw-semibold m-0 border-left-primary py-2 ps-2">5-star reviews</h5>
                    </span>
                    <span className="col col-12 col-sm-6 d-flex gap-2 text-white p-0">
                        <h1 className="fs-1 m-0 text-white">200+</h1>
                        <h5 className="fs-6 fw-semibold m-0 border-left-primary py-2 ps-2">Successful sales</h5>
                    </span>
                    <span className="col col-12 col-sm-6 d-flex gap-2 text-white p-0">
                        <h1 className="fs-1 m-0 text-white">10+</h1>
                        <h5 className="fs-6 fw-semibold m-0 border-left-primary py-2 ps-2">Years of experience</h5>
                    </span>
                </div>
            </div>
            {/* col 2 -- contact form */}
            <div className="col col-12 col-md-5 d-flex align-items-center contact-form">
                <form className="bg-white p-4 w-100 border-top-primary">
                    <h3 className="fs-4 mb-5 fw-bold color-dark-blue-gray">Contact Us</h3>
                    {/* full name */}
                    <div className="mb-3">
                        <label htmlFor="full-name" className="form-label fw-bold small-text">Full Name</label>
                        <input type="text"
                            className="form-control bg-light-gray shadow-none rounded-0 px-3 py-3 small-text color-dark-blue-gray "
                            id="full-name" placeholder="Jane Doe" />
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold small-text">Email</label>
                        <input type="email"
                            className="form-control bg-light-gray shadow-none rounded-0 px-3 py-3 small-text color-dark-blue-gray"
                            id="email" placeholder="jane.doe@example.com" />
                    </div>
                    {/* reason for contact */}
                    <div className="mb-3">
                        <label htmlFor="reason-for-contact" className="form-label fw-bold small-text">Reason for Contact</label>
                        <input type="text"
                            className="form-control bg-light-gray shadow-none rounded-0 px-3 py-3 small-text color-dark-blue-gray "
                            id="reason-for-contact" placeholder="General Question" />
                    </div>
                    {/* how can we help you */}
                    <div className="mb-3">
                        <label htmlFor="help" className="form-label fw-bold small-text">How can we help you?</label>
                        <textarea name="help" rows="4"
                            className="form-control resize-none bg-light-gray shadow-none rounded-0 px-3 py-2 h-50 small-text color-dark-blue-gray"
                            placeholder="Enter your message here..." id="help"></textarea>
                    </div>

                    <button className="btn bg-yellow fw-semibold rounded-0 px-4 py-2 float-end">Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}
