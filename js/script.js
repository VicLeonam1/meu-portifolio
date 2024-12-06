
document.getElementById("scrollToTop").addEventListener("click", function (event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

const elements = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
} )


elements.forEach( (element) => myObserver.observe(element) )

const linha = document.querySelector('.linha')
let lista = document.querySelector('.lista')

function menuHeader(){
    if(lista.style.display === 'none'){
        lista.style.display = 'none'
    }else{
        lista.style.display = 'block'
    }

    if(lista.style.display === 'block'){
        lista.style.display = 'none'
    }else{
        lista.style.display = 'block'
    }
}