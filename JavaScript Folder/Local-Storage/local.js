// let array = [ {name:"ajay",age:25} , {name:"aditya",age:26}];

let array = [1,2,3,4];

let sendData=()=>{
  localStorage.setItem("SendMy",JSON.stringify(array));
};

let showData = () => {
  document.write(JSON.parse(localStorage.getItem("SendMy")));
};

let clearStorage = () => {
  localStorage.clear();
}
