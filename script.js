const myObserve = new IntersectionObserver((dados)=>{
    dados.forEach((dado)=>{
        if(dado.isIntersecting){
            dado.target.classList.add("show")
        }else{
            dado.target.classList.remove("show")
        }
    })
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserve.observe(element));
