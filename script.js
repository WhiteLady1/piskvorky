'use strict'

let player = 'circle'

const activePayer=(event)=>{
  event.target.classList.toggle('board__field--circle')
}
document.querySelector('button').addEventListener('click', activePayer)