// Get Dom Element
const navProfile = document.getElementById("nav-profile"),
    profileBtn = document.getElementById("profile-btn"),
    profileContent = document.getElementById("profile-content"),
    toggleBtn = document.getElementById("toggle-btn"),
    toggleMenuContent = document.getElementById("toggle-menu-content"),
    navToggleBtn = document.getElementById("nav-toggle"),
    navOption = document.querySelector(".nav-option"),
    scrollE = document.querySelectorAll(".scroll"),
    accountInfo = document.querySelectorAll(".account-info"),
    cardCover = document.querySelectorAll(".card-cover"),
    infoImg = document.querySelectorAll(".info-img");


// Profile navbar----------------------------------------------------
navProfile.addEventListener("click", () => {
    if (profileBtn.classList == "fa-solid fa-chevron-down") {
        profileBtn.classList = "fa-solid fa-chevron-up";
        profileContent.style.display = "flex";
        navProfile.classList.add("nav-profile-active");
    } else {
        profileBtn.classList = "fa-solid fa-chevron-down";
        profileContent.style.display = "none"
        navProfile.classList.remove("nav-profile-active");
    }
})

// Toggle menu -------------------------------------------------------
toggleBtn.addEventListener("click", () => {
    if (toggleBtn.classList == "fa-solid fa-ellipsis") {
        toggleMenuContent.style.display = "flex";
        toggleBtn.classList.add("active");
    } else {
        toggleMenuContent.style.display = "none";
        toggleBtn.classList.remove("active")
    }
})

// Nav Toggle --------------------------------------------------------
let i = 0;
navToggleBtn.addEventListener("click", () => {
    if (navToggleBtn.classList == "fa-solid fa-bars") {
        openNavOpiton()
    } else {
        closeNavOpiton()
    }
})

function openNavOpiton() {
    navOption.style.transform = "rotateX(0deg)"
    navToggleBtn.classList = "fa-solid fa-minus";
}

function closeNavOpiton() {
    navOption.style.transform = "rotateX(90deg)";
    navToggleBtn.classList = "fa-solid fa-bars";
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
        openNavOpiton()
        i = 1
    } else {
        if (i == 1) {
            closeNavOpiton()
            i = 0
        }
    }
})



// Scroll-----------------------------------------------------------------
for (let i = 0; i < scrollE.length; i++) {
    let isDown = false;
    let scrollX;
    let scrollLeft;

    // Mouse Up
    scrollE[i].addEventListener("mouseup", () => {
        isDown = false;

    })

    // Mouse leave
    scrollE[i].addEventListener("mouseleave", () => {
        isDown = false;
    })

    // Mouse Down
    scrollE[i].addEventListener("mousedown", (e) => {
        e.preventDefault();
        isDown = true;
        scrollX = e.pageX - scrollE[i].offsetLeft;
        scrollLeft = scrollE[i].scrollLeft;
    })

    // Mouse Move

    scrollE[i].addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        let element = e.pageX - scrollE[i].offsetLeft;
        let scrolling = (element - scrollX) * 2;
        scrollE[i].scrollLeft = scrollLeft - scrolling;
    })
}


// Inspir account img

let marginRight = 10;

for (let i = 0; i < accountInfo.length; i++) {
    if (i == 0) {
        marginRight = 0;
    }
    accountInfo[i].style.left = marginRight + "px";
    marginRight = marginRight + 30;
}

// Set Iamges
let images = ["img01.png", "img02.png", "img03.png", "img04.png", "img05.png", "img06.png", "img07.png", "img08.png", "img09.png", "img10.png", "img11.png", "img12.png", "img13.png", "img14.png"];


let counter = 0;


for (let i = 0; i < infoImg.length; i++) {
    infoImg[i].style.background = `url("../../SRC/${images[counter]}") center/cover`
    counter++;
    if (counter > images.length - 1) {
        counter = 0;
    }
    console.log(counter);
}

for (let i = 0; i < cardCover.length; i++) {
    cardCover[i].style.background = `url("../../SRC/${images[counter]}") center/cover`
    counter++;
    if (counter > images.length - 1) {
        counter = 0;
    }
    console.log(counter);
}