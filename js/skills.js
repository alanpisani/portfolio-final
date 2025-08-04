const items = [
    "C#", "ASP.NET", "MYSQL", "JAVA", "SPRING",
    "HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP",
    "Git", "Postman", "Visual Studio", "VS Code", "Python",
    "Dart", "Flutter", 
];

const titles = [
    "Stack principal y base de datos", 
    "Tecnologías Web",
    "Lenguajes y herramientas complementarias",
    "Desarrollo móvil y multiplataforma"
]

const details = [
    "Tecnologías que utilizo para desarrollar soluciones completas del lado del servidor.",
    "Tecnologías que utilizo para construir interfaces web.",
    "Tecnologías que complementan mi flujo de trabajo en automatización, pruebas y control de versiones.",
    "También tengo experiencia creando interfaces móviles con Flutter, enfocadas en UI responsiva y multiplataforma."
]

const icons = [
    "csharp", "aspnet", "mysql", "java", "spring_boot",
    "html5", "css3", "javascript", "bootstrap", "php",
    "git", "postman", "visual-studio", "vsc", "python",
    "dart", "flutter"
]

const nextBtn = document.getElementById("next-page-btn");
const prevBtn = document.getElementById("prev-page-btn");
const detailsHtml = document.getElementById("skills-description-detail");
const detailsTitleHtml = document.getElementById("skills-description-title");


let currentPage = 1;
let itemsPerPage = 5;

function renderPage() {
    const container = document.getElementById("skills-grid");

    container.classList.remove("fade-in");
    container.innerHTML = "";
    
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleItems = items.slice(start, end);

    visibleItems.forEach((item, i) => {
        const div = document.createElement("div");
        div.className = "skills-grid-card";
        div.innerHTML = `<img src="assets/icons/${icons[start + i]}.svg">
                           <p>${item}</p>  
        `;
        if(item === "Dart" || item === "Flutter"){
            div.classList.add("ultimo");
        }
        container.appendChild(div);
    });

    document.getElementById("page-indicator").textContent = `Página ${currentPage} de ${Math.ceil(items.length / itemsPerPage)}`;
    
    detailsHtml.innerHTML = details[currentPage - 1];
    detailsTitleHtml.innerHTML = titles[currentPage - 1];

    void container.offsetWidth; // que trucazo xd
    container.classList.add("fade-in");

}

function nextPage() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        // itemsPerPage = currentPage == 3 ? 4 : 5;
        renderPage();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        // itemsPerPage = currentPage == 3 ? 4 : 5;
        renderPage();
    }
}

nextBtn.addEventListener("click", () => nextPage());
prevBtn.addEventListener("click", () => prevPage());

renderPage();