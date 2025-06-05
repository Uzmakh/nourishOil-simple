// Sticky Navbar-Desktop
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky",this.window.screenY>0)
}); 

// Responsive navbar
const mobileIcon = document.querySelector(".mobile-icons");
const header = document.querySelector(".header");

const toggleNavbar = () => {
    console.log("button is clicked");
    header.classList.toggle('active');
}
mobileIcon.addEventListener('click', () => {
    toggleNavbar();
});


// Statistics
let valueDisplays = document.querySelectorAll(".num");
let intervals = 20000;

console.log(valueDisplays);

valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    console.log(endValue);
    let duration = Math.floor(intervals / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    },duration)
})

// Testimonial Slider
let btn = document.getElementsByClassName("slider-btn");
let slide = document.getElementById("slide");

// Initialize first button as active
btn[0].classList.add("active");
btn[0].onclick = function () {
    slide.style.transform = "translateX(0px)";
    updateActiveButton(this);
    }
   

btn[1].onclick = function () {
    slide.style.transform = "translateX(-800px)";
    updateActiveButton(this);
    }
   

btn[2].onclick = function () {
    slide.style.transform = "translateX(-1600px)";
    updateActiveButton(this);
}
btn[3].onclick = function () {
    slide.style.transform = "translateX(-2400px)";
    updateActiveButton(this);
}

function updateActiveButton(activeBtn) {
    // Use let for proper scoping
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    activeBtn.classList.add("active");
}