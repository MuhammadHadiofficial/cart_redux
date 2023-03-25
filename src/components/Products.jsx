import React from 'react'
import Product from './Product'

const Products = ({ products}) => {
   
    return (
        <div className='productContainer'> {
            products.map(p => (<>
               <Product product={p} />
            </>))
        }</div>
    )
}

export default Products