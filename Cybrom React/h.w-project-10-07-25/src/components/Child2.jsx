import Child3 from "./Child3"
import Child4 from "./Child4"

function Child2({data}){
  return(
    <>
    
      <h1>{data.name}</h1>
      <Child3 dataname={data.name}></Child3>
      <Child4 dataage={data.age}></Child4>

    </>
  )
}

export default Child2