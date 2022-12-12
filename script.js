const fps = 1
const K = 100
const game = document.getElementById("game")
/** @type {CanvasRenderingContext2D} */
const canvas = game.getContext("2d")
let width = game.clientWidth, height = game.clientHeight
let rows = K + 2, cols = K + 2, cell_width = width / cols

let grid = [], grid2 = []
for (let i = 0; i < K + 2; i++)
	grid.push(Array(K + 2).fill(0)),
		grid2.push(Array(K + 2).fill(0))

game.onresize = e => {
	width = game.clientWidth
	height = game.clientHeight
	cell_width = width / cols
	cell_width = 1
	paint_grid()
}
function coord_from_mouseevent(e) {
	const rect = game.getBoundingClientRect()
	const x = e.clientX - rect.left, y = e.clientY - rect.top
	const X = Math.floor(x / cell_width % cols), Y = Math.floor(y / cell_width % rows)
	return [X, Y, x, y]
}
game.onmousemove = e => {
	const [X, Y, x, y] = coord_from_mouseevent(e)
	if (X >= 1 && X <= K && Y >= 1 && Y <= K) {
		paint_grid()
		canvas.strokeStyle = "red"
		canvas.strokeRect(X * cell_width, Y * cell_width, cell_width, cell_width)
	}
}
game.onmousedown = e => {
	const [X, Y, x, y] = coord_from_mouseevent(e)
	if (X >= 1 && X <= K && Y >= 1 && Y <= K) {
		grid[X][Y] = grid[X][Y] == 0 ? 1 : 0
		paint_grid()
	}
	document.getElementById("play").checked = false
}

function next_frame() {
	for (let i = 1; i <= K; i++)
		for (let j = 1; j <= K; j++) {
			const i_minus_1 = ((i - 1) % K + K) % K
			const j_minus_1 = ((j - 1) % K + K) % K
			const i_plus_1 = ((i + 1) % K + K) % K
			const j_plus_1 = ((j + 1) % K + K) % K
			const neighbors = grid[i_minus_1][j_minus_1] + grid[i_minus_1][j] + grid[i_minus_1][j_plus_1]
				+ grid[i][j_minus_1] + grid[i][j_plus_1]
				+ grid[i_plus_1][j_minus_1] + grid[i_plus_1][j] + grid[i_plus_1][j_plus_1]
			grid2[i][j] = grid[i][j] == 1 && neighbors == 2 || neighbors == 3 ? 1 : 0
		}
	for (let i = 1; i <= K; i++)
		for (let j = 1; j <= K; j++)
			grid[i][j] = grid2[i][j]
	paint_grid()
	if (document.getElementById("play").checked)
		setTimeout(() => requestAnimationFrame(next_frame), 1000 / document.getElementById("speed").value);
}

function paint_grid() {
	canvas.clearRect(0, 0, width, height)
	canvas.fillStyle = "black"
	for (let i = 1; i <= K; i++)
		for (let j = 1; j <= K; j++)
			if (grid[i][j] == 1) canvas.fillRect(i * cell_width, j * cell_width, cell_width, cell_width)

}

//spaceship
grid[20][20] = grid[19][22] = grid[20][22] = grid[21][22] = grid[21][21] = 1
//line
// grid[50][50] = grid[49][50] = grid[48][50] = 1
paint_grid()
