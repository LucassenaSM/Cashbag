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
  document.getElementById("blur").style.filter= "blur(0vh)";
  document.getElementById("outNomeConta").style.display = "block";
  var nomeOut = inNome1.value;
} 
outNomeConta.textContent = "ADICIONAR FUNDOS À CARTEIRA DE " + nomeOut.toUpperCase();
}
btContaCriar1.addEventListener("click", sair);