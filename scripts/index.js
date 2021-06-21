const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
 
  // 1. Obtenemos el valor ingresado en el input de email
  const mail = document.querySelector("#email-input").value;

  // 2. Obtenemos los datos ingresados en el input de password
  const pswd = document.querySelector("#password-input").value;

  // 3. Obtenemos el valor del input radio
  const esMayorDeEdad = document.querySelector("#age_yes").checked;

  // 4. Obtenemos el valor del input checkbox
  const aceptaTyC = document.querySelector("#tyc-input").checked;

  // 5. Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  validarEdad(esMayorDeEdad);

  // 6. Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  validarTyC(aceptaTyC);

  // 7. Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  const usuario = {
    email: mail,
    password: pswd,
    esMayorDeEdad: esMayorDeEdad,
    aceptaTyC: aceptaTyC,
  }
  validarInformacion(usuario);
  
});

function validarEdad(esMayorDeEdad) {
  return esMayorDeEdad ? true : alert("Debes ser mayor de edad para registrarte en el sitio");
}

function validarTyC(aceptaTyC) {
  return aceptaTyC ? true : alert("Debes aceptar los TyCs para registrarte en el sitio");
}

function validarInformacion(usuario) {
  if (usuario.email && usuario.password && usuario.esMayorDeEdad && usuario.aceptaTyC) {
    console.log(usuario);
  }
}