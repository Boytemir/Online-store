// Copy menu for mobaile

function copyMenu() {
    //copy inside .dpt-cat to .departments
    let dptCategory = document.querySelector(".dpt-cat");
    let dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;


    // copy inside nav to nav
    let mainNav = document.querySelector(".header-nav nav");
    let navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav 
    let topNav = document.querySelector(".header-top .wrapper");
    let topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

// show mobile menu
const menuButton = document.querySelector(".tirgger"),
      closeButton = document.querySelector(".t-close"),
      addcloss = document.querySelector(".site");
menuButton.addEventListener("click", () => {
    addcloss.classList.toggle("showmenu");
});

closeButton.addEventListener("click", () => {
    addcloss.classList.remove("showmenu");
});

// show sub menu on mobile
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest(".has-child").classList.remove("expand") : null);
    if (this.closest(".has-child").classList != "expand");
    this.closest(".has-child").classList.toggle("expand");
}


// Slider
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
});



// show search 
const searchButton = document.querySelector(".t-search"),
      tClose = document.querySelector(".search-close"),
      showClass = document.querySelector(".site");
searchButton.addEventListener("click", () => {
    showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", () => {
    showClass.classList.remove("showsearch");
});
  