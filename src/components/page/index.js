import React from 'react'
import { Link } from 'gatsby'

const Page = ({ children, breadcrumbs, heading }) => {

    return(
        <>
            {breadcrumbs ? 
                <ol className="mt-4 md:mt-0 flex flex-row items-center space-x-2 p-2 mx-1 md:mx-2">
                        <li>
                            <Link to="/" className="text-sm md:text-base font-bold hover:text-cyan-600 transiton-all">
                            Home
                            </Link>
                        </li>
                    {breadcrumbs.map((crumb, i) => {
                        return( 
                            <li key={i}>
                                /
                                <Link to={crumb.slug} className="text-sm md:text-base ml-2 font-bold hover:text-cyan-600 transiton-all">
                                    {crumb.title}
                                </Link>
                            </li> 
                        )
                    })}
                </ol>
            : null }
            <div className="p-4">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold border-b pb-2 mb-8">{heading}</h1>
                </div>
                {children}
            </div>
        </>
    )
}

export default Page