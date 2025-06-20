let FetchData=async()=>{
  
let url='http://localhost:3000/hotel'

let res= await fetch(url,{method:"GET"})

let data=await res.json()

console.log(data)

}

FetchData();