const menubtn = document.querySelector('.menu');
const sliderpage = document.querySelector('.slider');
const slider_handle = document.querySelector('.slider-handle');

menubtn.addEventListener('click',function(){
    sliderpage.classList.toggle('slider-handle');
    // menubtn.innerHTML = 'Close';
    if(menubtn.innerHTML == 'Menu'){
        menubtn.innerHTML = 'Close';
    }
    else if(menubtn.innerHTML == 'Close'){
        menubtn.innerHTML = 'Menu';
    }
});
