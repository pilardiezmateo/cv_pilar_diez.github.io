window.onscroll = function(){
    if(document.documentElement.scrollTo > 100){
        document.querySelector('.go-top-container').classList.add('show')       
    }
    
    else{document.querySelector('.go-top-container').classList.remove('show')
    }
}

$(document).on('click','#go-top',function(e){
    $(document).scrollTop(0);
})
