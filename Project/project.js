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

document.addEventListener("DOMContentLoaded", function(){
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new  IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                let bar = entry.target;
                let percent = bar.getAttribute("data-percent");
                let count = 0;
                let interval = setInterval(()=>{
                    if (count >=percent){
                        clearInterval(interval);
                    }else{
                        count++;
                        bar.style.width = count + "%";
                        bar.parentElement.previousElementSibling.querySelector(".percentage").textContent = count + "%";
                    }
                }, 20);
                observer.unobserve(bar);
            }
        });
    }, {threshold: 0.5});
    progressBars.forEach(bar => observer.observe(bar));
})
