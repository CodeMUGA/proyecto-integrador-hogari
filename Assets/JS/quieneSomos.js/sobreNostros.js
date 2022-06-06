//En este es para que funcione el toast
document.querySelector("#toastBtn").onclick = (e) => {
    e.preventDefault();
    //Mostrar Toast
    const toastEl = document.querySelector("#toast");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  };

  