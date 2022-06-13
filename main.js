const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
const back = document.querySelector('.back');

menuList.style.display = "none";


menuBtn.addEventListener('click', () => {

    menuBtn.classList.toggle('clicked');


    if (menuList.style.display == "none") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";

    }

})