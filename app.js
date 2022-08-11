$(document).ready(function(){

  //for the Navbar to appear on Scroll
  
  $(window).scroll(function(){
     if(this.scrollY > 200) {
      $('.navbar').addClass("sticky");
     } else {
      $('.navbar').removeClass("sticky");
     }

     if(this.scrollY > 500) {
       $('.scroll-up-btn').addClass("show");
     } else {
      $('.scroll-up-btn').removeClass("show");
     }
  });

  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
  });

  var typed = new Typed(".typing-1", {
    strings: [
        "Developer", "Designer", "Freelancer"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  });






});

