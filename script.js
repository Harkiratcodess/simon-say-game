let gameSeq = [];
let userSeq = [];
let colors = ["red", "green", "blue", "yellow"];

let level = 0;
let started = false;

let h2 = document.querySelector("#level");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        nextlevel();
    }
});

function nextlevel() {
    userSeq = [];
    level++;

    h2.innerText = "Level " + level;

    let randColor = colors[Math.floor(Math.random() * 4)];
    gameSeq.push(randColor);

    flashBtn(randColor);
}

function flashBtn(color) {
    let btn = document.getElementById(color);
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}

let allBtns = document.querySelectorAll(".btn");

allBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        let color = this.id;
        userSeq.push(color);

        flashBtn(color);
        checkAnswer(userSeq.length - 1);
    });
});


function checkAnswer(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(nextlevel, 1000);
        }
    } else {
        h2.innerText = "Game Over! Press any key to restart";
        document.body.style.backgroundColor = "red";

        setTimeout(() => {
            document.body.style.backgroundColor = "#222";
        }, 300);

        reset();
    }
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}