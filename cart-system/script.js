

let products = [
    {image:'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D',
    title:'A thin Chair',
    price:'15000 pkr',
    caption: 'Best quality chair'

},
{
        image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D',
        title: 'A modern Chair',
        price: '20000 pkr',
        caption: 'Best quality chair'
},
{
        image: 'https://media.istockphoto.com/id/2096319765/photo/job-interview-recruitment-concepts-row-of-chairs-with-one-odd-one-out-job-opportunity-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=t66hzFqc2AiTVsM4R287EGZrqfUDJbKL9yDB3ab5_2A=',
        title: 'Office Chair',
        price: '25000 pkr',
        caption: 'Best quality chair'
}
]

function showProducts() {
    let productsContainer = document.querySelector('.products');
     let clutter = ''
    products.forEach(product => {
        clutter += `<div class="product flex-shrink-0 w-fit flex flex-col items-start gap-3">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                    <img src="${product.image}" alt="chair" class="w-full h-full object-cover rounded-xl">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.title}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.caption}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>` 
        });
        productsContainer.innerHTML = clutter;
}

let popularProducts = [
    {
        image : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        title: 'Popular Jeans',
        price: '8000 pkr',
        caption: 'Best Style'
    },
    {
        image : "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGplYW5zfGVufDB8fDB8fHww",
        title: 'Popular Jeans',
        price: '5000 pkr',
        caption: 'Best Style'
    },
    {
        image : "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        title: 'Popular Jeans',
        price: '10000 pkr',
        caption: 'Best Style'
    },
]

function PopularProducts() {
    let popularContainer = document.querySelector('.populars');
    let clutter = '';
    popularProducts.forEach(product => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.title}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.caption}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`
    })
    popularContainer.innerHTML = clutter;
}


function Addtocart() {
    
}

showProducts();
PopularProducts();