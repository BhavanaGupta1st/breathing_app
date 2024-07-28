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

// Get the modal
var modal = document.getElementById("privacyModal");

// Get the button that opens the modal
var btn = document.getElementById("startBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// Get the OK button element
var okBtn = document.getElementById("modalOkBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal and go to breathing page
span.onclick = function() {
    modal.style.display = "none";
    window.location.href = "breathing.html";
}

// When the user clicks the OK button, close the modal and proceed
okBtn.onclick = function() {
    modal.style.display = "none";
    window.location.href = "breathing.html";
}

// When the user clicks anywhere outside of the modal, close it and go to breathing page
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        window.location.href = "breathing.html";
    }
}
