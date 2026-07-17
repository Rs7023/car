const player = document.getElementById("player");
const enemy1 = document.getElementById("enemy1");
const enemy2 = document.getElementById("enemy2");
const scoreText = document.getElementById("score");

let score = 0;

let playerX = 125;

const keys = {
    ArrowLeft: false,
    ArrowRight: false
};

document.addEventListener("keydown", (e) => {
    if (e.key in keys) keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key in keys) keys[e.key] = false;
});

function resetEnemy(enemy) {
    enemy.style.top = "-120px";
    enemy.style.left = (Math.floor(Math.random() * 3) * 75 + 50) + "px";
}

resetEnemy(enemy1);
enemy2.style.top = "-350px";
enemy2.style.left = "200px";

function isCollide(a, b) {
    const r1 = a.getBoundingClientRect();
    const r2 = b.getBoundingClientRect();

    return !(
        r1.bottom < r2.top ||
        r1.top > r2.bottom ||
        r1.right < r2.left ||
        r1.left > r2.right
    );
}

function game() {

    if (keys.ArrowLeft && playerX > 0) {
        playerX -= 8;
    }

    if (keys.ArrowRight && playerX < 250) {
        playerX += 8;
    }

    player.style.left = playerX + "px";

    moveEnemy(enemy1, 8);
    moveEnemy(enemy2, 10);

    score++;
    scoreText.innerText = score;

    if (isCollide(player, enemy1) || isCollide(player, enemy2)) {
        alert("Game Over!\nScore: " + score);
        location.reload();
        return;
    }

    requestAnimationFrame(game);
}

function moveEnemy(enemy, speed) {

    let top = parseInt(enemy.style.top);

    top += speed;

    if (top > 700) {
        top = -120;
 const lanes = [30, 100, 170, 240];

enemy.style.left =
lanes[Math.floor(Math.random()*lanes.length)] + "px";
    }

    enemy.style.top = top + "px";
}

const lines = document.querySelectorAll(".line");

function moveLines() {

    lines.forEach(line => {

        let top = parseInt(line.style.top || line.offsetTop);

        top += 5;

        if (top > 700)
            top = -100;

        line.style.top = top + "px";

    });

    requestAnimationFrame(moveLines);
}

moveLines();
