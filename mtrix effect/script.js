let p = document.querySelector("p");

let text = p.innerText;

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghihklmnopqrstuvwxyz'

let transition = 0;
function random() {
    let str = text.split('').map((elem, idx) => {
        if (idx < transition) {
            return elem;
        }
        return characters[Math.floor(Math.random()*52)];
    }).join('');
    p.innerText = str

    transition+=1.2;
    
}

setInterval(random, 100)