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
//btCalcular.addEventListener("click", calcularCDB);
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
      btConta.textContent = "Entrar";
    }
  }
}
btContaCriar.addEventListener("click", ContaCriar)
//------------------------------------------------------------------------------------------------------------------------------//
//entrar
var inNome1 = document.getElementById("inNome1");
var inEmail1 = document.getElementById("inEmail1");
var btConta = document.getElementById("perfil")
var btContaCriar1 = document.getElementById("btContaCriar1")

function entrar() {
document.getElementById("login").style.display = "flex"
document.getElementById("blur").style.filter= "blur(1vh)"
}
btConta.addEventListener("click", entrar)
function sair(){
  var nome1 = inNome1.value;
var email1 = inEmail1.value;
if (nome1 = "Lucas" && email1 == "Lucas") {
  btConta.textContent = "Sua Conta";
  btConta.style.textAlign = "center"; 
  document.getElementById("menu").style.border = "#0BD863 solid 3px";
  document.getElementById("menu").style.borderRadius = "2vh";
  document.getElementById("menu").style.borderRight = "0vh";
  document.getElementById("menu").style.borderLeft = "0vh";
  document.getElementById("menu").style.transition = "0.2s";
  document.getElementById("menu2").style.display = "block";
  document.getElementById("login").style.display = "none";
  document.getElementById("blur").style.filter= "blur(0vh)"
} 

}
btContaCriar1.addEventListener("click", sair);
//--------------------------------------------------------------------------------------------//
//conta criar botão principal

var conta = document.getElementById("Conta");

function mover (){
  window.scrollBy(0, 1300)
}
conta.addEventListener("click", mover)