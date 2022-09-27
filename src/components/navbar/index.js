import React from 'react'
import Image from '../image'
import menu from '../../data/menu.json'
import { Link } from 'gatsby'

const Navbar = () => {

    return(
        <div className="border-b">
            <div className="max-w-screen-xl mx-auto p-4 w-full flex flex-col lg:flex-row items-center">
                <Link to="/">
                    <Image className="" src="logo.jpg" alt="ICB World Trade Corp Logo" />
                </Link>
                <ul className="flex flex-col md:flex-row items-center space-between mx-auto md:space-x-6">
                {menu.map((item, i) => {
                    return(
                        <li key={i} className="text-2xl my-2 md:my-0 md:text-xl text-slate-600 hover:text-cyan-600 font-medium">
                            <Link to={item.slug}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar