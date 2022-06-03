const parrafo=document.getElementById("warnings");
const form=document.getElementById("form");
const correo = document.getElementById("email");
const password= document.getElementById("contraseña");



form.addEventListener('submit',e=>{

    e.preventDefault();
    let warnings="";
    let entrar=false;
    let regexDesc=/^[a-zA-Z0-9][a-zA-Z0-9\s]+$/ig
    let regexNumber=/^[0-9]+$/

    parrafo.innerHTML='';
    

})