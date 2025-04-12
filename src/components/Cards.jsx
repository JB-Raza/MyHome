import React, { useEffect, useRef, memo } from 'react'


// listing card
export const ListingCard = memo(({ listing }) => {

    return (
        <div className="card border-0 bg-white p-0 rounded-0">
            {/* carousel */}
            <div id={listing.id} className="carousel slide" data-bs-wrap="false">
                <div className="carousel-indicators">

                    {listing.images && listing.images.map((image, index) => (
                        <button key={index} type="button" data-bs-target={`#${listing.id}`} data-bs-slide-to={index} className={`${index == 0 ? "active" : ""}`}
                            aria-current="true" aria-label={`image ${index + 1}`}></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {/* listings images */}
                    {listing.images && listing.images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index == 0 ? "active" : ""}`}>
                            <img  loading='lazy' src={image} className="d-block w-100" alt="..." />
                        </div>
                    ))}
                </div>
                {/* carousel control btns */}
                <button className="carousel-control-prev card-carousel-control-btn" type="button"
                    data-bs-target={`#${listing.id}`} data-bs-slide="prev" aria-label='slide-prev'>
                    <span className="text-dark p-3 d-flex align-content-center justify-content-center"
                        aria-hidden="true"><i className="fa-solid fa-angle-left"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next card-carousel-control-btn" type="button"
                    data-bs-target={`#${listing.id}`} data-bs-slide="next" aria-label='slide-next'>
                    <span className="text-dark p-3 d-flex align-content-center justify-content-center"
                        aria-hidden="true"><i className="fa-solid fa-angle-right"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* card overlay btns */}
            <div className="card-img-overlay px-2 py-3 d-flex gap-1 align-items-start">
                <button className="btn rounded-0 btn-sm px-3 extra-sm-text bg-yellow fw-semibold">Featured</button>
                <button className={`btn rounded-0 btn-sm px-3 extra-sm-text text-white fw-semibold ${listing.rentOrSale == "For Rent" ? "bg-red" : "bg-leafy-green"}`}>{listing.rentOrSale}</button>
            </div>
            {/* body */}
            <div className="card-body">
                <h6 className="card-title fs-6 fw-semibold">{listing.title}</h6>
                {/* location and date */}
                <p className="card-text d-flex gap-2 mx-0 w-100 my-1">
                    <span className="d-flex gap-2">
                        <i className="fa-solid fa-location-dot color-red small-text"></i>
                        <span className="extra-sm-text color-dark-gray my-auto">{listing.address}</span>
                    </span>
                    <span className="d-flex gap-2">
                        <i className="fa-solid fa-calendar-days color-red small-text"></i>
                        <span className="extra-sm-text color-dark-gray my-auto">{listing.datePosted} ago</span>
                    </span>
                </p>
                {/* price */}
                <p className="card-text color-primary fw-bold big-normal-text">$ {listing.price} {listing.rentOrSale == "For Rent"? " /month":""}</p>

                {/* beds and baths info */}
                <section className="d-flex gap-1 text-white">
                    <span className="bg-light-gray color-dark-gray px-2 py-1 d-flex gap-1 align-items-center">
                        <i className="fa-solid fa-bed small-text"></i>
                        <span className="extra-sm-text">{listing.bed}</span>
                    </span>
                    <span className="bg-light-gray color-dark-gray px-2 d-flex gap-1 align-items-center">
                        <i className="fa-solid fa-bath small-text"></i>
                        <span className="extra-sm-text">{listing.baths}</span>
                    </span>
                    <span className="bg-light-gray color-dark-gray px-2 d-flex gap-1 align-items-center">
                        <i className="fa-solid fa-expand small-text"></i>
                        <span className="extra-sm-text">{listing.area} ft<sup>2</sup></span>
                    </span>
                </section>
            </div>
            {/* card footer */}
            <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                <span className="listing-owner d-flex gap-2">
                    <img  loading='lazy' src={listing.ownerAvatar} className="img-fluid avatar-img rounded-circle"
                        alt="1" />
                    <span className="extra-sm-text fw-semibold">{listing.listingOwner}</span>
                </span>
                <div className="card-icons d-flex align-items-center gap-2">
                    <i className="fa-regular fa-eye card-icon"></i>
                    <i className="fa-solid fa-code-compare card-icon"></i>
                </div>
            </div>
        </div>
    )
})


// advisor card
export const AdvisorCard = ({ advisor }) => {
    // name, postion, email, phone, avatar
    return (
        <div className="col col-12 col-md-6 col-lg-3 p-2">
            <div className="card advisor-card rounded-0 border-0 overflow-hidden">
                <div className="advisor-avatar overflow-hidden">
                    <img  loading='lazy' src={`${advisor.avatar}`} alt="Sofia Nail - Customer Advisor"
                        className="card-img img-fluid rounded-0" />
                </div>
                <div className="card-body text-center my-3 d-flex flex-column gap-1">
                    <h4 className="card-title m-0 p-0">{advisor.name}</h4>
                    <p className="text-primary small-text m-0">{advisor.position}</p>
                    <p className="email small-text mt-2 mb-0">{advisor.email}</p>
                    <p className="contact-num small-text m-0">{advisor.phone}</p>
                    {/* social links */}
                    <div className="advisor-social-links mt-3 d-flex justify-content-center gap-2">
                        <a href="#" className="card-icon" aria-label="Facebook"><i
                            className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="card-icon" aria-label="Twitter"><i
                            className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" className="card-icon" aria-label="Instagram"><i
                            className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="card-icon" aria-label="Youtube">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

// featured area card
export const FeaturedAreaCard = ({ area }) => {

    return (
        <div className="col col-12 col-md-6 col-lg-4">
            <div className="card text-bg-dark rounded-0 p-0 m-0 border-0 overflow-hidden h-100">
                <img  loading='lazy'  src={area.image} className="card-img rounded-0 h-100" alt="manhatton" />
                <div className="card-img-overlay area-card-overlay d-flex flex-column justify-content-end p-4">
                    <h5 className="card-title fs-4">{area.title}</h5>
                    <p className="card-text opacity-75 fw-semibold">{area.quantity} Listings</p>
                </div>
            </div>
        </div>
    )
}


// testinomial card
export const TestinomialCard = ({review}) => {
    return (
        <div className="card mx-auto h-auto border-0 d-flex flex-column bg-white p-0 rounded-0">
            {/* body */}
            <div className="card-body p-5">
                <h6 className="card-title color-dark-blue-gray fs-5 fw-bold">{review.title}</h6>
                {/* Rating */}
                <p className="card-text d-flex gap-1 mx-0 my-3 color-yellow w-100 my-1">
                    <i className="small-text fa-solid fa-star"></i>
                    <i className="small-text fa-solid fa-star"></i>
                    <i className="small-text fa-solid fa-star"></i>
                    <i className="small-text fa-solid fa-star"></i>
                    <i className="small-text fa-solid fa-star"></i>
                </p>
                <p className="text-muted fw-normal text-dark-blue-gray small-text">{review.description}</p>
            </div>
            {/* card footer */}
            <div className="card-footer bg-white d-flex justify-content-around py-2">
                <div className="d-flex gap-2">
                    <img  loading='lazy'  src={review.ownerAvatar} className="img-fluid avatar-img rounded-circle"
                        alt="1" />
                    <span>
                        <span className="small-text color-dark-blue-gray fw-semibold m-0">{review.owner}</span>
                        <p className="extra-sm-text fw-light m-0">{review.title}</p>
                    </span>
                </div>
                <i
                    className="appostrophy-icon fa-solid fa-quote-right fs-5 rounded-circle color-primary bg-white"></i>
            </div>
        </div>
    )
}
