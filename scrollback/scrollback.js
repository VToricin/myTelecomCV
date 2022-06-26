let scrollbackState = false;

let scrollbackButtonCreate = () =>{
    let scrollbackbutton = document.createElement('div');
    scrollbackbutton.classList.add('scrollbackbutton');
    let body = document.querySelector('body');
    body.appendChild(scrollbackbutton);

    scrollbackbutton.addEventListener('click', function(){
        let topmoving = new Promise(function(resolve, reject) {
            
                
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                
                
                resolve(); 
          });

          topmoving.then(function(){
            setTimeout(()=>{
                scrollbackbutton.parentNode.removeChild(scrollbackbutton);
                scrollbackState = false
            },600)
            
          })
        
        
    })
}

function scrollback(){
    if (window.scrollY>250){
        if (scrollbackState === false && document.querySelectorAll('.scrollbackbutton').length === 0){
            scrollbackState = true;
            return scrollbackButtonCreate()
        }
    }else {
        if(document.querySelectorAll('.scrollbackbutton').length !== 0){
            let scrollbackbutton = document.querySelector('.scrollbackbutton');
            scrollbackbutton.parentNode.removeChild(scrollbackbutton);
            scrollbackState = false;
        }
    }
}



