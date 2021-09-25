// search box Start//
let search = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () =>{
  search.classList.toggle('active');
  
  // remove login box //
  login.classList.remove('active');
  
  // remove navbar //
  navbar.classList.remove('active');
}
// search box End//

// Start login box//

let login = document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = () =>{
  login.classList.toggle('active');
  
  // remove search box  //
  search.classList.remove('active');
  
  // remove navbar //
  navbar.classList.remove('active');
}
// End login box //

// Start navbar //

let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
// remove search box //

  search.classList.remove('active');
// remove login box //

  login.classList.remove('active');
}
// End navbar//

// window scroll remove //

window.onscroll = () =>{
  search.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
  if(window.scrollY > 60){
    document.querySelector('#scroll-up').classList.add('active');
  }else{
  document.querySelector('#scroll-up').classList.remove('active');
  }
}
// window is End //

AOS.init({
  duration:400,
  delay:800,
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

