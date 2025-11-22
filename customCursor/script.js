let box = document.querySelector('.box');
let body = document.body;
body.addEventListener('mousemove',(e)=>{
    box.style.left= e.x +'px'
    box.style.top= e.y +'px'
})