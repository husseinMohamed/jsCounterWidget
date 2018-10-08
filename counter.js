const add = document.querySelector("#add");
const low = document.querySelector("#low");
const reset = document.querySelector("#reset");
var count = document.querySelector(".count");
const myInt = document.getElementById("myInt");


$(document).ready(function() {
    
    $(".container").animate({bottom: 50},"fast");

  });

add.addEventListener('click', addCount);

low.addEventListener('click', lowCount);
reset.addEventListener('click', resetCount);

var num = 0;

function addCount(){
    if(myInt.value == ''){
        num++;
    }else{
        num += parseInt(myInt.value); 
    }
    count.innerHTML = num;
    if (count.innerHTML > '0'){
        count.style.color = 'red';
    }else{
        count.style.color = 'black';
    }
    count.animate([{opacity:'0.45'},{opacity:'1.0'}],{duration:800,fill:'forwards'});
}

function lowCount(){
    if(myInt.value == ''){
        num--;
       }else{
           num -= parseInt(myInt.value); 
       }
       count.innerHTML = num;
       if (count.innerHTML < '0'){
           count.style.color = 	'#0080ff';
       }else{
           count.style.color = 'black';
       }
       count.animate([{opacity:'0.45'},{opacity:'1.0'}],{duration:800,fill:'backwards'});
       }


function resetCount(){
    num = 0;
    count.innerHTML = num;
    count.style.color = 'black';
    }


