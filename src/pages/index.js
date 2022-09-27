import React from "react"
import { Link } from "gatsby"
import Slider from "../components/slider"
import { items } from "../data/slider"
import Image from "../components/image"
import { FiCheckCircle } from 'react-icons/fi'

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gradient-to-b from-cyan-600 via-cyan-200/20 to-white md:rounded-lg p-4 md:p-8">
        <div className="flex flex-col md:w-1/2 items-center">
          <div className="flex flex-col w-fit items-center my-8 md:my-0">
            <h1 className="text-white filter drop-shadow-md font-bold text-4xl md:text-5xl border-b border-cyan-600 pb-2 mb-1 w-fit">ICB World Trade</h1>
            <h2 className="text-gray-700 text-xl md:text-2xl mx-auto tracking-looser">Professional Restaurant Equipment</h2>
          </div>
          <div className="flex flex-col md:p-4 my-auto">
            <h3 className="flex flex-col md:flex-row items-center text-xl">
              <div className="flex flex-row items-center">
              <FiCheckCircle className="mr-4 -mb-1 text-3xl md:text-2xl filter drop-shadow-md text-green-600"/>
              <strong className="mr-1 text-2xl md:text-xl">The ICB Advantage:</strong></div> Professional Equipment at Low Prices
            </h3>
            <p className="my-2">
            Reduce your costs by purchasing your equipment from ICB World Trade. Browse our products or visit our Cash & Carry Warehouse to see how much you can save on high quality, reliable professional equipment. We accept cash, Visa and Mastercard. Dealer Inquiries Welcome.
            </p>
          </div>
          <Link to="/products" className="button my-8 md:my-0 mx-auto">
            Browse Our Products
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            loading="eager" 
            src="commercial-kitchen-hero.jpg" 
            alt="ICB World Trade - Professional Restaurant Equipment" 
            className="rounded-lg shadow-lg hover:scale-[101%] transition-all duration-500" 
          />
        </div>
      </div>
      <Slider className="my-16" items={items} />
      <div className="mt-16 mb-8 flex flex-col">
        <h2 className="p-4 md:p-2 font-bold text-3xl mb-8">Visit Us At Our New Location</h2>
        <iframe 
          title="ICB World Trade Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47752.83306851648!2d-114.06808933568799!3d51.02170691316164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371707435eaaaab%3A0x10e0f64f650c3af6!2sIcb%20World%20Trade%20Corp!5e0!3m2!1sen!2sca!4v1664311531842!5m2!1sen!2sca" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[600px] rounded-lg shadow-lg"
        />
      </div>
    </>
  )
}

export default Home