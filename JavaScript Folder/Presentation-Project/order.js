const curr = new Date()

let FetchData=async()=>{
  
let url='http://localhost:3000/hotel';

let res= await fetch(url,{method:"GET"});

let data=await res.json();

DataShow(data)

}


let searchh=async()=>{

   let searchinp=document.querySelector("#searchinp").value.toLowerCase()

   let url='http://localhost:3000/hotel';

   let res=await fetch(url);
   let data=await res.json();

   let FilterData=data.filter((e)=>{

     return e.City.toLowerCase().includes(searchinp) || e.Rooms.toString().includes(searchinp);

   })
   DataShow(FilterData)
}


let DataShow=(data)=>{

let Show=document.querySelector("#display");
Show.innerHTML=""

data.map((e)=>{
  Show.innerHTML+= `
  
  <tr>
    <td>${e.City}</td>
    <td>${e.CheckIn}</td>
    <td>${e.CheckOut}</td>
    <td>${e.Adult}</td>
    <td>${e.Children}</td>
    <td>${e.Rooms}</td>
    <td>₹${e.Adult*2000}</td>
    <td>${curr.getFullYear()}-${curr.getMonth()+1}-${curr.getDate()}</td>
    <td onclick="formopen('${e.id}')">Edit</td>
    <td onclick="Del('${e.id}')">Delete</td>

  </tr>
  
  `
})

}



let Del=(id)=>{

  let url = `http://localhost:3000/hotel/${id}`;
  
  fetch(url,{method:"DELETE"})
}


// let Fetch2Data=async()=>{
//   let res=await fetch("http://localhost:3000/hotel",{method:"GET"});

//   let data=await res.json();

//   console.log(data);
// }



let ins=()=>{
  

  let Rooms=document.querySelector("#rooms").value;
  let City=document.querySelector("#location-select").value;
  let CheckIn=document.querySelector("#check-in").value;
  let CheckOut=document.querySelector("#check-out").value;
  let Adult=document.querySelector("#adult").value;
  let Children=document.querySelector("#children").value;

  let url =`http://localhost:3000/hotel`;

  fetch(url, {
    method:"POST",

    headers:{
      "Content-type":"application/json"
    },

    body: JSON.stringify(
      {
        City:City,
        CheckIn:CheckIn,
        CheckOut:CheckOut,
        Adult:Adult,
        Children:Children,
        Rooms:Rooms

      }
    )


  })

  
  location.href="order.html";
  return false;

}


let formopen=async(id)=>{

  let url= `http://localhost:3000/hotel/${id}`;
  let res=await fetch(url);
  let data=await res.json();

  document.querySelector("#formShow").innerHTML= `
  Enter City: <input type="text" id="city2" value="${data.City}"> <br> <br>
  Enter Check-in Date: <input type="date" id="checkin2" value="${data.CheckIn}"> <br> <br>
  Enter Check-out Date: <input type="date" id="checkout2" value="${data.CheckOut}"> <br> <br>
  Enter Adult count: <input type="number" id="adult2" value="${data.Adult}"> <br> <br>
  Enter Children count: <input type="number" id="child2" value="${data.Children}"> <br> <br>
  Enter Rooms: <input type="number" id="room2" value="${data.Rooms}"> <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <input type="submit" onclick="return UpdateForm('${data.id}')" value="Edit">

  
  `

}


let UpdateForm=(id)=>{

  let City1=document.querySelector("#city2").value;
  let Checkin1=document.querySelector("#checkin2").value;
  let Checkout1=document.querySelector("#checkout2").value;
  let Adult1=document.querySelector("#adult2").value;
  let Child1=document.querySelector("#child2").value;
  let Room1=document.querySelector("#room2").value;
  

  let url= `http://localhost:3000/hotel/${id}`;
  
  fetch(url, {

   method:"PUT",
   headers:{
   "Content-type":"application/json"
   },

   body: JSON.stringify(

     {

        City:City1,
        CheckIn:Checkin1,
        CheckOut:Checkout1,
        Adult:Adult1,
        Children:Child1,
        Rooms:Room1



     }

   )


  })

}


// const urlMap = {
//   Indore:"Rajdhani-Hotel-detail-indore.html",
//   Nagpur:"Townhouse-Hotel-detail-nagpur.html"
// };

// function redirectPage() {
//   const select = document.getElementById("#location-select1");
//   const selectedKey = select.value;
//   const url = urlMap[selectedKey];

//   if(url){
//     location.href=url;
//   }
// }