function openbox(id) {
  let all = document.querySelectorAll(".main-body");
  let navItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < all.length; i++) {
    if (all[i].id == id) {
      all[i].style.display = 'block';
      if (i != 0) {
        navItems[i-1].classList.add("active");
      }
    } else {
      all[i].style.display = 'none';
      if (i != 0) {
        navItems[i-1].classList.remove("active");
      }
    }
  }
}

function openform(id) {
  let all = document.querySelectorAll(".my-form");
  for (let i = 0; i < all.length; i++) {
    if (all[i].id == id) {
      all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
    } else {
      all[i].style.display = 'none';
    }
  }
}

function chooseSpec(selInd) {
  let i = selInd;
  let all = document.querySelectorAll(".spec");

  all[i].style.display = 'block';
  for (let j = 0; j < all.length; j++) {
    if (j != i) all[j].style.display = 'none';
  }
}

function changeStud(selInd) {
  let i = selInd;
  let all = document.getElementsByClassName(".smth");

  all[i].style.display = 'block';
  for (let j = 0; j < all.length; j++) {
    if (j != i) all[j].style.display = 'none';
  }
}