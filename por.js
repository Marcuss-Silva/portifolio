/*
function AbrirMenu(){
    let MenuArea = document.querySelector("nav");

    if(MenuArea.style.width == '80%'){

        MenuArea.style.width ='0';

    }else{

        MenuArea.style.width ='80%';
    }
}
*/


let MenuArea = document.querySelector("nav")
let clickm = document.querySelector('.menu-opened')

clickm.addEventListener('click', function(){

    

    if(MenuArea.style.width == '80%'){

        MenuArea.style.width ='0';

    }else{

        MenuArea.style.width ='80%';
    }
})


   









    
    
    
