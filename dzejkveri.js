function vremenyf(){
  var d = new Date();
  var n = d.getUTCHours();
  n = n -4;
  document.getElementById("vremeny").innerHTML = n;
}
