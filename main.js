let skillsJson = [
    {
        "skillName": "Python",
        "progress": "80%"
    },

    {
        "skillName": "Java",
        "progress": "75%"
    },

    {
        "skillName": "JavaScript",
        "progress": "40%"
    },

    {
        "skillName": "HTML",
        "progress": "60%"
    },

    {
        "skillName": "CSS",
        "progress": "55%"
    }
]

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

const skills = (jsonObject) => {
    const fragment = document.createDocumentFragment();
    const skillsList = document.querySelector(".skills-list");

    for (const skill of jsonObject){
        const name = skill.skillName;
        const progress = skill.progress;
    }
}

const init = () => {
    document.addEventListener("DOMContentLoaded", ()=>{
        window.addEventListener("scroll", function(){
            const header = document.querySelector(".navbar");
            header.classList.toggle("sticky", window.scrollY > 0);
        })
        const content = document.querySelector(".img-carousel");
        carousel(content);
        skills(skillsJson);
    })
}

init();