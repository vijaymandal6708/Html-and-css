import Child2 from "./Child2"

function Child1({data}){
  return(
    <>
      
      <h1>{data.name}</h1>
      <Child2 data={data}></Child2>

    </>
  )
}

export default Child1