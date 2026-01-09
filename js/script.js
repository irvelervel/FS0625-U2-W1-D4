// in questo script scriveremo la funzione click(), che verrà eseguita
// alla pressione del pulsante a fianco del box

const rotate = function () {
  // selezioniamo il box
  // ha id "box-button"
  const box = document.getElementById('box-button')
  // dobbiamo aggiungere/togliere una classe CSS, quindi
  // lavoro con la proprietà "classList" dell'elemento
  box.classList.toggle('animate') // toggle -> interruttore
  // modifichiamo l'etichetta del bottone a "STOP" se abbiamo appena aggiunto la classe
  const button = document.querySelector('.flex > button')
  console.log('ETICHETTA ATTUALE', button.textContent)
  if (button.textContent === 'START') {
    button.textContent = 'STOP'
  } else {
    button.textContent = 'START'
  }
}
