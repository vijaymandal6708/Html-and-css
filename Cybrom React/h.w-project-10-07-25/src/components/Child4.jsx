import Child5 from "./Child5"

function Child4({dataage}){
  return(
    <>

      <h1>{dataage}</h1>
      <Child5 age={dataage}></Child5>
    </>
  )
}

export default Child4