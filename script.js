// ===============================
// Typewriter Effect
// ===============================

const roles = [
    "Senior Backend Engineer",
    "Cloud Native Developer",
    "AI Platform Engineer",
    "Java Architect",
    "Distributed Systems Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero-text h2");

function typeWriter() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent = currentRole.substring(0, charIndex++);
    }
    else {

        roleElement.textContent = currentRole.substring(0, charIndex--);
    }

    if (!deleting && charIndex === currentRole.length + 1) {

        deleting = true;

        setTimeout(typeWriter, 1800);

        return;
    }

    if (deleting && charIndex === 0) {

        deleting = false;

        roleIndex++;

        if (roleIndex >= roles.length)
            roleIndex = 0;
    }

    setTimeout(typeWriter, deleting ? 50 : 90);

}

typeWriter();


// ===============================
// Highlight Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
