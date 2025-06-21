let FetchData=async()=>{
  
let url='http://localhost:3000/hotel';

let res= await fetch(url,{method:"GET"});

let data=await res.json();

let Show=document.querySelector("#display");

data.map((e)=>{
  Show.innerHTML+= `
  
  <tr>
    <td>${e.name}</td>
    <td>${e.number}</td>
    <td>${e.city}</td>
    <td>${e.age}</td>
    <td>${e.id}</td>
    <td onclick="Del('${e.id}')">Delete</td>

  </tr>
  
  `
})

}

FetchData();

let Del=(id)=>{

  let url = `http://localhost:3000/hotel/${id}`;
  
  fetch(url,{method:"DELETE"})
}