import React from "react"
import Slider from "../components/slider"
import { items } from "../data/slider"

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-b from-cyan-600 to-white rounded-sm p-4 md:p-8">
        <div className="flex flex-col">
          <h1 className="text-white filter drop-shadow-md font-bold text-5xl border-b border-cyan-600 pb-2 mb-1">ICB World Trade</h1>
          <h2 className="text-gray-700 text-2xl mx-auto tracking-looser">Professional Restaurant Equipment</h2>
        </div>
        <div>
          <h2>The ICB Advantage:</h2>
        </div>
      </div>
      <Slider className="my-8" items={items} />
    </>
  )
}

export default Home