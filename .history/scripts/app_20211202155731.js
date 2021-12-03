const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

/*swiper */

let HomeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
  });

  function scrollHeader(){
      const header = document.getElementById('header')
      if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll',scrollHeader)

  /* new swiper */

  let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    loop: 'true',
    slidesPerView:'auto',
    centeredSlides: true,
   
  });
  /* scroll sections active link */
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
      const scrollY = window.pageYOffset
      sections.forEach(current =>{
          const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          }else{
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
      })
    }
    window.addEventListener('scroll',scrollActive);

/* scrollup */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll'); 
}
window.addEventListener('scroll' , scrollUp)

/* scroll reveal animation */
const sr = ScrollReveal({
    originP:'top',
    distance: '60px',
    duration: 1500,
    delay:400,
})
sr.reveal('.hone-swiper, .new-swiper, .newsletter__container')
sr.reveal('.category__data, .hot__content, .footer__content', {interval:100})
sr.reveal('.about__data, .discount__img', {origin: 'left'})
sr.reveal('.about__image', {origin:'right'})

const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

const infoUser = document.getElementById('info-user'),
      infoShow = document.getElementById('info'),
      infoClose = document.getElementById('info-close')
if(infoUser){
    infoUser.addEventListener('click', () =>{
        infoShow.classList.add('show-info')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(infoClose){
    infoClose.addEventListener('click', () =>{
        infoShow.classList.remove('show-info')
    })
}
/*=== Modal === */

const btnView = document.querySelectorAll('.product__list');
const modal = document.getElementById('modal__view')
function modalAction(){
    modal.classList.add('show-modal')
}
btnView.forEach(n=>n.addEventListener('click', modalAction))

const modalClose= document.getElementById('modal-close')
function modalCloses(){
    if(modalClose){
        modal.classList.remove('show-modal')
    }
}
modalClose.addEventListener('click',modalCloses)



/*===== CART SHOW =====*/
/* Validate if constant exists */

document.querySelector('.search-btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})


const productBtns = document.querySelectorAll('.category__shop-title')
const productList = document.querySelectorAll('.product__content')

productBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const type = e.target.getAttribute('type-product')

		// remove and set active fpr button
		document
			.querySelector('.category__shop-title ')
			.classList.remove('active')
		e.target.classList.add('active')

		// filter elements
		foodList.forEach((item) => {
			if (type == 'all' || item.getAttribute('product-content') == type)
				item.classList.remove('hide')
			else item.classList.add('hide')
		})
	})
})
