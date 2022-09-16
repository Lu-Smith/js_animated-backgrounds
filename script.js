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


class Particle1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.weight = 2;
        this.directionX = 1;
    }
    update(){
        if(this.y > canvas1.height) {
            this.y = 0 - this.size;
            this.weight = 2;
            this.x = Math.random() * canvas1.width;
        }
        this. weight += 0.05;
        this.y += this.weight;
    }
    draw(){
        ctx1.fillStyle = 'red';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx1.closePath();
        ctx1.fill();
        
    }
}

    const particle1 = new Particle1(100, 10);

    function animate() {
        ctx1.fillStyle = 'rgba(255, 255, 255, 0.01)';
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
        particle1.update();
        particle1.draw();
        requestAnimationFrame(animate);
    }

    animate();

