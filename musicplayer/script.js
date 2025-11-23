let song_list_container = document.querySelector('.song-list-container');
let left_panel = document.querySelector('.left-panel');
let backBtn = document.getElementById('back');
let playBtn = document.getElementById('play');
let forwardBtn = document.getElementById('forward');
let progressContainer = document.getElementById('progress-container');
let progressFill = document.getElementById('progress-fill');
let currentTimeElem = document.getElementById('current-time');
let totalDurationElem = document.getElementById('total-duration');


let naats = [
    {
        name : 'Kya batao k kya madina',
        time : '7:40',
        url : '/musicplayer/Videos/Kya-batao.mp3',
        image: '/musicplayer/images/zohaib-ashrafi.jpg'
    },
    {
        name : 'Muhammad Ka Roza',
        time : '6:35',
        url : '/musicplayer/Videos/muhammad-ka-roza.mp3',
        image: 'https://www.poemsurdu.com/wp-content/uploads/2015/06/Junaid-Jamshed-Naats.jpg'
    },
    {
        name : 'Allah humma salli',
        time : '4:00',
        url : '/musicplayer/Videos/allahumma-salli-ala.mp3',
        image: 'https://media.gettyimages.com/id/77496519/photo/to-go-with-afp-story-britain-sudan-darfur-conflict-music-islam-iranian-born-british-musician.jpg?s=612x612&w=gi&k=20&c=wdDyFaObFxZaGtSuGcWwR0c_U4ixWicgQjGBZR-7d3E='
        },
]

let audio = new Audio();
let selectedNaat = 0;


function loadNaats() {
    let clutter = '';
    naats.forEach((naat, id) => {
        clutter += `
            <div class="song-item" data-index="${id}">
                <div class="song-left">
                    <div class="icon-box">
                        <i class="material-icons" style="font-size:0.7rem">play_arrow</i>
                    </div>
                    <span>${id + 1} - &nbsp; ${naat.name}</span>
                </div>
                <span class="song-duration">${naat.time}</span>
            </div>
        `;
    });

    song_list_container.innerHTML = clutter;
    audio.src = naats[selectedNaat].url;
    let bigTitle = document.querySelector('.big-title');
    bigTitle.innerText = naats[selectedNaat].name;
    left_panel.style.backgroundImage = `url('${naats[selectedNaat].image}')`;
}
loadNaats();


song_list_container.addEventListener('click', (e) => {
    let songItem = e.target.closest('.song-item');
    if (songItem) {
        // Remove active class from all song items
        document.querySelectorAll('.song-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked song item
        songItem.classList.add('active');
        
        let index = songItem.getAttribute('data-index');
        selectedNaat = parseInt(index);
        let bigTitle = document.querySelector('.big-title');
        bigTitle.innerText = naats[selectedNaat].name;
        audio.src = naats[selectedNaat].url;
        left_panel.style.backgroundImage = `url('${naats[selectedNaat].image}')`;
        audio.play();
        playBtn.className = 'ri-pause-circle-line ctrl-icon';
    }
});

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playBtn.className = 'ri-pause-circle-line ctrl-icon';
        audio.play();
    } else {
        audio.pause();
        playBtn.className = 'ri-play-circle-fill ctrl-icon';
    }
});

forwardBtn.addEventListener('click',()=>{
    if(selectedNaat < naats.length - 1){
        selectedNaat++;
        loadNaats();
        audio.play();
        playBtn.className = 'ri-pause-circle-line ctrl-icon';
    } else {
        forwardBtn.style.opacity = '0.5';
        forwardBtn.style.pointerEvents = 'none';
    }
})

backBtn.addEventListener('click',()=>{
    if(selectedNaat > 0){
        selectedNaat--;
        loadNaats();
        audio.play();
        playBtn.className = 'ri-pause-circle-line ctrl-icon';
    } else {
        backBtn.style.opacity = '0.5';
        backBtn.style.pointerEvents = 'none';
    }
})


function formatTime(seconds) {
    let min = Math.floor(seconds / 60); // Step A
    let sec = Math.floor(seconds % 60); // Step B
    if (sec < 10) {
        sec = `0${sec}`; // Step C
    }
    return `${min}:${sec}`; // Step D
}


audio.addEventListener('timeupdate', () => {
    let { currentTime, duration } = audio;
    let progressPercent = (currentTime / duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
    currentTimeElem.innerText = formatTime(currentTime);
    totalDurationElem.innerText = formatTime(duration);
});

progressContainer.addEventListener('click', (e) => {
    let width = progressContainer.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});