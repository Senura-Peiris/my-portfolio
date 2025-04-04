$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let mobilenavi = document.querySelector('.homebtn');
let mobilenavi1 = document.querySelector('.aboutbtn');
let mobilenavi2 = document.querySelector('.servicebtn');
let mobilenavi3 = document.querySelector('.workbtn');
let mobilenavi4 = document.querySelector('.blogbtn');
let mobilenavi5 = document.querySelector('.contactbtn');

//Open function

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});
mobilenavi.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});
mobilenavi1.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});
mobilenavi2.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});
mobilenavi3.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});
mobilenavi4.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});
mobilenavi5.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});


//Remove function to close

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

mobilenavi.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

mobilenavi1.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

mobilenavi2.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

mobilenavi3.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

mobilenavi4.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});
mobilenavi5.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

});