let MenuArea2 = document.querySelector("nav")
let clickm2 = document.querySelector('.menu-opened')
clickm2.addEventListener('touchstart', function(){
    
    if(MenuArea2.style.width == '35%'){

        MenuArea2.style.width ='0';

    }else{

        MenuArea2.style.width ='35%';
    }
})
/* -------------------------------------------*/




let icone = document.querySelector('#html')
let s_html = document.querySelector('.s-html')

icone.addEventListener('mouseover', function(){

    if(s_html.style.display = "none"){

        s_html.style.display = 'block';

    }
    
    
})

icone.addEventListener('mouseout', function(){

    if(s_html.style.display = "block"){

        s_html.style.display = 'none';

    }

    
})


let icone1 = document.querySelector('#css')
let s_css = document.querySelector('.s-css')

icone1.addEventListener('mouseover', function(){

    if(s_css.style.display = "none"){

        s_css.style.display = 'block';

    }
    
    
})


icone1.addEventListener('mouseout', function(){

    if(s_css.style.display = "block"){

        s_css.style.display = 'none';

    }

    
})

let icone2 = document.querySelector('#js')
let s_js = document.querySelector('.s-js')
icone2.addEventListener('mouseover', function(){

    if(s_js.style.display = "none"){

        s_js.style.display = 'block';

    }
    
    
})

icone2.addEventListener('mouseout', function(){

    if(s_js.style.display = "block"){

        s_js.style.display = 'none';

    }

    
})










   









    
    
    
