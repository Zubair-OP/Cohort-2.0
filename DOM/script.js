let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener('click',()=>{
    let btn = document.createElement('button')
    let arr = ['zubair','huzaifa','inshal','abdullah','Ali','Shayan','Hassan','asad','umer','saad','hamza','omar','daniyal']
    let random = Math.floor(Math.random()*arr.length)
    let x = Math.random() * 100
    let y = Math.random() * 100

    let c1 = Math.random()* 256
    let c2 = Math.random()* 256
    let c3 = Math.random()* 256

    let scale = Math.random()*2

    let rotate = Math.random()*360

    btn.innerHTML = arr[random]
    btn.style.position = 'absolute'
    btn.style.left = x + '%'
    btn.style.top = y + '%'
    btn.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    btn.style.scale = scale
    btn.style.rotate = rotate + 'deg'
    btn.style.zIndex = 1
    main.appendChild(btn)
})