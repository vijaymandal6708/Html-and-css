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

let Fetch2Data=async()=>{
  let res=await fetch("http://localhost:3000/hotel",{method:"GET"});

  let data=await res.json();

  console.log(data);
}

let ins=()=>{

  let Name=document.querySelector("#name").value;
  let Number=document.querySelector("#number").value;
  let City=document.querySelector("#city").value;
  let Age=document.querySelector("#age").value;

  let url =`http://localhost:3000/hotel`;

  fetch(url, {
    method:"POST",

    headers:{
      "Content-type":"application/json"
    },

    body: JSON.stringify(
      {
        name:Name,
        number:Number,
        city:City,
        age:Age

      }
    )


  })

}