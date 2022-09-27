import React, { useState } from "react"
import Image from "../image"
import menu from "../../data/menu.json"
import { Link } from "gatsby"
import { MdMenu, MdClose } from "react-icons/md"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="border-b rounded-b-lg shadow-lg">
        <div className="max-w-screen-xl mx-auto p-4 w-full flex flex-col lg:flex-row items-center">
          <Link to="/" onClick={menuOpen ? () => setMenuOpen(false) : null}>
            <Image
              className=""
              src="logo.jpg"
              alt="ICB World Trade Corp Logo"
            />
          </Link>
          <ul
            className={`flex flex-col md:flex-row items-center space-between mx-auto md:space-x-6 overflow-hidden ${
              menuOpen ? "h-fit" : "h-0 md:h-fit"
            }`}
          >
            {menu.map((item, i) => {
              return (
                <li
                  key={i}
                  className="text-2xl my-2 md:my-0 md:text-xl text-slate-600 hover:text-cyan-600 font-medium"
                >
                  <Link 
                    to={item.slug}
                    onClick={menuOpen ? () => setMenuOpen(false) : null}
                >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <button
        onClick={menuOpen ? () => setMenuOpen(false) : () => setMenuOpen(true)}
        className="absolute right-4 top-[45px] visible md:hidden"
      >
        {menuOpen ?
            <MdClose className="text-4xl filter drop-shadow-md text-black" />
        :
            <MdMenu className="text-4xl filter drop-shadow-md text-cyan-600" />
        }
        
      </button>
    </>
  )
}

export default Navbar
