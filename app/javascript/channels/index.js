// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

/* EFFET SMOOTH SCOLL */
$("a[href^='#']").click(function (e) {
  var 
    yPos,
    yInitPos,
    target = ($($(this).attr("href") + ":first"));
    
  e.preventDefault(); 
  
  yInitPos = $(window).scrollTop();
  
  window.location.hash = $(this).attr("href");
  
 
  $(window).scrollTop(yInitPos);

  target = ($($(this).attr("href") + ":first"));

  if (target.length == 0) {
    target = ($("a[name=" + $(this).attr("href").replace(/#/gi,"") + "]:first"))
  }
  
  if (target.length == 1) {
    yPos = target.offset().top;
  
    if (window.matchMedia ('(min-width: 1000px)').matches)
    {
      $('html,body').animate({ scrollTop: yPos - 60 }, 1000);
    }
    else
    {
      $('html,body').animate({ scrollTop: yPos - 60 }, 1000);
    }
  }
});

/* Navbar transparent */
/* $(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 100) { 
        $('.navbar-lewagon').addClass('transparent');
    } else {
        $('.navbar-lewagon').removeClass('transparent');
    }
  });
}); */

const navbar = document.querySelector('.navbar-lewagon');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 1) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });
}