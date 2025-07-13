import Child5 from "./Child5"

function Child3({dataname}){
  return(
    <>
    
      <h1>{dataname}</h1>
      <Child5 name={dataname}></Child5>

    </>
  )
}

export default Child3