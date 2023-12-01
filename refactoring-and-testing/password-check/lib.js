export function arePasswordsEqual(pw1, pw2) {
  return pw1 === pw2;
}

export function initApp() {
  const pw1 = document.getElementById("password1");
  const pw2 = document.getElementById("password2");
  const btnCheck = document.getElementById("btn-check");
  const checkInfo = document.getElementById("result");

  function checkPassword() {
    const result = arePasswordsEqual(pw1.value, pw2.value);

    result
      ? (checkInfo.innerText = "VALID")
      : (checkInfo.innerText = "NOT VALID");
  }

  btnCheck.addEventListener("click", checkPassword);
}
