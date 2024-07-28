function startBreathing() {
    window.location.href = "breathing.html";
}

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breathTime);
}

if (container && text) {
    breathAnimation();
    setInterval(breathAnimation, totalTime);
}

//NavBar

const navBar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-button");

setTimeout(() => {
    navBar.classList.add("nav-transition");
}, 100);

menuBtn.addEventListener("click", function () {
    navBar.classList.toggle("active");
});

document.addEventListener("click", function (event) {
    if (!navBar.contains(event.target) && !menuBtn.contains(event.target)) {
        navBar.classList.remove("active");
    }
});

// Timer Button

const startPauseBtn = document.getElementById("startPauseButton");
const displayTimer = document.getElementById("timer");

let [seconds, minutes, hours] = [0, 0, 0]
let timer = null;

const startTimer = () => {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTimer.innerHTML = `${h}:${m}:${s}`;

}

startPauseBtn.addEventListener('click', () => {
    if (startPauseBtn.textContent === 'Start') {
        timer = setInterval(startTimer, 1000);
        startPauseBtn.textContent = 'Stop';
    } else {
        clearInterval(timer);
        startPauseBtn.textContent = 'Start';
    }
})



