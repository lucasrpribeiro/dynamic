function load() {
  let msg = document.querySelector('.msg')
  let img = document.querySelector('.img')
  let date = new Date()
  let hours = date.getHours()
  let period = document.querySelector('#periodMsg')
  let periodMsg = ''
  
  if (hours >7 && hours <= 12) {
    document.body.style.background = "#0284c7"
    img.src = 'assets/dia.png'
    periodMsg = 'Bom dia!'
  } else if (hours > 12 && hours <= 18) {
    document.body.style.background = '#d97706'
    img.src = 'assets/tarde.png'
    periodMsg = 'Boa tarde!'
  } else if (hours > 18 && hours <= 0){
    document.body.style.background = '#111827'
    img.src = 'assets/noite.png'
    periodMsg = 'Boa noite!'
  } else {
    document.body.style.background = 'red'
    periodMsg = 'Você não deveria estar dormindo?'
    img.src = 'assets/madruga.png'
  }

  msg.innerHTML = `Agora são ${hours} horas`
  period.innerHTML = periodMsg
  
}