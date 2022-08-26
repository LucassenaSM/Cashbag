var inValorTotalCDB = document.getElementById("inValorTotalCDB");
var inTempoCDB = document.getElementById("inTempoCDB");
var btCalcular = document.getElementById("btCalcular");
var outRendimentos = document.getElementById("outRendimento");

function calcularCDB() {
  var valorTotalCDB = Number(inValorTotalCDB.value);
  var tempoCDB = Number(inTempoCDB.value);

  if (valorTotalCDB < 100 || valorTotalCDB == "") {
    alert("Valor invalido");
    inValorTotalCDB.focus();
  } else {
    if (tempoCDB <= 0 || tempoCDB == "") {
      alert("Valor invalido");
      inTempoCDB.focus();
    } else {
      var jurosCDB = 0.0295;
      var jurosTotal = tempoCDB * jurosCDB;
      var rendimento = valorTotalCDB * jurosTotal;

      var rendimentoTotal = rendimento + valorTotalCDB;
      outRendimentos.textContent =
        "Esse será o total: R$" + rendimentoTotal.toFixed(2);
    }
  }
}
btCalcular.addEventListener("click", calcularCDB);
//------------------------------------------------------------------------------------------------------------------------------//
/* Criar Conta*/

var inNome = document.getElementById("inNome");
var inEmail = document.getElementById("inEmail");
var btContaCriar = document.getElementById("btContaCriar");

function ContaCriar() {
  var nome = inNome.value;
  var email = inEmail.value;

  if (nome == "") {
    alert("O campo de Nome está vazio!")
    inNome.focus();
  } else {
    if (email == "") {
      alert("O campo de Email está vazio!")
      inEmail.focus();
    } else {
      
    }
  }
}