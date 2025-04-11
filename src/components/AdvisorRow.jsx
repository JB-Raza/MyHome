import React from 'react'
import {AdvisorCard} from './Cards.jsx'
// sample data
import {advisors} from '../data.js'

export default function AdvisorRow() {
  return (
    <section className="custom-container mx-auto my-5 pt-3">
      {/* text wrapper */}
      <div className="wrapper w-75 mx-auto d-flex flex-column gap-2">
        <p className="fs-6 my-2 text-center fw-semibold color-dark-gray">Meet Our Team</p>
        <h3 className="fw-semibold text-center color-dark-blue-gray">Your Real Estate Advisors</h3>
        <p className="fs-5 my-2 text-center fw-light color-dark-gray">Meet our dedicated real estate agents, bringing
          unique expertise to your success. They’ll guide you through every step of your property journey with
          personalized advice and support.</p>
      </div>
      {/* advisor card row */}
      <div className="row my-5">
        {(advisors || []).map((advisor) => (
          <AdvisorCard key={advisor.name} advisor={advisor} />
        ))}
      </div>
    </section>
  )
}

