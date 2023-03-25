import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({cart}) => {
   
  return (
   <div className='header'>
    <span>Your Shop</span>
    <ul className='nav'> 
<li className='prod'>
    <Link to={"/"}>Home</Link>
</li>
<li className='prod1'>
    <Link to={"/cart"}>My Cart {cart.items.length>0 && <span>({cart.items.length})</span>}</Link>
</li>
    </ul>
   </div>
  )
}
const mapStateToProps=(state)=>({
    cart:state.cart
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Header)