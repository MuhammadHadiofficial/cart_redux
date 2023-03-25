import React from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../reducers/Cart'
const prod=[
    {
        name:'product 1',
        price:12.99,
        quantity:19
    },
    {
        name:'product 2',
        price:12.99,
        quantity:19
    }
    ,{
        name:'product 3',
        price:12.99,
        quantity:19
    }
    ,{
        name:'product 4',
        price:12.99,
        quantity:19
    }
]
function Home({addAnythingtoCart,cart,removeFromCart}) {
    console.log(cart)
    const addCart=(product)=>{
        addAnythingtoCart(product)
    }
  return (
    <div>Home

        <button onClick={()=>addCart(prod[2])}>update Cart</button>
        <button onClick={()=>removeFromCart(prod[2].name)}>remove from Cart</button>
    </div>
  )
}
const mapStateToProps=(state)=>({
    cart:state.CartReducer
})
const mapDispatchToProps=(dispatch)=>({
    addAnythingtoCart:(data)=>dispatch(addToCart(data)),
    removeFromCart:(data)=>dispatch(removeFromCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)