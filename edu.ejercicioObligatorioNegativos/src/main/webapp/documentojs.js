function valAbs() {

  let num1 = prompt("Escriba su numero", 0);

  if (!Number(num1)) {
    do num1 = prompt("Debe de ser un numero", 0);
    while (!Number(num1));
  }
  const num2 = num1;
  if (num1 < 0) {
	  num1 = num1 * -1;
  }
  document.getElementById('valor').innerHTML = num1;
}
