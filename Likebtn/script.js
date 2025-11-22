let likebtn = document.querySelector('i');
let img = document.querySelector('img');


img.addEventListener('dblclick', function() {
        likebtn.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
        likebtn.style.transition = 'transform 0.3s ease';
        likebtn.style.rotate = '0deg';
        likebtn.style.opacity = '1';

        setTimeout(() => {
            likebtn.style.transform = 'translate(-50%, -310%) scale(1) rotate(60deg)';
    }, 600);
       setTimeout(() => {
            likebtn.style.opacity = '0';
    }, 1000);

        setTimeout(() => {
           likebtn.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)'; 
        }, 1400);
});

// let arr = [
//         { img: 'https://plus.unsplash.com/premium_photo-1762548729534-ecd689a77503?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
//         { img: 'https://plus.unsplash.com/premium_photo-1762548729534-ecd689a77503?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
//         { img: 'https://plus.unsplash.com/premium_photo-1762548729534-ecd689a77503?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
// ]


// function displayCards(){
//         let clutter = '';
//         arr.forEach((e)=>{
//                 clutter += `
//                 <div class="card">
//                         <img src="${e.img}" alt="Image">
//                         <i class="like-btn">
//         })</i>  
//                 </div>
//                 `;
//         });
//         document.querySelector('section').innerHTML = clutter;
// }

// displayCards();