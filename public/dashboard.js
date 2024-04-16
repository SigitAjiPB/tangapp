
document.addEventListener('DOMContentLoaded', function() {
  // Mendapatkan tombol dan konten dropdown
  const dropDownJs = document.getElementById('drop-down-js')
  const expand = document.getElementById('expand-nav-drop-down')
 
  // Menampilkan dropdown saat tombol diklik
  expand.addEventListener('click', function() {
     dropDownJs.style.display = dropDownJs.style.display === 'none' ? 'block' : 'none';
  });
 
  // Menyembunyikan dropdown saat mengklik di luar area tombol dan dropdown
  document.addEventListener('click', function(event) {
     if (!expand.contains(event.target) && !dropDownJs.contains(event.target)) {
       dropDownJs.style.display = 'none';
     }
  });
 });