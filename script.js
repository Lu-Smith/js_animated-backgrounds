//options

const option1 = document.getElementById("variant1");
const option2 = document.getElementById("variant2");
const option3 = document.getElementById("variant3");
const option4 = document.getElementById("variant4");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

button1.addEventListener('mouseover', function() {
    option1.classList.remove("unable");
    option2.classList.add("unable");
    option3.classList.add("unable");
    option4.classList.add("unable");
    init1();
    animate1();
    canvas1.width = option1.offsetWidth;
    canvas1.heigth = option1.offsetHeight;
})

button2.addEventListener('mouseover', function() {
    option2.classList.remove("unable");
    option1.classList.add("unable");
    option3.classList.add("unable");
    option4.classList.add("unable");
    init2();
    animate2();
    canvas2.width = option2.offsetWidth;
    canvas2.heigth = option2.offsetHeight;
})

button3.addEventListener('mouseover', function() {
    option3.classList.remove("unable");
    option2.classList.add("unable");
    option1.classList.add("unable");
    option4.classList.add("unable");
    
    canvas3.width = option3.offsetWidth;
    canvas3.heigth = option3.offsetHeight;
    init3();
    animate3();
})

button4.addEventListener('mouseover', function() {
    option4.classList.remove("unable");
    option2.classList.add("unable");
    option3.classList.add("unable");
    option1.classList.add("unable");
    init4();
    animate4();
    canvas4.width = option4.offsetWidth;
    canvas4.heigth = option4.offsetHeight;
})



//subtitle

let subtitle = document.getElementById('subtitle');
let subtitleMeasurements = subtitle.getBoundingClientRect();
let subtitleData = {
    x: subtitleMeasurements.left,
    y: 76,
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
        this.directionY = -1;
    }
    update(){
        if(this.y > canvas1.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 0.5 + 1;
            this.x = Math.random() * canvas1.width * 1.3;
        }
        this. weight += 0.015;
        this.y += this.weight * 0.02;
        this.x += this.directionY;
    }
    draw(){
        ctx1.fillStyle = 'white';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size * 5, 0, Math.PI *2);
        ctx1.closePath();
        ctx1.fill();
    }
}


class ParticleSecond1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 1;
        this.weight = 0.0008;
        this.directionX = 2;
    }
    update(){
        if(this.x > canvas1.width) {
            this.x = Math.random() * canvas1.width;
            this.weight = 0.0008;
            this.y = 0 - this.size;
        }
        this. weight += 0.00015;
        this.x += this.weight;
        this.y += this.directionX;
    }
    draw(){
        ctx1.fillStyle = '#a7bcb9';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size * 18, 0, Math.PI * 2);
        ctx1.fill();
        ctx1.closePath();
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
        ctx1.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
        for (let i = 0; i < particleArray1.length; i++){
            particleArray1[i].update();
            particleArray1[i].draw();
        }
        requestAnimationFrame(animate1); 
    }
     
    animate1();

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
        this.weight = Math.random() * 0.05 + 1;
        this.directionY = 7;
    }
    update(){
        if(this.y > canvas2.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 0.05 + 1;
            this.x = Math.random() * canvas2.width - 200;
        }
        this. weight += 0.015;
        this.y += this.weight * 0.25;
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
        if (this.size < 2) {
            ctx2.fillStyle = '#596e79';
        } else if (this.size > 20) {
            ctx2.fillStyle = '#596e79';
        } else {
            ctx2.fillStyle = 'white';
        }
        
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx2.fill();
        ctx2.closePath();
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

    function animate2() {
        ctx2.fillStyle = 'rgb(146, 139, 139, 0.8)';
        ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
        for (let i = 0; i < particleArray2.length; i++){
            particleArray2[i].update();
            particleArray2[i].draw();
        }
        requestAnimationFrame(animate2); 
    }

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
        animate2();
    })


//canvas3
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');

canvas3.width = option3.offsetWidth;
canvas3.heigth = option3.offsetHeight;
let particleArray3 = [];
const numberOfParticles3 = 400;

class Particle3 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 1;
        this.weight = Math.random() * 0.5 + 1;
        this.directionX = -2;
    }
    update(){
        if(this.y > canvas3.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 0.5 + 1;
            this.x = Math.random() * canvas3.width * 1.3;
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
        ctx3.fillStyle = '#ffcbcb';
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx3.closePath();
        ctx3.fill();
    }
}


class ParticleSecond3 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 1;
        this.weight = Math.random() * 0.5 + 1;
        this.directionX = 2;
    }
    update(){
        if(this.y > canvas3.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 0.5 + 1;
            this.x = Math.random() * canvas3.width * 1.3;
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
        ctx3.fillStyle = '#ffb5b5';
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx3.closePath();
        ctx3.fill();
    }
}

    function init3() {
        particleArray3 = [];
        for(let i = 0; i < numberOfParticles3; i++) {
            const x = Math.random() * canvas3.width;
            const y = Math.random() * canvas3.height;
            particleArray3.push(new Particle3(x, y));
            particleArray3.push(new ParticleSecond3(x, y));
        }
    }

    function animate3() {
        ctx3.fillStyle = 'rgb(255, 132, 124, 0.05)';
        ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
        for (let i = 0; i < particleArray3.length; i++){
            particleArray3[i].update();
            particleArray3[i].draw();
        }
        ctx3.fillRect(subtitleData.x, subtitleData.y, subtitleData.width, subtitleData.height);
        requestAnimationFrame(animate3);
        
    }

    window.addEventListener('resize', function(){
        canvas3.width = option3.offsetWidth;
        canvas3.heigth = option3.offsetHeight;
        subtitleMeasurements = subtitle.getBoundingClientRect();
        subtitleData = {
            x: subtitleMeasurements.left,
            y: 73,
            width: subtitleMeasurements.width,
            height: 0.5,
        }
        init3();
    })

  



//canvas4
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');

canvas4.width = option4.offsetWidth;
canvas4.heigth = option4.offsetHeight;
let particleArray4 = [];
const numberOfParticles4 = 400;



class Particle4 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.weight = Math.random() * 0.05 + 1;
        this.directionX = -2;
    }
    update(){
        if(this.y > canvas4.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 0.05 + 1;
            this.x = Math.random() * canvas4.width * 1.3;
        }
        this. weight += 0.0015;
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
                this.weight *= -0.1;
                this.size = 0.5;
            }
    }
    draw(){
        ctx4.strokeStyle = 'white';
        ctx4.beginPath();
        ctx4.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx4.closePath();
        ctx4.stroke();
    }
}


class ParticleSecond4 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 1;
        this.weight = Math.random() * 0.5 + 1;
        this.directionX = -2;
    }
    update(){
        if(this.y > canvas4.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 0.5 + 1;
            this.x = Math.random() * canvas4.width * 1.3 - 150;
        }
        this. weight += 0.0015;
        this.y += this.weight;
        this.x += this.directionX;
    }
    draw(){
        ctx4.strokeStyle = '#79c2d0';
        ctx4.beginPath();
        ctx4.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx4.closePath();
        ctx4.stroke();
    }
}

    function init4() {
        particleArray4 = [];
        for(let i = 0; i < numberOfParticles4; i++) {
            const x = Math.random() * canvas4.width;
            const y = Math.random() * canvas4.height;
            particleArray4.push(new Particle4(x, y));
            particleArray4.push(new ParticleSecond4(x, y));
        }
    }

    function animate4() {
        ctx4.fillStyle = 'rgb(187, 228, 223, 0.05)';
        ctx4.fillRect(0, 0, canvas4.width, canvas4.height);
        for (let i = 0; i < particleArray4.length; i++){
            particleArray4[i].update();
            particleArray4[i].draw();
        }
        requestAnimationFrame(animate4);
        
    }

    window.addEventListener('resize', function(){
        canvas4.width = option4.offsetWidth;
        canvas4.heigth = option4.offsetHeight;
        subtitleMeasurements = subtitle.getBoundingClientRect();
        subtitleData = {
            x: subtitleMeasurements.left,
            y: 74,
            width: subtitleMeasurements.width,
            height: 0.5,
        }
        init4();
    })


    