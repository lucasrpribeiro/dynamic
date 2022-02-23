function load () {
  let message = document.querySelector('.msg')
  let image = document.querySelector('.img')
  let currentMessage = document.querySelector('#periodMsg')
  let date = new Date()
  let hour = date.getHours()

  if (hour >= 7 && hour < 12) {
    document.body.style.background = '#0284c7'
    currentMessage.innerHTML = 'Tenha um bom dia!'
    message.innerHTML = `Agora são ${hour} horas`
    image.src = 'assets/dia.png'
  } else if (hour >= 12 && hour < 18) {
    document.body.style.background = '#d97706'
    message.innerHTML = `Agora são ${hour} horas`
    currentMessage.innerHTML = 'Tenha uma boa tarde!'
    image.src = 'assets/tarde.png'
  } else if (hour >= 18 && hour <= 23) {
    document.body.style.background = '#111827'
    message.innerHTML = `Agora são ${hour} horas`
    currentMessage.innerHTML = 'Tenha uma boa noite!'
    image.src = 'assets/noite.png'
  } else {
    document.body.style.background = 'black'
    message.innerHTML = `Já são ${hour} horas`
    currentMessage.innerHTML = 'Vai dormir viado!'
    image.src = 'assets/madruga.png'
  }
} 