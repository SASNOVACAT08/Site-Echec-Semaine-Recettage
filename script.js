
let menuOpen = false;

/*____________*/

window.onresize = resize;

function resize(){
  console.log(window.innerWidth);
  if (window.innerWidth > 800) {
    document.getElementById('navigation').classList.remove('navigation_edit');
    for (let i = 0; i <= document.getElementsByClassName('button_nav').length - 1; i++){
      document.getElementsByClassName('button_nav')[i].classList.remove('button_nav_edit')
    }
    menuOpen = false;
  }
}

/*____________*/

document.getElementById('menuOpen').addEventListener('click', function(e) {
  if (menuOpen === false){
    document.getElementById('navigation').classList.add('navigation_edit');
    for (let i = 0; i <= document.getElementsByClassName('button_nav').length - 1; i++){
      document.getElementsByClassName('button_nav')[i].classList.add('button_nav_edit')
    }
    menuOpen = true;
  }
  else {
    document.getElementById('navigation').classList.remove('navigation_edit');
    for (let i = 0; i <= document.getElementsByClassName('button_nav').length - 1; i++){
      document.getElementsByClassName('button_nav')[i].classList.remove('button_nav_edit')
    }
    menuOpen = false;
  }
});