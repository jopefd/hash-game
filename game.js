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
		let player = document.getElementById("x-or-o");
		player.innerHTML = `<div id="x"><div id="x-slash-1"></div><div id="x-slash-2"></div></div>`;
	} else {
		let player = document.getElementById("x-or-o");
		player.innerHTML = `<div id='o'></div>`;
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
		});
	}
}
