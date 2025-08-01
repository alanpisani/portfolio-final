const todoGithubBtn = document.getElementById("todo-github-btn");
const appGithubBtn = document.getElementById("app-github-btn");
const coshitaGithubBtn = document.getElementById("coshita-github-btn");

const todoDemoBtn = document.getElementById("todo-demo-btn");
const appDownloadBtn = document.getElementById("app-download-btn");
const coshitaDemoBtn = document.getElementById("coshita-demo-btn");

function crearRedireccionBtn(btn, linkDelProyecto){
    btn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = linkDelProyecto;
        link.target = "_blank";
        link.click();

    });
}

crearRedireccionBtn(todoGithubBtn, "https://github.com/alanpisani/lista-de-tareas-csharp");
crearRedireccionBtn(appGithubBtn, "https://github.com/alanpisani/seminario-2");
crearRedireccionBtn(coshitaGithubBtn, "https://github.com/alanpisani/coshita-3D");

crearRedireccionBtn(todoDemoBtn, "https://tasker.alanpisani.com.ar");
crearRedireccionBtn(coshitaDemoBtn, "https://alanpisani.github.io/coshita-3D/");

appDownloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "../download/seminario.apk"
    link.download = "seminario.apk";
    link.click();    
});