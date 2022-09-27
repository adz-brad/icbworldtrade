import React from 'react'
import Navbar from '../navbar'

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <main className="max-w-screen-xl mx-auto p-4">
            {children}
        </main>
    </>
  )
}

export default Layout