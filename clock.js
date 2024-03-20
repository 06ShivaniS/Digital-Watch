let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



setInterval(()=>{
    let currnetTime = new Date();
    hrs.innerHTML = currnetTime.getHours();
    min.innerHTML = currnetTime.getMinutes();
    sec.innerHTML = currnetTime.getSeconds();
},1000)