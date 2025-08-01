const sendBtn = document.querySelector("form");

sendBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Formulario en construcción 😅',
        text: "En poco tiempo lo soluciono",
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'var(--secundary-color)'
    });
})