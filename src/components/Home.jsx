import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import Products from './Products';


const Home = () => {
    
    const [products, setProducts] = useState([...Array(20)].map(p => {
        
        return {
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            image: faker.image.image(),
            price: faker.commerce.price()
        }
    }))
    console.log(products)
    return (
        <div>
          <Products products={products} />
        </div>
    )
}

export default Home