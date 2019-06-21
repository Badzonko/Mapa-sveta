function vremenyf(){
    
    var d = new Date();
var time = d.getHours() + ":" + d.getMinutes() ;
document.getElementById("vremeny").innerHTML = time;

}
