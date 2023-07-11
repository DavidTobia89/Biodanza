$(document).ready(function(){
  $('.menu li:has(ul)').click(function(e){
    e.preventDefault();
    
    if ($(this).hasClass('acticado')){

    $(this).removeClass('acticado');
    $(this).children('ul').slideUp();
   }
    else  {
      $('.menu li ul').slideUp();
      $('.menu li').removeClass('acticado')
      $(this).addClass('acticado');
      $(this).children('ul').slideDown();
    }
  });
  $('.menu-icon').click(function(){
    $('#navegador menu').slideToggle();
  });
  $(window).resize(function(){
    if ($(document).width() > 780) {
      $('#navegador menu').css({'display':'block'});
  };
  
  })

});