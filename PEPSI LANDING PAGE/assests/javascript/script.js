let icon = document.getElementById('hamburger');
let secnav = document.getElementById('second-nav');
let flag = 0;

function myNav() {
    if (flag == 0) {
        secnav.style.display = 'flex'; 
        setTimeout(() => {  
            secnav.style.maxHeight = '500px';  
            icon.className = 'fa-solid fa-xmark';
        }, 10); 
        flag = 1;
    } else {
        secnav.style.maxHeight = '0'; 
        setTimeout(() => {
            secnav.style.display = 'none'; 
            icon.className = 'fa-solid fa-bars';
        }, 300);  
        flag = 0;
    }
}

function changeColor1(){
    document.body.style.backgroundColor = '#0062BE';
    document.querySelector('html').style.backgroundColor = '#0062BE';
    document.querySelector('#main').style.backgroundColor = '#0062BE';
    let image = document.querySelector('#changeImg');

    image.src = './assests/images/bluepepsican.png'
}

function changeColor2(){
    document.body.style.backgroundColor = '#E60C2C';
    document.querySelector('html').style.backgroundColor = '#E60C2C';
    document.querySelector('#main').style.backgroundColor = '#E60C2C';
    let image = document.querySelector('#changeImg');

    image.src = './assests/images/whitepepsican.png'
}

function changeColor3(){
    document.body.style.backgroundColor = '#1E1E1E';
    document.querySelector('html').style.backgroundColor = '#1E1E1E';
    document.querySelector('#main').style.backgroundColor = '#1E1E1E';
    let image = document.querySelector('#changeImg');

    image.src = './assests/images/blackpepsican.png'
}