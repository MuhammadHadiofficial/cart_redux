import React from 'react'
import { connect } from 'react-redux'
import {addToCart,removeFromCart} from "../reducer/cart"
// import { addUser } from '../reducer/user'
const Product = ({product,cart,addAnythingtoCart,removeFromCart}) => {
   console.log(cart.items)
  return (
    <div className='product'>
                    <img src={product.image} />
                    <div className='productDesc'>
                        <span >{product.name}</span>
                        <span>${product.price}</span>
                    </div>
                    {
                        cart.items.includes(product) ? <button className='add' onClick={() => {
                            removeFromCart(product.id)
                        }}>
                            Remove from cart
                        </button> : <button className='add' onClick={() => {
                            addAnythingtoCart(product)
                            // addUser("JOhn")
                        }}>
                            Add to cart
                        </button>
                    }


                </div>
  )
}
const mapStateToProps=(state)=>({
    cart:state.cart
})
const mapDispatchToProps=(dispatch)=>({
    addAnythingtoCart:(data)=>dispatch(addToCart(data)),
    removeFromCart:(data)=>dispatch(removeFromCart(data)),
    // addUser:(data)=>dispatch(addUser(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Product)
