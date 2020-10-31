'use strict'

const message=(text)=>{
  const newMess=confirm(text)
  if(newMess===true){
    location.reload();
  } 
}
//Je výhera a alert
const winer =(x)=>{
  if(x===true){
      switch (player) {
        case 'circle':
          setTimeout(()=>
          message(`The winner is: circle`),10)
          break;
          default:
            setTimeout(()=>
            message(`The winner is: cross`),10)
            break;
          }
     }
    }

//Vrátí souřadnice kde jsem klikla
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

//Pro číslo řádku a sloupce vrátí prvek
const getField = (row, column) => playDesc[row * boardSize + column]

//Pro políčko s křížkem/kolečkem vrátí řetězec 'cros'/'circle'
const getSymbol = (field) => {
	if (field.classList.contains('board__field--cross')) {
    return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
    return 'circle'
	}
}

//Testování výhry
const symbolsToWin = 5
const isWinningMove = (field) => {
  const origin = getPosition(field)
	const symbol = getSymbol(field)
  
  let i
  let e
	let inRow = 1 
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
  }
  //giagonála levá nahoru
  i = origin.column
  while (i > 0 && symbol === getSymbol(getField(i-1,i-1))) {
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
  // diagonála pravá dolů
	i = origin.column
	while (
    i < boardSize - 1 &&
		symbol === getSymbol(getField(i+1, i + 1))
    ) {
      inRow++
      i++
    }
    if (inRow >= symbolsToWin) {
      return true
	}
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++
		i--
  }
  //diagonála horní levá
  i = origin.row
  e=origin.column
	while (i > 0 && symbol === getSymbol(getField(i - 1, e+1))) {
    inColumn++
    i--
    e++
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
  // diagonála dolů vlevo
  i = origin.row
  e=origin.column

	while (
    i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, e-1))
    ) {
      inColumn++
      i++
      e--
    }

    if (inColumn >= symbolsToWin) {
      return true
    }
    return false
  }
  
  let player = 'circle'
  const playDesc=document.querySelectorAll('button')
  let symbolPlayer=document.querySelector('.symbol')
  const activePayer=(event)=>{

    if (player==='circle') {
      event.target.classList.add('board__field--circle')
      event.target.disabled=true
      winer(isWinningMove(event.target))
      player='cross'
      symbolPlayer.src="images/cross.svg"
      symbolPlayer.alt="Hraje křížek"
    } else {
      event.target.classList.add('board__field--cross')
      event.target.disabled=true
      winer(isWinningMove(event.target))
      player='circle'
      symbolPlayer.src="images/circle.svg"
      symbolPlayer.alt="Hraje kolečko"
    }
  }
  for (let i = 0; i < playDesc.length; i++) {
    playDesc[i].addEventListener('click', activePayer)
  }
