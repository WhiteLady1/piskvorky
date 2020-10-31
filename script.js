'use strict'

let player = 'circle'
const playDesc=document.querySelectorAll('button')
let symbolPlayer=document.querySelector('.symbol')

const activePayer=(event)=>{
  let pozice=getPosition(event.target)
  let prvek=getField(pozice.row, pozice.column)
    if (player==='circle') {
      event.target.classList.add('board__field--circle')
      event.target.disabled=true
      player='cross'
      symbolPlayer.src="images/cross.svg"
      symbolPlayer.alt="Hraje křížek"
      console.log(pozice);
      console.log(prvek);
      console.log(getSymbol(prvek));
      console.log(isWinningMove(event.target))
    } else {
      event.target.classList.add('board__field--cross')
      event.target.disabled=true
      player='circle'
      symbolPlayer.src="images/circle.svg"
      symbolPlayer.alt="Hraje kolečko"
      console.log(pozice);
      console.log(prvek);
      console.log(getSymbol(prvek));
      console.log(isWinningMove(event.target))
    }
}
//Doplnění na úkol č.5 => vrátí souřadnice kde jsem klikla
const boardSize = 10 // 10x10

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < playDesc.length) {
		if (field === playDesc[fieldIndex]) {
			break
		}
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}
//
//Pro číslo řádku a sloupce vrátí prvek
const getField = (row, column) => playDesc[row * boardSize + column]
//
//Pro políčko s křížkem/kolečkem vrátí řetězec 'cros'/'circle'
const getSymbol = (field) => {
	// Název třídy přizpůsob tvému kódu.
	if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
}
//

//Testování výhry
const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}
for (let i = 0; i < playDesc.length; i++) {
  playDesc[i].addEventListener('click', activePayer)
}
