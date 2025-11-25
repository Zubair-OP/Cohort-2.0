let keys = document.querySelectorAll(".key");

const pianoNotes = [
  {
    key: "a",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/C4.mp3",
  },
  {
    key: "w",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/Db4.mp3",
  },
  {
    key: "s",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/D4.mp3",
  },
  {
    key: "e",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/Eb4.mp3",
  },
  {
    key: "d",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/E4.mp3",
  },
  {
    key: "f",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/F4.mp3",
  },
  {
    key: "t",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/Gb4.mp3",
  },
  {
    key: "g",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/G4.mp3",
  },
  {
    key: "y",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/Ab4.mp3",
  },
  {
    key: "h",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/A4.mp3",
  },
  {
    key: "u",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/Bb4.mp3",
  },
  {
    key: "j",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/B4.mp3",
  },
  {
    key: "k",
    url: "https://cdn.jsdelivr.net/gh/p-ng/piano@master/audio/C5.mp3",
  },
];

var audio = new Audio();

keys.forEach((key, index) => {
  key.addEventListener("click", () => {
    audio.src = pianoNotes[index].url;
    audio.play();
  });
});
