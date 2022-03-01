function load () {
  let msg = document.querySelector('.msg')
  let img = document.querySelector('.img')
  let dayPeriodMsg = document.querySelector('#periodMsg')
  let date = new Date()
  let hour = date.getHours()
  let minuts = date.getMinutes()
 
  if (hour >= 7 && hour < 12) {
    document.body.style.background = '#0284c7'
    dayPeriodMsg.innerHTML = 'Tenha um bom dia!'
    msg.innerHTML = `Agora são ${hour}:${minuts} horas`
    img.src = "assets/dia.png"
  } else if (hour >= 12 && hour < 18) {
    document.body.style.background = '#d97706'
    dayPeriodMsg.innerHTML = 'Tenha uma boa tarde!'
    msg.innerHTML = `Agora são ${hour}:${minuts} horas`
    img.src = "assets/tarde.png"
  } else if (hour >= 18 && hour <= 23) {
    document.body.style.background = '#111827'
    dayPeriodMsg.innerHTML = 'Tenha uma boa noite!'
    msg.innerHTML = `Agora são ${hour}:${minuts} horas`
    img.src = "assets/noite.png"
  } else {
    document.body.style.background = '#881337'
    dayPeriodMsg.innerHTML = 'Vai dormir, safado!'
    msg.innerHTML = `Já são ${hour}:${minuts} horas!`
    img.src = "assets/madruga.png"
  }
}