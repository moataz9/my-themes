$(document).ready(() => {
  // change navbar button "toggler btn"
  $('.navbar-toggler').click(() => {
    $('.navbar-toggler').toggleClass('change')
  })
  // sticky navbar less padding
  $(window).scroll(function () {
    let position = $(this).scrollTop()
    console.log(position)
    if (position >= 718) {
      $('.navbar').addClass('navbar-background')
      $('.navbar').addClass('fixed-top')
    } else {
      $('.navbar').removeClass('navbar-background')
      $('.navbar').removeClass('fixed-top')
    }
  })
  // Smooth scroll
  $('.nav-item a, .header-link, #back-to-top').click(function (link) {
    link.preventDefault()
    let target = $(this).attr('href')
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top -25
    }, 3000)
  })
  // Back to top
  $(window).scroll(function () {
    let position = $(this).scrollTop()
    console.log(position)
    if (position >= 718) {
      $('#back-to-top').removeClass('d-none')
    } else {
      $('#back-to-top').addClass('d-none')
    }
  })

  // ======== plugins ==========
  // ripples
  $('#header, .info').ripples({
    dropRadius: 25,
    perturbance: 0.6,
    imageUrl: 'url(img/banner-bcg.jpg)',
  })
  // magnific popup
  $('.parent-container').magnificPopup({
    // child items selector, by clicking on it popup will open
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  })
  // $('.magnific__popup').magnificPopup({
  //   type: 'image',
  //   gallery: {
  //     enabled: true
  //   }
  // })
})
