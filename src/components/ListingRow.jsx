import React, { useRef, useState, useMemo } from 'react'
import { ListingCard } from './Cards.jsx'
import { Swiper, SwiperSlide } from "swiper/react"

// sample data
import {listings1, listings2} from '../data.js'

// swiper css
import 'swiper/css';


export default function ListingRow({ rowIndex }) {
    let [isEnd, setIsEnd] = useState(false)
    let [isBeginning, setIsBeginning] = useState(true)
    const [activeFilter, setActiveFilter] = useState("apartment")
    const listings = listings2

    
    const filters = [
        { label: "Apartments", value: "apartment" },
        { label: "Houses", value: "house" },
        { label: "Industries", value: "industry" },
        { label: "Lands", value: "land" },
        { label: "Offices", value: "office" },
    ]

    // filter listings
    const filteredListings = useMemo(() => {
        return listings.filter((listing) => listing.type === activeFilter)
    }, [activeFilter, listings])

    let swiperRef = useRef(null)
    const nextSlide = () => {
        return swiperRef.current?.swiper?.slideNext()
    }
    const slidePrev = () => {
        return swiperRef.current?.swiper.slidePrev()
    }



    return (
        <>
            {/* listing slider control btns and heading */}
            <div className="d-flex mb-4 flex-column flex-md-row gap-3 justify-content-between align-items-center">
                <h3 className={`fw-semibold color-dark-blue-gray ${rowIndex == 1 ? "" : "d-none"}`}>Premium Property Picks</h3>

                {/* filter buttons */}
                <div className={`listing-controls ${rowIndex == 1 ? "d-none" : ""}`}>
                    <div className="filter-btns d-flex gap-3">
                        {filters.map((filter) => (
                            <button key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={`btn bg-light-gray fw-semibold d-none d-md-inline regular-btn px-3 py-2 ${activeFilter == filter.value ? "active-filter-btn text-white" : "color-dark-gray "} rounded-0`}>{filter.label}</button>
                        ))}

                    </div>
                </div>

                {/* listing control btns */}
                <div className="listing-controls d-flex align-items-stretch gap-2">
                    <button
                        className={`btn bg-primary fw-semibold ${rowIndex == 1 ? "d-none d-md-inline" : "d-none"} regular-btn px-3 py-2 text-white rounded-0`}>View
                        all</button>
                    <button
                        onClick={slidePrev} disabled={isBeginning}
                        className={`btn swiper-btn ms-1 rounded-0 ${isBeginning? "swiper-button-disabled" : ""}`}>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button onClick={nextSlide} disabled={ isEnd || rowIndex == 2 && filteredListings.length <= 4} className={`btn swiper-btn rounded-0 ${isEnd || rowIndex == 2 && filteredListings.length <= 4 ? "swiper-button-disabled" : ""}`}>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                spaceBetween={15}
                slidesPerView={4}
                breakpoints={{
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },
                    500: { slidesPerView: 2 },
                    200: { slidesPerView: 1 },
                }}
                onSlideChange={(swiper) => {
                    setIsEnd(swiper.isEnd)
                    setIsBeginning(swiper.isBeginning)
                }}
            >

                {(rowIndex == 1 ? listings1 : filteredListings || [])
                    .slice(0, 6)
                    .map((listing) => (
                        <SwiperSlide key={listing.id}>
                            <ListingCard listing={listing} />
                        </SwiperSlide>
                    ))}
            </Swiper >
        </>
    )
}