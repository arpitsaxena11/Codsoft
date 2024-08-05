window.addEventListener('load',  ()=>{
    const productSectionList = document.querySelectorAll('.product-section');
    productSectionList.forEach(section=>{
        section.addEventListener('click',function(e){
            e.preventDefault();
            productSectionList.forEach(el=>{
                el.classList.remove('active')
            });
            this.classList.add('active');
        });
    });
});


// Product Details......

const productContentActive = name =>{
    const productContentList = document.querySelectorAll('.item');
    productContentList.forEach(content =>{
        content.classList.remove('active');
        if (content.classList.contains(name)){
            content.classList.add('active');
        }
    });
};


// hide details..
const productContentHide =()=>{
    const productContentList = document.querySelectorAll('.item');
    productContentList.forEach(content =>{
        content.classList.remove('active');
    });
};

window.addEventListener('load', () => {
    const productBtnList = document.querySelectorAll('.product-btn');
    const product = document.querySelector('.product');
    const closeBtn = document.querySelector('.close-btn');

    productBtnList.forEach(btn=>{
        btn.addEventListener('click',function(e) {
            e.preventDefault();
            product.classList.add('active');
            productContentActive(this.getAttribute('data-target'));
        });
    });

    closeBtn.addEventListener('click',e=>{
        e.preventDefault();
        product.classList.remove('active');
        productContentHide();
    });
});