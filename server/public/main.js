const socket = io();
socket.on('temp', (data) => {
  console.log(data)
  let temp = document.getElementById("fotosensor");
  temp.innerHTML = `${data}` +"CD"
})