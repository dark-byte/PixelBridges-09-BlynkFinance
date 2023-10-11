const tagLine = document.querySelector(".tagline");
const logoImg = document.querySelector(".logo-img");
const main = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");

function handleScroll() {
    const scrollPosition = window.scrollY;


    if (scrollPosition > 100) {
        tagLine.style.color = "black";
        main.style.background = "rgb(242, 243, 246)";
        logoImg.src = "./Assets/logo-name.png";
        sidebar.style.background = "var(--bg)";
    } else {
        tagLine.style.color = "white";
        main.style.background = "url('./Assets/homepage-bg.svg') left 0vh bottom 0vh / 100% no-repeat fixed, var(--bg-dark)";
        logoImg.src = "./Assets/logo-name-white.png";
        sidebar.style.background = "var(--bg-dark)";
    }
}



window.addEventListener('scroll', handleScroll);
