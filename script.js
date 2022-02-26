function load() {
  let msg = document.querySelector('.msg')
  let img = document.querySelector('.img')
  let currentMsg = document.querySelector('#periodMsg')
  let date = new Date()
  let hour = date.getHours()

  if (hour >= 7 && hour < 12) {

    document.body.style.background = '#0284c7'

    msg.innerHTML = `Agora são ${hour}:00 horas`

    img.src = 'assets/dia.png'

    currentMsg.innerHTML = 'Tenha um bom dia!'

  } else if (hour >= 12 && hour < 18) {

    document.body.style.background = '#d97706'

    msg.innerHTML = `Agora são ${hour}:00 horas`

    img.src = 'assets/tarde.png'

    currentMsg.innerHTML = 'Tenha uma boa tarde!'

  } else if (hour >= 18 && hour < 23) {

    document.body.style.background = '#111827'

    msg.innerHTML = `Agora são ${hour}:00 horas`

    img.src = 'assets/noite.png'

    currentMsg.innerHTML = 'Tenha uma boa noite!'

  } else {

    document.body.style.background = '#581c87'

    msg.innerHTML = `Agora são ${hour}:00 horas`

    img.src = 'assets/madruga.png'

    currentMsg.innerHTML = 'Vai dormir!'

  }
}