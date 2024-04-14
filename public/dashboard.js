const dropDownJs = document.getElementById('drop-down-js')
const expand = document.getElementById('expand-nav-drop-down')


expand.addEventListener('click', dropdown)

function dropdown() {
  dropDownJs.classList.toggle('hidden')
}