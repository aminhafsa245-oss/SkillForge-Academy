// =============================
// MOBILE MENU TOGGLE
// =============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});


// =============================
// NAVBAR SCROLL EFFECT
// =============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 23, 42, 0.95)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.75)";
        navbar.style.boxShadow = "none";
    }
});


// =============================
// SMOOTH SCROLL FIX
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});


// =============================
// SCROLL ANIMATION (REVEAL)
// =============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

const hiddenElements = document.querySelectorAll(
    ".program-card, .feature-card, .internship-card, .stat-card, .partner-box"
);

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =============================
// COUNTER ANIMATION (STATS)
// =============================
const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.innerText.replace(/\D/g, "") || parseInt(counter.getAttribute("data-target")) || 0;

        const original = counter.getAttribute("data-original") || counter.innerText;

        let value = parseInt(counter.innerText) || 0;

        const increment = target / 100;

        if (value < target) {
            counter.innerText = Math.ceil(value + increment) + "+";
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = original;
        }
    };

    updateCounter();
});


// =============================
// CONTACT FORM VALIDATION
// =============================
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "1px solid red";
            valid = false;
        } else {
            input.style.border = "1px solid rgba(255,255,255,0.2)";
        }
    });

    if (valid) {
        alert("🎉 Application Submitted Successfully!");
        form.reset();
    } else {
        alert("⚠ Please fill all fields properly.");
    }
});


// =============================
// BUTTON RIPPLE EFFECT
// =============================
document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {
    btn.addEventListener("click", function (e) {

        let ripple = document.createElement("span");
        ripple.classList.add("ripple");

        this.appendChild(ripple);

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});