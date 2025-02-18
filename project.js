document.addEventListener("DOMContentLoaded", function(){
    let count = 1;
    let target = 16;
    let speed = 100;

    let interval = setInterval(() =>{
        if (count < target){
            count++;
            document.getElementById("experience-number").textContent = count;
        }else{
            clearInterval(interval);
        }
    }, speed);
});


// console.log (document.querySelector('.hub').style.backgroundColor = 'green');