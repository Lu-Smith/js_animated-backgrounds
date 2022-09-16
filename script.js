//options

const option1 = document.getElementById("variant1");
const option2 = document.getElementById("variant2");
const option3 = document.getElementById("variant3");
const option4 = document.getElementById("variant4");

function changeToOption1() {
        option1.classList.remove("unable");
        option2.classList.add("unable");
        option3.classList.add("unable");
        option4.classList.add("unable");
};

function changeToOption2() {
    option2.classList.remove("unable");
    option1.classList.add("unable");
    option3.classList.add("unable");
    option4.classList.add("unable");
};

function changeToOption3() {
    option3.classList.remove("unable");
    option2.classList.add("unable");
    option1.classList.add("unable");
    option4.classList.add("unable");
};

function changeToOption4() {
    option4.classList.remove("unable");
    option2.classList.add("unable");
    option3.classList.add("unable");
    option1.classList.add("unable");
};

//canvas1
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

canvas1.width = option1.offsetWidth;
canvas1.heigth = option1.offsetHeight;
let particleArray1 = [];
const numberOfParticles = 300;

class Particle1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 1;
        this.weight = Math.random() * 0.5 + 1;
        this.directionX = -2;
    }
    update(){
        if(this.y > canvas1.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 0.5 + 1;
            this.x = Math.random() * canvas1.width * 1.3;
        }
        this. weight += 0.015;
        this.y += this.weight;
        this.x += this.directionX;
    }
    draw(){
        ctx1.fillStyle = 'orangered';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx1.closePath();
        ctx1.fill();
        
    }
}

    function init1() {
        for(let i = 0; i < numberOfParticles; i++) {
            const x = Math.random() * canvas1.width;
            const y = Math.random() * canvas1.height;
            particleArray1.push(new Particle1(x, y));
        }
    }
    init1();

    function animate() {
        ctx1.fillStyle = 'rgba(255, 255, 255, 0.03)';
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
        for (let i = 0; i < particleArray1.length; i++){
            particleArray1[i].update();
            particleArray1[i].draw();

        }
        requestAnimationFrame(animate);
    }

    animate();

