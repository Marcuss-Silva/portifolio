/*
function AbrirMenu(){

    let MenuArea = document.querySelector('nav');

    if(MenuArea.classList.contains('menu-opened')==true){

        MenuArea.classList.remove('menu-opened');


    }
    else{

        MenuArea.classList.add('menu-opened');
    }


}
*/




function AbrirMenu(){
    

     

    let MenuArea = document.querySelector("nav");

    if(MenuArea.style.width == '35%' ){
        

        MenuArea.style.width ='0';

    }
    else{

        MenuArea.style.width ='35%';
    }

}





    
    
    
