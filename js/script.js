const navItems = document.querySelectorAll(".nav-list li a");

navItems.forEach(item =>{
    item.addEventListener("click", () => {
        navItems.forEach(item => {
            item.classList.remove("nav-link-focus"); 

        });
        item.classList.add("nav-link-focus");
    });
});