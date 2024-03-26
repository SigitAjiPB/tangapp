const menu = document.getElementById('menu')
const sidebar = document.getElementById('side-bar')
const close = document.getElementById('close')

menu.addEventListener('click',toggle)
close.addEventListener('click', toggle)

function toggle () {
  sidebar.classList.toggle('hidden')
}