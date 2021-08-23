let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu2');
let search = document.querySelector('.search');
let form = document.querySelector('.form_search');


window.onscroll = () => {
    bar = document.remove('fa-times');
    menu = document.remove('active');
    search = document.remove('fa-times');
    form = document.remove('active');
}

window.onscroll = function() {
    var header = document.getElementById('header');
    if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        header.style.position = 'fixed';
        header.style.left = 0;
        header.style.right = 0;
        header.style.zIndex = '1000';
    } else{
        header.style.position = 'static';
    }
}

bar.addEventListener('click', () => {
    bar.classList.toggle('fa-times');
    menu.classList.toggle('active');
});

search.addEventListener('click', () => {
    search.classList.toggle('fa-times');
    form.classList.toggle('active');
});

$(document).ready(function() {
    $('.bar').click(function() {
        $('.menu2').slideToggle('snow');
    });
});

$(document).ready(function (){
    $('.search').click(function () {
        $('.form_search').slideToggle('snow');
    });
});

slideIndex = 0;
slides();
function slides() {
    var slide = document.querySelectorAll('div.home .slide');
    for(var i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > slide.length) {
        slideIndex = 1;
    }
    slide[slideIndex-1].style.display = 'block';
    setTimeout(slides,4000);
}

// function heart(choseId) {
//     var heart = document.querySelectorAll('.menu_shape > div > .heart');
//     for(var i = 0; i < heart.length; i++){ 
//         heart[i].style.color = 'white';
//     var c = document.getElementById(choseId);
//     c.style.color = 'red';
//     }
// }

// $(document).ready(function() {
//     $('.heart').click(function() {
//         $('.heart').css({
//             'color' : 'white'
//         });
//     });
// });

$(document).ready(function() {
    var heart = document.querySelectorAll('i.heart')
    for(var i = 1; i <= heart.length; i++){
        $('.heart1_'+ i +'').click(function() {
            $(this).toggleClass('heartt');
        });
    }
});



function shapePlus(shapeId) {
    var shape = document.querySelector('.menu_shape');
    for(var i = 0; i < shape.length; i++)
        shape[i].style.height = '100%';
    var s = document.getElementById(shapeId);
    s.style.height = '100%';
    s.style.overflow = 'visible';
}

$(document).ready(function() {
    $(".shapePlus").click(function(){
        $(".shapeReduce").show();
        $(".shapePlus").hide();
      });
      
    $(".shapeReduce").click(function(){
        $(".shapePlus").show();
        $(".shapeReduce").hide();
    });
});

$(document).ready(function() {
    $('.shapeReduce').click(function() {
        $('.menu_shape').css({
            'height' : '68rem',
            'overflow' : 'hiden'
        });
    });
});

var swiper = new Swiper(".content", {
    spaceBetween: 10,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

function load() {
    document.querySelector('.load').classList.add('load_off');
}

function loadOff() {
    setInterval(load,5000);
}
window.onload = loadOff;




function() {
    var slide = document.querySelectorAll('div.home .slide');
    for(var i = 0; i < slide.length; i++) 
        console.log(i);
}