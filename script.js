const boton = document.getElementById("calcular");

boton.addEventListener("click", function () {
  const peso = parseFloat(document.getElementById("peso").value);
  const estatura = parseFloat(document.getElementById("estatura").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
    resultado.textContent = "Ingresa un peso y una estatura válidos.";
    return;
  }

  const imc = peso / (estatura * estatura);
  resultado.textContent = "Tu IMC es: " + imc.toFixed(2);
});
