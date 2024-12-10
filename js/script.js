
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
const btn = document.querySelector('.exit')

function menuHeader(){
    if(lista.style.display === 'block'){
        lista.style.display = 'none'
        btn.classList.remove('ativar')
    }else{
        lista.style.display = 'block'
        btn.classList.add('ativar')
    }
}

const secao = document.querySelector('.secao')

function fecharSecao(){
    if(window.innerWidth <= 768){
        lista.style.display = 'none'
        btn.classList.remove('ativar')
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}