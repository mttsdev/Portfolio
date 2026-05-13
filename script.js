/* =========================================
   1. CONTROLE DE MODAIS
   ========================================= */

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

/* =========================================
   2. NAVEGAÇÃO E ANIMAÇÕES
   ========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".cabecalho__navegacao a");



const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px", 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}, observerOptions);

sections.forEach((section) => {
    observer.observe(section);
});


navLinks.forEach(link => {
    link.addEventListener("click", function() {

        navLinks.forEach(l => l.classList.remove("link-click-animation"));
        
        this.classList.add("link-click-animation");

        setTimeout(() => {
            this.classList.remove("link-click-animation");
        }, 400); 
    });
});