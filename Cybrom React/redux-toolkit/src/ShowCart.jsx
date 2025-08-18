import react from 'react'
import { useSelector } from 'react-redux'

const ShowCart = () => {
    let cart = useSelector((store)=>store.cart.cartitems)
  return (
    <>
       <h1 style={{textAlign:"center"}}>All Carts</h1>
       <div className="carts" style={{display:"flex", flexDirection:"column", padding:"20px"}}>
         {
            cart.map((itm)=>(
                <div className="cart" style={{padding:"10px 200px", border:"1px solid black"}}>
                    <img src={itm.pimg} />
                    <h1>{itm.pname}</h1>
                    <h1>{itm.pprice}</h1>
                </div>
            ))
         }
       </div>
    </>
  )
}

export default ShowCart
