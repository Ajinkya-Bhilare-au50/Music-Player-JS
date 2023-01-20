//$("#slider-range").slider("option", "values", [some_min_val, some_max_val]);

/* Like Button */
var garbage = document.getElementById("garbage1");
garbage.addEventListener("click", function () {
  var flag = garbage.classList.contains("addcolor");
  if (flag) {
    garbage.classList.remove("addcolor");
  } else {
    garbage.classList.add("addcolor");
  }
});
//------------------------------------------------------------

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressbar");
let songs = [
  {
    track: 1,
    songname: "Dekha Tum Ko Jabse ",
    filepath: "./songs/1.mp3",
    artist: "Stebin Ben & Shreya Ghoshal",
    album: "Viral Songs",
    imges: "./images/dekhatumko.jpg",
  },
  {
    track: 2,
    songname: "Kesariyo Rang",
    filepath: "./songs/2.mp3",
    artist: "Sanjith Hegde & Sid Sriram",
    album: "Brahmastra (2022)",
    imges: "./images/kesariya1.jpg",
  },
  {
    track: 3,
    songname: "Raataan Lambiyan",
    filepath: "./songs/3.mp3",
    artist: "Jubin Nautiyal",
    album: "Bagchi",
    imges: "./images/raatLamibiya.jpg",
  },
  {
    track: 4,
    songname: "Jubin Nautiyal Suna Hai Tere Dil Pe Mera",
    filepath: "./songs/3.mp3",
    artist: "Jubin Nautiyal",
    album: "Virag",
    imges: "./images/sanak.png",
  },
];

var k = Math.floor(Math.random() * 4);
next.addEventListener("click", function () {
  myAudio.pause();
});
previous.addEventListener("click", function () {});

var isPlaying = false;
url = songs[k].filepath;
document.getElementById("songname").innerHTML = songs[k].songname;
// artistname;
document.getElementById("artistname").innerHTML = songs[k].artist;

document.getElementById("albumname").innerHTML = songs[k].album;
document.getElementById("addin").src = songs[k].imges;
var myAudio = new Audio(url);

myAudio.onplaying = function () {
    isPlaying = true;
    // document.querySelector("#myinput").prop("min", 0);
    // document.querySelector("#myinput").prop("max", 50);

  var i = 0;
  setInterval(function () {
    document.getElementById("myinput").stepUp(1).value = i++;
  }, 1000);
};
myAudio.onpause = function () {
  isPlaying = false;
};

playbutton = document.getElementById("playButton");
playbutton.addEventListener("click", togglePlay);
function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();

  if (isPlaying) {
    document.getElementById("colored").style.background = "#000000";
    document.getElementById("playButton").classList.remove("fa-pause");
    document.getElementById("playButton").classList.add("fa-play");
    document.getElementById("diver").classList.remove("diver");
  }
  if (!isPlaying) {
    document.getElementById("colored").style.background = "rgb(255,145,0)";
    document.getElementById("playButton").classList.remove("fa-play");
    document.getElementById("playButton").classList.add("fa-pause");
    document.getElementById("diver").classList.add("diver");
    document.getElementById("addin").classList.add("image");
  }
}
