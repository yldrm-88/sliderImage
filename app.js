const mainimg=document.querySelector("img")
const images=['images/resim1.jpeg','images/resim2.jpeg','images/resim3.jpg','images/resim4.jpg','images/resim5.jpg','images/resim6.jpg','images/resim7.jpg']
let num=0;
const auto=true;
const IntervalTime=3000;
let slideInterval;

function next(){
    num++
    if(num>=images.length){
        num=0;
        mainimg.src=images[num]
    }
    else{
        mainimg.src=images[num]
    }
}

function back(){
    num--;
    if(num<0){
        num=images.length-1
        mainimg.src=images[num]
    }else{
        mainimg.src=images[num]
    }
}

if(auto){
    slideInterval=setInterval(next,IntervalTime)
}