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
    const skillsList = document.querySelector(".skills-list");

    for (const skill of jsonObject){
        const name = skill.skillName;
        const progress = skill.progress;

        const nameList = document.createElement('div');
        nameList.textContent = `${name} - ${progress}`;
        nameList.className = "name-list";

        const progressBar = document.createElement('div');
        progressBar.className = "progress-bar";

        const progressList = document.createElement('div');
        progressList.style.maxWidth = progress;
        progressList.className = "progress-list";

        const skills = document.createElement('div');
        skills.className = "skill"
        
        skillsList.appendChild(skills);
        skills.appendChild(nameList);
        skills.appendChild(progressBar);
        progressBar.appendChild(progressList);
    }
}

const validateEmail = (email) => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    let validation = true;

    if (!email.value.match(validEmail)) {
      validation = false;
    }

    return validation;
}

const validateText = (text) => {
    let validation = true;

    if (text.value === ""){
        validation = false;
    }

    return validation;
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

        const sendBtn = document.querySelector(".send-btn");
        const name = document.querySelector(".name-input");
        const email = document.querySelector(".email-input");
        const msg = document.querySelector(".text-area");
        
        sendBtn.addEventListener("click", () => {
            if (validateEmail(email) && validateText(name) && validateText(msg)){
                alert("Su mensaje ha sido enviado con éxito");
            } else {
                alert("Verifique los datos");
            }
        })
    })
}

init();