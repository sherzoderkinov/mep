$(function () {
  const slideBtn = [
    '<svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.5284 19.2608C36.1566 19.2608 36.7589 19.0113 37.2031 18.5672C37.6472 18.123 37.8967 17.5206 37.8967 16.8925C37.8967 16.2644 37.6472 15.662 37.2031 15.2179C36.7589 14.7738 36.1566 14.5243 35.5284 14.5243L8.08956 14.5243L18.259 4.3596C18.7037 3.9149 18.9535 3.31175 18.9535 2.68285C18.9535 2.05395 18.7037 1.45081 18.259 1.00611C17.8143 0.561413 17.2111 0.311582 16.5822 0.311582C15.9533 0.311582 15.3502 0.561412 14.9055 1.00611L0.695784 15.2158C0.475233 15.4358 0.300257 15.6971 0.180865 15.9848C0.0614723 16.2726 1.74572e-05 16.581 1.74262e-05 16.8925C1.73953e-05 17.204 0.0614721 17.5125 0.180865 17.8002C0.300257 18.0879 0.475233 18.3493 0.695784 18.5693L14.9055 32.779C15.3502 33.2237 15.9533 33.4735 16.5822 33.4735C17.2111 33.4735 17.8142 33.2237 18.2589 32.779C18.7036 32.3343 18.9535 31.7311 18.9535 31.1022C18.9535 30.4733 18.7036 29.8702 18.2589 29.4255L8.08956 19.2608L35.5284 19.2608Z" fill="white"/></svg>',
    '<svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.36828 14.5243C1.74017 14.5243 1.13779 14.7738 0.693654 15.2179C0.249515 15.6621 2.05216e-07 16.2645 1.97726e-07 16.8926C1.90236e-07 17.5207 0.249515 18.123 0.693654 18.5672C1.13779 19.0113 1.74017 19.2608 2.36828 19.2608L29.8072 19.2608L19.6378 29.4255C19.1931 29.8702 18.9432 30.4733 18.9432 31.1022C18.9432 31.7311 19.1931 32.3343 19.6378 32.779C20.0825 33.2237 20.6856 33.4735 21.3145 33.4735C21.9434 33.4735 22.5466 33.2237 22.9913 32.779L37.2009 18.5693C37.4215 18.3493 37.5965 18.088 37.7159 17.8002C37.8353 17.5125 37.8967 17.2041 37.8967 16.8926C37.8967 16.5811 37.8353 16.2726 37.7159 15.9849C37.5965 15.6972 37.4215 15.4358 37.2009 15.2158L22.9913 1.00614C22.5466 0.56144 21.9434 0.311611 21.3145 0.311611C20.6856 0.311611 20.0825 0.56144 19.6378 1.00614C19.1931 1.45084 18.9432 2.05398 18.9432 2.68288C18.9432 3.31178 19.1931 3.91492 19.6378 4.35963L29.8072 14.5243L2.36828 14.5243Z" fill="white"/></svg>'
  ]

  $('.slides').owlCarousel({
    items: 1,
    nav: true,
    navText: slideBtn,
    dots: false,
    smartSpeed: 1000,
    mouseDrag: false
  })

  $('.partners-slider').owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 5000,
    margin: 20,
    autoplayHoverPause: true
  })
})

function generate_dots() {
  let wrapper = document.querySelector('.dot__device')
  let dot_template = '<div class="dot_wrapper"><div class="dot"></div></div>'
  wrapper.innerHTML = ''
  for (let j = 0; j < 100; j++) {
    wrapper.innerHTML += dot_template
  }
}

function set_dots() {
  let dots = document.querySelectorAll('.dot')
  let dot__wrapper = document.querySelectorAll('.dot_wrapper')
  let circlePoints = 360 / dot__wrapper.length
  for (let i = 0; i < dot__wrapper.length; i++) {
    TweenMax.set(dot__wrapper[i], { rotation: circlePoints * i })
  }

  TweenMax.staggerFromTo(
    dots,
    0.65,
    { opacity: 0, x: 200, ease: Power4.easeIn },
    { opacity: 1, x: 0, ease: Back.easeOut.config(1.5) },
    0.025
  )
}

generate_dots()
set_dots()
