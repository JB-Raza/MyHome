import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { TestinomialCard } from './Cards.jsx'

// sample data
import {reviews} from '../data.js'

export default function Testinomial() {

    let [isEnd, setIsEnd] = useState(false)
    let [isBeginning, setIsBeginning] = useState(true)

    let swiperRef = useRef(null)

    const slideNext = () => {
        return swiperRef.current?.swiper?.slideNext()
    }
    const slidePrev = () => {
        return swiperRef.current?.swiper?.slidePrev()
    }

    return (
        <section className="container-fluid testinomial-section bg-light-normal-gray py-5">
            <section className="custom-container row d-flex justify-content-between align-items-center m-auto">
                {/* col 1 */}
                <div className="col col-12 col-md-5 col-lg-4 p-1">
                    <p className="normal-text text-center text-md-start fw-semibold color-dark-gray">Stories from Our Clients
                    </p>
                    <h3 className="fw-semibold text-center text-md-start color-dark-blue-gray mb-4">Read Testimonials from Our
                        Satisfied Clients</h3>
                    <p className="my-2 color-dark-gray text-center text-md-start normal-text lh-lg pe-4">Discover why our
                        clients love working with us.
                        Read their
                        stories and experiences to understand the value and dedication we bring to every real estate
                        journey. Your satisfaction is our success.</p>

                    {/* listing navigation btns */}
                    <div className="d-flex justify-content-center justify-content-md-start gap-2 mt-4">

                        <button
                        aria-label='slide prev'
                            onClick={slidePrev}
                            disabled={isBeginning == true ? true : false}
                            className={`btn swiper-btn ms-1 border-0 rounded-0 ${isBeginning == true ? "swiper-button-disabled" : ""}`}>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>

                        <button
                        aria-label='slide next'
                            onClick={slideNext}
                            disabled={isEnd}
                            className={`btn swiper-btn rounded-0  ${isEnd ? "swiper-button-disabled" : ""}`}>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>

                {/* cards row col-2 */}
                <div className="col col-12 col-md-7 p-0 my-4 me-0 ">
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        spaceBetween={30}
                        onSlideChange={(swiper) => {
                            setIsEnd(swiper.isEnd)
                            setIsBeginning(swiper.isBeginning)
                        }}
                        breakpoints={{
                            990: { slidesPerView: 2 },
                            768: { slidesPerView: 1 },
                            600: { slidesPerView: 2 },
                        }}
                        className='d-flex align-items-center'
                    >

                        {reviews && reviews.map((review, index) => (
                            <SwiperSlide key={index} className='h-auto'>
                                <TestinomialCard review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </section>
    )
}

