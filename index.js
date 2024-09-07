let ap  = document.getElementById("ampm") ;

function displayTime(){
    let datetime = new Date();
    let hr = datetime.getHours();
    let min = zero(datetime.getMinutes());
    let se = zero(datetime.getSeconds()) ;
    if (hr>12){
        hr=hr-12;
        ampm.innerHTML = "PM";
    }
    document.getElementById("hours").innerHTML= zero(hr); 
    document.getElementById("minutes").innerHTML= min; 
    document.getElementById("sec").innerHTML= se; 
}
function zero(num){
    return num<10?"0" + num:num;
}

setInterval(displayTime,500)