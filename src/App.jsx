import React from 'react'
import { Navbar, Hero, ListingRow, ContactForm, FeaturedArea, AdvisorRow, Footer, Testinomial } from './components/index.js'
import './selectStyle.css'

export default function App() {

  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* hero carousel container */}
      <Hero />

      {/* listings cards (premium property picks)  */}
      <div className="custom-container mx-auto mt-5 pt-3 ">
        <p className="fs-6 my-2 text-center text-md-start fw-semibold color-dark-gray">Explore Our Top Selections</p>

        <ListingRow rowIndex={1} />

      </div>
      <div className="text-center d-md-none">
      <button className="btn bg-primary fw-semibold regular-btn px-3 py-2 text-white rounded-0">View
        all</button>
      </div>

      {/* contact form */}
      <ContactForm />

      {/* featured areas */}
      <FeaturedArea />

      {/* primium property picks 2 */}
      <div className="container-fluid bg-light-normal-gray py-4">

        <div className="custom-container mx-auto w-100 mt-5">
          <p className="fs-6 mb-2 text-center fw-semibold color-dark-gray">Premium Properties Selection</p>
          <h3 className={`mb-5 fw-semibold color-dark-blue-gray text-center`}>Discover Your Perfect Place</h3>
          <ListingRow rowIndex={2} />

        </div>
      </div>


      {/* advisor row */}
      <AdvisorRow />

      {/* testinomial */}
      <Testinomial />

      <Footer />

    </div>
  )
}