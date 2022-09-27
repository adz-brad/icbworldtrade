import React from 'react'
import Image from '../../components/image'
import { Link } from "gatsby"

const Products = ({ products }) => {

    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => {
            return (
              <li key={i}>
                <Link className="flex flex-col items-center h-full shadow-md rounded-md hover:shadow-lg hover:scale-105" to={product.slug}>
                <div className="h-[150px] md:h-[300px] overflow-hidden p-4 md:p-8">
                  <Image 
                    src={product.image} 
                    alt={`${product.title} from ICB World Trade`} 
                    loading="lazy" 
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-4 md:p-8 text-center">
                  <h1 className="md:text-xl font-medium">{product.title}</h1>
                </div>
                </Link>
              </li>
            )
          })}
        </ul>
    )
  }
  
  export default Products