const carousel = (content) => {
    let images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
    let cont = 0;

    content.addEventListener("click", e => {
        let previous = content.querySelector(".previous");
        let next = content.querySelector(".next");
        let image = content.querySelector(".img");
        let target = e.target;

        if (target == previous) {
            if (cont > 0) {
                cont --;
                image.src = images[cont];
            } else {
                cont = images.length - 1;
                image.src = images[cont];
            }
        } else if (target == next) {
            if (cont < images.length - 1) {
                cont ++;
                image.src = images[cont];
            } else {
                cont = 0;
                image.src = images[cont];
            }
        }
    })
}

const init = () => {
    document.addEventListener("DOMContentLoaded", ()=>{
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".navbar");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
    const content = document.querySelector(".img-carousel");
    carousel(content);
    })
}

init();