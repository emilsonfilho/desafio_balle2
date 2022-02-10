var input = document.querySelector('input#troco')
var btn = document.querySelector('#botao')
let moedas = 0
let umReal = 0
let cinquentaCentavos = 0
let vinteCincoCentavos = 0
let dezCentavos = 0
let cincoCentavos = 0

var newReal = document.createElement('p')

btn.addEventListener('click', enviar)

function enviar() {
	let troco = Number(input.value) 
	
	if (troco != 0) {
		contaReal(troco)
		total(moedas)
		reinicializacao()
		zerando()
	} else {
		alert('Digite um valor')
		reinicializacao()
		zerando()
		newReal.textContent = ''
	}
}


function contaReal(t) {
	while (t > 0.99) {
		t--
		moedas++
		umReal++
	}
	
	if (t === 0) {
		criacaoUmReal(umReal)
	} else {
		if (umReal !== 0) {
			criacaoUmReal(umReal)
		}
		contaCinquenta(t)
	}
}

function contaCinquenta(a) {
	while (a > 0.49) {
		a -= 0.5
		moedas++
		cinquentaCentavos++
	}

	if (a === 0) {
		criacaoCinquentaCentavos(cinquentaCentavos)
	} else {
		if (cinquentaCentavos !== 0) {
			criacaoCinquentaCentavos(cinquentaCentavos)
		}
		contaVinte(a)
	}
}

function contaVinte(b) {
	while (b > 0.24) {
		b -= 0.25
		moedas++
		vinteCincoCentavos++
	} 
	
	if (b === 0) {
		criacaoVinteCincoCentavos(vinteCincoCentavos)
	} else {
		if (vinteCincoCentavos !== 0) {
			criacaoVinteCincoCentavos(vinteCincoCentavos)
		}
		contaDez(b)
	}
}

function contaDez(c) {
	while (c > 0.09) {
		c -= 0.10
		moedas++
		dezCentavos++
	}
	
	if (c === 0) {
		criacaoDezCentavos(dezCentavos)
	} else {
		if (dezCentavos !== 0) {
			criacaoDezCentavos(dezCentavos)
		}
		contaCinco(c)
	}
}
	
function contaCinco(x) {
	while (x > 0.04) {
		x -= 0.05
		moedas++
		cincoCentavos++
	}
	
	if (cincoCentavos !== 0) {
		criacaoCincoCentavos(cincoCentavos)
	} 
}


function criacaoUmReal(umR) {
	newReal.textContent = `Você tem ${umR} moeda(s) de R$1,00`
}

function criacaoCinquentaCentavos(cinqCents) {
	newReal.innerHTML += `<br>${cinqCents} moeda(s) de R$0,50`
}

function criacaoVinteCincoCentavos(vinteCincoCents) {
	newReal.innerHTML += `<br>${vinteCincoCents} moeda(s) de R$0,25`
}

function criacaoDezCentavos(dezCents) {
	newReal.innerHTML += `<br>${dezCents} moeda(s) de R$0,10`
}

function criacaoCincoCentavos(cincoCents) {
	newReal.innerHTML += `<br>${cincoCents} moeda(s) de R$0,05`
}

function total(m) {
	newReal.innerHTML += `<br>No fim, você terá uma quantidade de ${m} moeda(s).`
}

document.body.appendChild(newReal)

function reinicializacao() {
	input.value = ''
	input.focus()
}

function zerando() {
	moedas = 0
	umReal = 0
	cinquentaCentavos = 0
	vinteCincoCentavos = 0
	dezCentavos = 0
	cincoCentavos = 0
}
