'use strict'

let player = 'circle'
const playDesc=document.querySelectorAll('button')
let symbolPlayer=document.querySelector('.symbol')

const activePayer=(event)=>{
    if (player==='circle') {
      event.target.classList.add('board__field--circle')
      event.target.disabled=true
      player='cross'
      symbolPlayer.src="images/cross.svg"
      symbolPlayer.alt="Hraje křížek"
      console.log(getPosition(event.target));
    } else {
      event.target.classList.add('board__field--cross')
      event.target.disabled=true
      player='circle'
      symbolPlayer.src="images/circle.svg"
      symbolPlayer.alt="Hraje kolečko"
      console.log(getPosition(event.target));

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
for (let i = 0; i < playDesc.length; i++) {
  playDesc[i].addEventListener('click', activePayer)
}
