import React from 'react'
import Navbar from '../navbar'

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <main className="max-w-screen-xl mx-auto md:py-8">
            {children}
        </main>
    </>
  )
}

export default Layout