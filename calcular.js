<meta charset="UTF-8">

<script>

function pulaLinha(){
	document.write("<br>");
}

function mostra(frase){
	document.write(frase);
	pulaLinha();
}

function calculaImc(peso, altura){
	var imc = peso / (altura * altura);
	return imc;
}

var nome = prompt("Informe o seu nome");
var alturaInformada = prompt(nome + ", informe sua altura");
var pesoInformado = prompt(nome + ", informe seu peso");

var imc = calculaImc(pesoInformado, alturaInformada);

mostra(nome + ", o seu IMC calculado é " + imc);

if(imc < 18.5){
	mostra("Você está abaixo do recomendado.");
}

if(imc > 35){
	mostra("Você está acima do recomendado.")
}

if(imc >= 18.5 && imc <= 35){
		mostra("Seu IMC está ótimo!");
}

</script>
