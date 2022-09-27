import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import Image from '../image'

const Slider = ({ items, className }) => {

    const [ active, setActive ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(active === 0){
                setActive(active + 1)
            }
            else if(active === items.length - 1){
                setActive(0)
            }
            else{
                setActive(active + 1)
            }
        }, 3000);
        return () => clearInterval(interval);
      }, [ active ]);

    return(
        <>
            <div className={`relative h-[650px] md:h-[500px] w-full overflow-hidden ${className}`}>
                {items.map((item, i) => {
                    let activeClass;
                    if(i < active){
                        activeClass = '-translate-x-[calc(100vw*2)]'
                    }
                    else if(i > active){
                        activeClass = 'translate-x-[calc(100vw*2)]'
                    }
                    else if(i === active){
                        activeClass = '-translate-x-1/2'
                    }
                    return (
                        <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 w-full h-full flex flex-col md:flex-row items-center transform transition-all duration-500 ${active === i ? 'z-20 opacity-100' : ' z-10 opacity-0'} ${activeClass}`}>
                            <div className="h-fit md:h-full flex flex-col justify-center md:w-1/2 p-4 md:py-8">
                                <h1 className="text-center md:text-left text-xl md:text-3xl font-bold">
                                    {item.title}
                                </h1>
                                {item.content}
                                {item.button ?
                                    item.button.internal ?
                                            <Link className="button mx-auto md:mx-0" to={item.button.slug}>
                                                {item.button.title}
                                            </Link>
                                    :
                                    <a className="button mx-auto md:mx-0" href={item.button.slug} target="_blank" rel="noopener noreferrer">
                                        {item.button.title}
                                    </a>
                                : null }
                            </div>
                            <Image 
                                className="h-content py-4 md:py-0 my-auto md:my-0 md:w-1/2 md:h-full rounded-lg"
                                loading="eager"
                                src={item.image} 
                                alt={item.title} 
                            />
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row items-center justify-center">
                <button className="mr-4 hover:text-cyan-600 font-bold transition-all" onClick={active !== 0 ? () => setActive(active - 1) : () => setActive(items.length - 1)}>
                    Previous
                </button>
                {items.map((item, i) => {
                    return(
                        <button 
                            className="relative h-4 w-4 rounded-full border border-black/30 shadow-md mx-1 hover:shadow-lg hover:border-black/60"
                            onClick={() => setActive(i)}
                        >
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full ${active === i ? 'bg-cyan-600/50' : ''}`} />
                        </button>
                    )
                })}
                <button className="ml-4 hover:text-cyan-600 font-bold transition-all" onClick={active !== items.length - 1 ? () => setActive(active + 1) : () => setActive(0)}>
                    Next
                </button>
            </div>
        </>
    )
}

export default Slider