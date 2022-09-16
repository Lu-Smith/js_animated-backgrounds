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

//subtitle

let subtitle = document.getElementById('subtitle');
let subtitleMeasurements = subtitle.getBoundingClientRect();
let subtitleData = {
    x: subtitleMeasurements.left,
    y: 73,
    width: subtitleMeasurements.width,
    height: 0.5,
}


//canvas1
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

canvas1.width = option1.offsetWidth;
canvas1.heigth = option1.offsetHeight;
let particleArray1 = [];
const numberOfParticles1 = 400;

class Particle1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 1;
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

        if (
            this.x < subtitleData.x + subtitleData.width &&
            this.x + this.size > subtitleData.x &&
            this.y < subtitleData.y + subtitleData.height &&
            this.y + this.size > subtitleData.y
            )
             {
                this.y -= 1;
                this.weight *= -0.4;
                this.size = Math.random() * 2 + 1;
            }
    }
    draw(){
        ctx1.fillStyle = 'orangered';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx1.closePath();
        ctx1.fill();
    }
}


class ParticleSecond1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 1;
        this.weight = Math.random() * 0.5 + 1;
        this.directionX = 2;
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

        if (
            this.x < subtitleData.x + subtitleData.width &&
            this.x + this.size > subtitleData.x &&
            this.y < subtitleData.y + subtitleData.height &&
            this.y + this.size > subtitleData.y
            )
             {
                this.y -= 1;
                this.weight *= -0.4;
                this.size = Math.random() * 2 + 1;
            }
    }
    draw(){
        ctx1.fillStyle = 'red';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx1.closePath();
        ctx1.fill();
    }
}

    function init1() {
        particleArray1 = [];
        for(let i = 0; i < numberOfParticles1; i++) {
            const x = Math.random() * canvas1.width;
            const y = Math.random() * canvas1.height;
            particleArray1.push(new Particle1(x, y));
            particleArray1.push(new ParticleSecond1(x, y));
        }
    }
    init1();

        

    function animate1() {
        ctx1.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
        for (let i = 0; i < particleArray1.length; i++){
            particleArray1[i].update();
            particleArray1[i].draw();
        }
        ctx1.fillRect(subtitleData.x, subtitleData.y, subtitleData.width, subtitleData.height);
        requestAnimationFrame(animate1);
        
    }

    animate1();

    window.addEventListener('resize', function(){
        canvas1.width = option1.offsetWidth;
        canvas1.heigth = option1.offsetHeight;
        subtitleMeasurements = subtitle.getBoundingClientRect();
        subtitleData = {
            x: subtitleMeasurements.left,
            y: 73,
            width: subtitleMeasurements.width,
            height: 0.5,
        }
        init1();
    })


//canvas2
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

canvas2.width = option2.offsetWidth;
canvas2.heigth = option2.offsetHeight;
let particleArray2 = [];
const numberOfParticles2 = 300;

class Particle2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 30 + 1;
        this.weight = Math.random() * 0.5 + 1;
        this.directionY = 20;
    }
    update(){
        if(this.y > canvas2.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 0.5 + 1;
            this.x = Math.random() * canvas2.width * 1.3;
        }
        this. weight += 0.015;
        this.y += this.weight;
        this.x += this.directionY;

        if (
            this.x < subtitleData.x + subtitleData.width &&
            this.x + this.size > subtitleData.x &&
            this.y < subtitleData.y + subtitleData.height &&
            this.y + this.size > subtitleData.y
            )
             {
                this.y -= 1;
                this.weight *= -0.4;
                this.size = Math.random() * 2 + 1;
            }
    }
    draw(){
        if (this.size < 20) {
            ctx2.fillStyle = 'white';
        } else {
            ctx2.fillStyle = 'black';
        }
        
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx2.closePath();
        ctx2.fill();
    }
}




    function init2() {
        particleArray2 = [];
        for(let i = 0; i < numberOfParticles2; i++) {
            const x = Math.random() * canvas2.width;
            const y = Math.random() * canvas2.height;
            particleArray2.push(new Particle2(x, y));
        }
    }
    init2();

        

    function animate2() {
        ctx2.fillStyle = 'rgb(146, 139, 139, 0.05)';
        ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
        for (let i = 0; i < particleArray2.length; i++){
            particleArray2[i].update();
            particleArray2[i].draw();
        }
        requestAnimationFrame(animate2);
        
    }

    animate2();

    window.addEventListener('resize', function(){
        canvas2.width = option2.offsetWidth;
        canvas2.heigth = option2.offsetHeight;
        subtitleMeasurements = subtitle.getBoundingClientRect();
        subtitleData = {
            x: subtitleMeasurements.left,
            y: 73,
            width: subtitleMeasurements.width,
            height: 0.5,
        }
        init2();
    })