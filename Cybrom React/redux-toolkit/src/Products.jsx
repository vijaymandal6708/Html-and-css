import React from 'react'

const Products = () => {
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
  return (
    <>
      <div style={{display:"flex" ,justifyContent:"space-around"}}>
        {
            Productlist.map((e)=>(
              <div>
                <img src={e.pimg} style={{height:"150px",}}/>
                <h1>{e.pname}</h1>
                <p>{e.pprice}</p>
                <button>Add to cart</button>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default Products
