const navItems = document.querySelectorAll(".nav-list li a");

const downloadBtn = document.getElementById('download-cv-btn');
const seeBtn = document.getElementById('view-cv-btn');

navItems.forEach(item =>{
    item.addEventListener("click", () => {
        navItems.forEach(item => {
            item.classList.remove("nav-link-focus"); 

        });
        item.classList.add("nav-link-focus");
    });
});

const typed = new Typed('#typed', {
  strings: ["Desarrollador Backend", "Creativo", "Sólido"], 
  typeSpeed: 80,
  backSpeed: 40,
  loop: true
});


downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = '../download/cv_alan_pisani.pdf';
    link.download = 'cv_alan_pisani.pdf';
    link.click();
});

seeBtn.addEventListener('click', () => {
    window.open('../download/cv_alan_pisani.pdf', '_blank');
});