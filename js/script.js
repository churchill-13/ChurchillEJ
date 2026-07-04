const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if(themeToggle){

    if(localStorage.getItem("theme") === "light"){
        document.body.classList.add("light-mode");
        themeIcon.className = "fas fa-moon";
    }else{
        themeIcon.className = "fas fa-sun";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            localStorage.setItem("theme","light");
            themeIcon.className = "fas fa-moon";
        }
        else{
            localStorage.setItem("theme","dark");
            themeIcon.className = "fas fa-sun";
        }

    });

}

const typingText = document.getElementById("typing-text");

if(typingText){

    const text = "Enterprise Network Engineer";

    let i = 0;

    function typeWriter(){

        if(i < text.length){
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter,100);
        }

    }

    typeWriter();
}

function updateClock() {

    const now = new Date();

    const date = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    const time = now.toLocaleTimeString('en-IN');

    document.getElementById("live-clock").innerHTML =
    `<i class="fas fa-calendar-alt"></i> ${date}<br>
     <i class="fas fa-clock"></i> ${time}`;
}

setInterval(updateClock, 1000);
updateClock();


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});


fetch("https://api.countapi.xyz/hit/churchillj13/portfolio")
.then(response => response.json())
.then(data => {
    document.getElementById("visitor-count").innerText = data.value;
});


fetch("https://api.countapi.xyz/get/churchillj13/resume")
.then(res => res.json())
.then(data => {
    document.getElementById("download-count").innerText =
    data.value || 0;
});

function increaseDownloadCount(){

    fetch("https://api.countapi.xyz/hit/churchillj13/resume");

}


const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

}