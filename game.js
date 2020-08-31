const player1 = "X";
const player2 = "O";
let playTime = player1;
let gameOver = false;

atualizaMostrador();

function atualizaMostrador() {
	if (gameOver) {
		return;
	}
	if(playTime == player1) {
		let player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "https://img.icons8.com/small/32/000000/delete-sign.png");
		player.setAttribute("alt", "xis");
	}
	if(playTime == player2) {
		let player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "https://img.icons8.com/small/32/000000/unchecked-circle.png");
		player.setAttribute("alt", "bola")
	}
}
