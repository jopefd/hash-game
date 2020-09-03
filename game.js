const player1 = "X";
const player2 = "O";
let playTime = player1;
let gameOver = false;

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador() {
	if (gameOver) {
		return;
	}
	if(playTime == player1) {
		let player = document.getElementById("mostrador");
		player.innerHTML = `<span>Vez do X</span>`;
	} else {
		let player = document.getElementById("mostrador");
		player.innerHTML = `<span>Vez do O</span>`;
	}
}

function inicializarEspacos() {
	let espacos = document.querySelector(".tabuleiro").children;
	for (var i = 0; i < espacos.length; i++) {
		espacos[i].addEventListener("click", function() {
			if(gameOver){
				return;
			}
			if(this.children.length == 0) {
				if(playTime == player1) {
					this.innerHTML = `<div id="x"><div id="x-slash-1"></div><div id="x-slash-2"></div></div>`;
					this.setAttribute("jogada", player1);
					playTime = player2;
				} else {
					this.innerHTML = `<div id='o'></div>`;
					this.setAttribute("jogada", player2);
					playTime = player1;
				}
			}
			atualizaMostrador();
			verificarVencedor();
		});
	}
}

async function verificarVencedor() {
	let a1 = document.getElementById("a1").getAttribute("jogada");
	let a2 = document.getElementById("a2").getAttribute("jogada");
	let a3 = document.getElementById("a3").getAttribute("jogada");

	let b1 = document.getElementById("b1").getAttribute("jogada");
	let b2 = document.getElementById("b2").getAttribute("jogada");
	let b3 = document.getElementById("b3").getAttribute("jogada");

	let c1 = document.getElementById("c1").getAttribute("jogada");
	let c2 = document.getElementById("c2").getAttribute("jogada");
	let c3 = document.getElementById("c3").getAttribute("jogada");

	let vencedor = "";

	if((a1 == b1 && a1 == b2 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) {
		vencedor = a1;
	} else if  ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) {
		vencedor = b2;
	} else if  ((c3 == c1 && c3 == c2 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")) {
		vencedor = c3;
	}
	if (vencedor != "") {
		await sleep(50);
		gameOver = true;
		alert(vencedor + " ganhou!");
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
