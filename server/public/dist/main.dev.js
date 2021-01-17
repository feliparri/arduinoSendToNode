"use strict";

var socket = io();
socket.on('temp', function (data) {
  console.log(data);
  var temp = document.getElementById("fotosensor");
  temp.innerHTML = "".concat(data) + "CD";
});