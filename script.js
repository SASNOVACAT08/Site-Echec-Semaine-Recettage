
let menuOpen = false;

document.getElementById('menuOpen').addEventListener('click', function(e) {
  if (menuOpen === false){
    document.getElementById('navigation').style.height = '220px';
    for (let i = 0; i <= document.getElementsByClassName('button_nav').length - 1; i++){
      document.getElementsByClassName('button_nav')[i].style.display = 'block';
    }
    menuOpen = true;
  }
  else {
    document.getElementById('navigation').style.height = '60px';
    for (let i = 0; i <= document.getElementsByClassName('button_nav').length - 1; i++){
      document.getElementsByClassName('button_nav')[i].style.display = 'none';
    }
    menuOpen = false;
  }
});