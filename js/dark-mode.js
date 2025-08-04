const body = document.querySelector("body");
const darkModeBtn = document.getElementById("dark-mode-btn");

let isDark = localStorage.getItem("isDark") == "true";

if(isDark){
    body.classList.add("dark-mode");
    darkModeBtn.innerHTML = '🌞';
}
else{
    body.classList.remove("dark-mode");
    darkModeBtn.innerHTML = '🌙';
}

darkModeBtn.addEventListener("click", () => {
    let isDark = localStorage.getItem("isDark") == "true";

    if(!isDark || isDark == null){
        body.classList.add("dark-mode");
        localStorage.setItem("isDark", true);
        darkModeBtn.innerHTML = '🌞';
    }
    else{
        body.classList.remove("dark-mode");
        localStorage.setItem("isDark", false); 
        darkModeBtn.innerHTML = '🌙';
    }
});
