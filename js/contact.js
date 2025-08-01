const sendBtn = document.querySelector("form");

sendBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Mensaje enviado con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'var(--secundary-color)'
    });
})