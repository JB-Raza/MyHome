import React from 'react'
import { FeaturedAreaCard } from './Cards.jsx'

export default function FeaturedArea() {
    return (
        <section className="custom-container mx-auto my-5 py-5">
            <p className="fs-6 my-2 text-center text-md-start fw-semibold color-dark-gray">Discover Your Ideal Neighborhood</p>
            {/* listing slider control btns and heading */}
            <div
                className="d-flex flex-column flex-md-row gap-3 justify-content-md-between align-items-center align-items-md-end">
                <h3 className="fw-semibold color-dark-blue-gray">Explore Our Featured Areas</h3>

                {/* see all listings btn */}
                <div className="listing-controls d-flex align-items-stretch gap-2">
                    <button className="btn bg-primary regular-btn text-white fw-semibold rounded-0" type="button">See all
                        listings</button>
                </div>
            </div>

            {/* all areas */}
            <div className="row g-3 all-areas p-0 h-100 w-100 mx-auto my-4">
            {areas.map((area, index) => (
             <FeaturedAreaCard key={index} area={area} />
            ))}
            </div>
        </section>
    )
}


const areas = [
    {
      title: "Gulberg",
      image: "/areas/manhaton.jpeg",
      quantity: 120
    },
    {
      title: "DHA",
      image: "/areas/bronx.jpeg",
      quantity: 98
    },
    {
      title: "Bahria Town",
      image: "/areas/longIsland.jpeg",
      quantity: 75
    },
    {
      title: "Model Town",
      image: "/areas/4.jpeg",
      quantity: 54
    },
    {
      title: "Johar Town",
      image: "/areas/5.jpeg",
      quantity: 83
    },
    {
      title: "Wapda Town",
      image: "/areas/6.jpeg",
      quantity: 67
    }
  ];
  
