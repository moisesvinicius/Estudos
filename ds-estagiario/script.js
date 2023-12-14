

function clicar(){
  let cores = document.getElementById('item1')
  cores.style.background = 'yellow'

  let estra = document.getElementById('item2')
  estra.style.background = 'yellow'

  let estilo = document.getElementById('item3')
  estilo.style.background = 'yellow'

  let coleu = document.getElementById('item4')
  coleu.style.background = 'yellow'

  let coure = document.getElementById('item5')
  coure.style.background = 'yellow'

  let est = document.getElementById('item6')
  est.style.background = 'yellow'

  let cool = document.getElementById('item7')
  cool.style.background = 'yellow'

  let core = document.getElementById('item8')
  core.style.background = 'yellow'

  let cor = document.getElementById('item9')
  cor.style.background = 'yellow'

  let co = document.getElementById('item10')
  co.style.background = 'yellow'
}

// Pega a hora atual
var date = new Date();
var hours = date.getHours();

// Define as horas de dia e noite
var dayTime = 6;
var nightTime = 18;

// Verifica se é dia ou noite e aplica a cor de fundo do body
if(hours >= dayTime && hours < nightTime) {
    document.body.style.backgroundColor = "yellow";
} else {
    document.body.style.backgroundColor = "black";
}
