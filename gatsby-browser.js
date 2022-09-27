import React from 'react'
import Navbar from './src/components/navbar'
import './src/styles/global.css'

export const wrapPageElement = ({ element }) => {
    return (
        <>
            <Navbar/>
            {element}
        </>
    )
}