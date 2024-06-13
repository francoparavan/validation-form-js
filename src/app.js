const expresiones = {
  //exp.r
  inputCard: /^\d{12}$/,
  inputCvc: /^\d{3,4}$/,
  inputAmount: /^\d+(\.\d{1,2})?$/,
  postalCode: /^\d{5}$/
};

function validarCampo(value) {
  return value.trim() !== "";
}

const formMsj = document.querySelector("#formulario");
formMsj.addEventListener("submit", event => {
  event.preventDefault();
  let enviar = true;

  let inputCard = document.querySelector("#inputCard");
  let numeroTarjeta1 = document.querySelector("#numeroTarjeta1");
  if (!expresiones.inputCard.test(inputCard.value)) {
    inputCard.classList.add("is-invalid");
    inputCard.classList.remove("is-valid");
    numeroTarjeta1.style.display = "block";
    enviar = false;
  } else {
    inputCard.classList.add("is-valid");
    inputCard.classList.remove("is-invalid");
    // numeroTarjeta1.style.display = 'none';
  }

  let inputCvc = document.querySelector("#inputCvc");
  let errorCvc = document.querySelector("#errorCvc");
  if (!expresiones.inputCvc.test(inputCvc.value)) {
    inputCvc.classList.add("is-invalid");
    inputCvc.classList.remove("is-valid");
    errorCvc.style.display = "block";
    enviar = false;
  } else {
    inputCvc.classList.add("is-valid");
    inputCvc.classList.remove("is-invalid");
    //numCvc1.style.display = 'none';
  }

  let inputAmount = document.querySelector("#inputAmount");
  let montoError = document.querySelector("#montoError");
  if (!expresiones.inputAmount.test(inputAmount.value)) {
    inputAmount.classList.add("is-invalid");
    inputAmount.classList.remove("is-valid");
    montoError.style.display = "block";
    enviar = false;
  } else {
    inputAmount.classList.add("is-valid");
    inputAmount.classList.remove("is-invalid");
    // montoError.style.display = 'none';
  }

  let firstName = document.querySelector("#firstName");
  let errorFirstName = document.querySelector("#errorFirstName");
  if (!validarCampo(firstName.value)) {
    firstName.classList.add("is-invalid");
    firstName.classList.remove("is-valid");
    errorFirstName.style.display = "block";
    enviar = false;
  } else {
    firstName.classList.add("is-valid");
    firstName.classList.remove("is-invalid");
    //errorFirstName.style.display = 'none';
  }

  let lastName = document.querySelector("#lastName");
  let errorLastName = document.querySelector("#errorLastName");
  if (!validarCampo(lastName.value)) {
    lastName.classList.add("is-invalid");
    lastName.classList.remove("is-valid");
    errorLastName.style.display = "block";
    enviar = false;
  } else {
    lastName.classList.add("is-valid");
    lastName.classList.remove("is-invalid");
    //errorLastName.style.display = 'none';
  }

  let inputCity = document.querySelector("#inputCity");
  let errorCity = document.querySelector("#errorCity");
  if (!validarCampo(inputCity.value)) {
    inputCity.classList.add("is-invalid");
    inputCity.classList.remove("is-valid");
    errorCity.style.display = "block";
    enviar = false;
  } else {
    inputCity.classList.add("is-valid");
    inputCity.classList.remove("is-invalid");
    //errorCity.style.display = 'none';
  }

  let selection = document.querySelector("#selectionn");
  let errorState = document.querySelector("#errorState");
  if (selection.value === "") {
    selection.classList.add("is-invalid");
    selection.classList.remove("is-valid");
    errorState.style.display = "block";
    enviar = false;
  } else {
    selection.classList.add("is-valid");
    selection.classList.remove("is-invalid");
    // errorState.style.display = 'none';
  }

  let postalCode = document.querySelector("#postalCode");
  let errorPostalCode = document.querySelector("#errorPostalCode");
  if (!expresiones.postalCode.test(postalCode.value)) {
    postalCode.classList.add("is-invalid");
    postalCode.classList.remove("is-valid");
    errorPostalCode.style.display = "block";
    enviar = false;
  } else {
    postalCode.classList.add("is-valid");
    postalCode.classList.remove("is-invalid");
    //errorPostalCode.style.display = 'none';
  }
  if (enviar) {
    formMsj.event.submit();
  }
});
