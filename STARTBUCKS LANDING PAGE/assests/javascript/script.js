let icon = document.getElementById('hamburger');
let secnav = document.getElementById('second-nav');
let flag = 0;

function myNav() {
    if (flag == 0) {
        secnav.style.display = 'flex'; 
        setTimeout(() => {  
            secnav.style.maxHeight = '500px';  
            icon.className = 'fa-solid fa-xmark';
            icon.style.color = 'white';
            icon.style.position = 'fixed';
            icon.style.right = '0';
            icon.style.marginRight = '20px';
        }, 10); 
        flag = 1;
    } else {
        secnav.style.maxHeight = '0'; 
        setTimeout(() => {
            secnav.style.display = 'none'; 
            icon.className = 'fa-solid fa-bars';
            icon.style.color = '#017143';
            icon.style.position = 'static';
            icon.style.right = '0';
            icon.style.marginRight = '0px';
        }, 300);  
        flag = 0;
    }
}

function changeColor1(){
    document.querySelector('.half-circle-class').style.backgroundColor = '#017143';
    document.querySelector('#half-circle-2').style.backgroundColor =  '#017143';
    document.querySelector('#colorchange').style.color =  '#017143';
    document.querySelector('#btncolor').style.backgroundColor =  '#017143';
    document.querySelector('#second-nav').style.backgroundColor = '#017143';
    let image = document.querySelector('#changeImg');

    image.src = './assests/images/greenglass.png'
}

function changeColor2(){
    document.querySelector('.half-circle-class').style.backgroundColor = '#EB7495';
    document.querySelector('#half-circle-2').style.backgroundColor =  '#EB7495';
    document.querySelector('#colorchange').style.color = '#EB7495';
    document.querySelector('#btncolor').style.backgroundColor =  '#EB7495';
    document.querySelector('#second-nav').style.backgroundColor = '#EB7495';
    let image = document.querySelector('#changeImg');

    image.src = './assests/images/lightpinkglass.png'
}

function changeColor3(){
    document.querySelector('.half-circle-class').style.backgroundColor = '#D752B1';
    document.querySelector('#half-circle-2').style.backgroundColor =  '#D752B1';
    document.querySelector('#colorchange').style.color =  '#D752B1';
    document.querySelector('#btncolor').style.backgroundColor =  '#D752B1';
    document.querySelector('#second-nav').style.backgroundColor = '#D752B1';
    let image = document.querySelector('#changeImg');

    image.src = './assests/images/pinkglass.png'
}

