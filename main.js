var logo = document.getElementById("logo");

function openNav() {
  document.getElementById("open").style.height = "100%";
  logo.src = "./assets/images/logo-folio-mobile.png";
}

function closeNav() {
  document.getElementById("open").style.height = "0%";
  logo.src = "./assets/images/logo-folio.png";
}
$('.dropdown').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});


$('.dropdown').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$(document).ready(function() {
    $(".dropdown-menu li a").click(function(){
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });
    
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      URLhashListener:true,
      navText: [
        '<div class="arrow"><i class="bi bi-arrow-left text-light"></i></div>','<div class="arrow"><i class="bi bi-arrow-right text-light"></i></div>'
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  });

