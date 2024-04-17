var price = document.querySelector('.pricing-wrapper').querySelectorAll('.pricing-block');
price.forEach(element=>{
    element.addEventListener('mouseover' , function(){
        price.forEach(box=>box.classList.remove("pricing-active"))
        this.classList.add("pricing-active")
    })
});


