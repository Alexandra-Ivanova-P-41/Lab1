function time (){
    var date = new Date();
    var day=new Array("Mo","Tu","We","Th","Fr","Sa","Su");
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
       minutes = "0" + minutes;
    }
    if (seconds < 10){
            seconds = "0" + seconds;
    }

    var str = hours + ":" + minutes + ":" + seconds + ", " + day[date.getDay()];
    

    document.getElementById("clock").innerHTML = str;
}
setInterval("time()", 1000)