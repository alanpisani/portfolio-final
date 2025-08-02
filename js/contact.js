const form = document.querySelector("form");
const sendBtn = document.getElementById("send-btn");

function myAlert(response){
    
    Swal.fire({
        title: 'Éxito',
        text: response,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'var(--secundary-color)'
    });
   
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendBtn.innerHTML = "Enviando...";
    sendBtn.disabled = true;
    
    const datos = new FormData(form);

    fetch('mail.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.text())
    .then(data => {
        sendBtn.innerHTML = "Enviar";
        sendBtn.disabled = false;
        myAlert(data);
        form.reset();
    })
});