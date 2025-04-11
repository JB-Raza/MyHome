import React, { useState } from 'react'
import SearchListingSelect from './SearchListingSelect.jsx'
// sample data
import {selectItemList} from '../data.js'

export default function Hero() {
    const [activeBtn, setActiveBtn] = useState("All")

    const handleActiveBtn = (label) => {
        setActiveBtn(label)
    }

    // let itemList = [
    //     { value: "Houses", quantity: 24 },
    //     { value: "Appartments", quantity: 24 },
    //     { value: "Lands", quantity: 24 },
    //     { value: "Offices", quantity: 24 },
    // ]

    return (
        <div className="container-fluid carousel-container p-0">
            {/* caraousal */}
            <div id="carouselExampleSlidesOnly" className="carousel carousel-hero m-0 carousel-fade slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src="bg-imgs/bg-top-1.jpeg" className="d-block h-100 w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="bg-imgs/bg-top-2.jpeg" className="d-block h-100 w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="bg-imgs/bg-top-3.jpeg" className="d-block h-100 w-100" alt="..." />
                    </div>
                </div>
            </div>

            {/* carousel data */}
            <div className="carousel-data-overlay d-flex align-items-center justify-content-center">
                <div className="w-75 text-white d-flex flex-column gap-4 text-center">
                    <h1 className="fw-bold">Find Your Perfect Home</h1>
                    <p className="fs-5 fw-normal">Discover a place you'll love to call home - search through a wide range of
                        properties
                        tailored to your needs
                        and preferences. Explore spaces perfect for living, working, or relaxing.
                    </p>

                    {/* search listing section */}
                    <div className="container search-listing-section mt-3">
                        {/* btns */}
                        <div className="d-flex gap-1 justify-content-center align-items-end">
                                <button onClick={() => handleActiveBtn("All")} className={`btn bg-white text-dark border-0 rounded-0 filter-btn ${activeBtn == "All"? "active-btn": ""}`}>All</button>
                                <button onClick={() => handleActiveBtn("For Sale")} className={`btn bg-white text-dark border-0 rounded-0 filter-btn ${activeBtn == "For Sale"? "active-btn": ""}`}>For Sale</button>
                                <button onClick={() => handleActiveBtn("For Rent")} className={`btn bg-white text-dark border-0 rounded-0 filter-btn ${activeBtn == "For Rent"? "active-btn": ""}`}>For Rent</button>
                            </div>
                        {/* search listing form */}
                        <form action="./index.html"
                            className="search-listing-form d-flex flex-column flex-md-row align-items-stretch justify-content-center gap-3 bg-white">

                            <SearchListingSelect title={"Property Type"} itemList={selectItemList.property} />
                            <SearchListingSelect title={"Region"} itemList={selectItemList.region} />
                            <SearchListingSelect title={activeBtn == "For Rent"? "Rent Price": "Price"} itemList={selectItemList.price} />

                            <input type="submit"
                                className="btn bg-yellow fw-semibold py-2 px-4 color-dark-blue-gray rounded-0"
                                value="Search" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
