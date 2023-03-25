import React, { useContext, useEffect, useState } from 'react'
import { connect } from 'react-redux';

import Product from './Product'
const Cart = ({cart}) => {

    let totalprice=0;
    const [total,setTotal]=useState(0)
    useEffect(()=>{
       let sum=cart.items.reduce((count,currentItem)=>count+Number(currentItem.price),0)
       console.log(sum,'sum')
        setTotal(sum)
    },[cart])
  return (
    <div style={{textAlign:'center'}}>
        <span> My Cart</span>
        <br/>
        <span style={{fontSize:"30px"}}>Total: ${total.toFixed(2)}</span>
        <div className='productContainer'>
            {
                cart.items.map(cartItem=>(
                    <Product product={cartItem}/>
                ))
            }
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>({
    cart:state.cart
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
