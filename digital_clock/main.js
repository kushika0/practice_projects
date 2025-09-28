function digital_clock(){
    const now= new Date();
    let hr=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();


    hr=hr<10 ? "0"+hr: hr;
    min= min<10?"0"+min: min;
    sec = sec<10?"0"+sec:sec;

    document.getElementById("clock").textContent=`${hr}:${min}:${sec}`;
}
setInterval(digital_clock ,1000);
digital_clock()

// setInterval(() => {
//   const now = new Date();
//   document.querySelector("#clock").textContent =
//     `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;


    
// }, 1000);