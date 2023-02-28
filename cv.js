window.onscroll = function(){
    if(document.documentElement.scrollTo > 100){
        document.querySelector('.go-top-container').classList.add('show')
        document.querySelector('.go-top-container').addEventListener('click',()=>{
            window.scrollTo({top:0,behavior:'smooth'})
        })
    }
    else{document.querySelector('.go-top-container').classList.remove('show')
    }
}
