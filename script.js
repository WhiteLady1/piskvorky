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
    } else {
      event.target.classList.add('board__field--cross')
      event.target.disabled=true
      player='circle'
      symbolPlayer.src="images/circle.svg"
      symbolPlayer.alt="Hraje kolečko"
    }
}

for (let i = 0; i < playDesc.length; i++) {
  playDesc[i].addEventListener('click', activePayer)
}
