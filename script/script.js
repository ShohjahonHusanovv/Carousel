const cars = document.querySelector('.carousel_img');
const btnl = document.querySelector('.btn_l');
const btnr = document.querySelector('.btn_r');
const imgs = document.querySelectorAll('.carousel_img img');


let index=0;


function cardslayt(){
    if(index>imgs.length-1){
        index=0
    }else if(index<0){
        index=imgs.length-1
    }

    cars.style.transform=`translateX(${-index*600}px)`
}

btnr.addEventListener('click', function app(){
    index++ 
    cardslayt()
    cardtime()
})

btnl.addEventListener('click', function app(){
    index--
    cardslayt()
    cardtime()
} );



let set =setInterval(cardtime, 2000);
function cardtime(){
    index++ 
    cardslayt()
}


function clers(){
    clearInterval(set);
    set =setInterval(cardtime, 2000);
}


























