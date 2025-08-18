import React from 'react'
import { additem } from './CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  let dispatch = useDispatch()
  let navigator = useNavigate()

  let cart = useSelector((store)=>store.cart.cartitems)

  let Productlist = [
    {
       id:1, pname:"watch", pprice:2000, pimg:"vite.svg"
    },
    {
       id:2, pname:"laptop", pprice:50000, pimg:"vite.svg"
    },
    {
       id:3, pname:"smartphone", pprice:20000, pimg:"vite.svg"
    },
  ]

  function handlesubmit(e) {
    dispatch(additem(e))
  }
 

  return (
    <>
      
      <h1>Cart-{cart.length}</h1>
      <button onClick={()=>navigator('./showcart')}>Go to Cart Page</button>
      <div style={{display:"flex" ,justifyContent:"space-around"}}>
        {
            Productlist.map((e)=>(
              <div>
                <img src={e.pimg} style={{height:"150px",}}/>
                <h1>{e.pname}</h1>
                <p>{e.pprice}</p>
                <button onClick={()=>{handlesubmit(e)}}>Add to cart</button>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default Products
