( function( $ ) {
  // Drastically modified from the function in the WordPress Twenty Fifteen theme
  // Original source: https://github.com/WordPress/WordPress/blob/master/wp-content/themes/twentyfifteen/js/functions.js
 $(window).on("load", function()
    {
      var height=$(window).innerHeight();
        var width=$(window).innerWidth();
//            alert('resize h '+height+' w '+width);

     if (width < 768 && height < 670) {
      alert('');
    $('.page-emerald').removeClass('leftmenu');
      $('#canvas-back').removeClass('show');

      $('#viewport').addClass('portrait');
      $('body').addClass('responsive');
      $('.hide-on-mobile .text').addClass('hide');
     } else{
      $('.page-emerald').addClass('leftmenu');
        $('#viewport').removeClass('portrait');
      $('#canvas-back').addClass('show');

        $('body').removeClass('responsive');
        $('.hide-on-mobile .text').removeClass('hide');

         };
          });

 $(window).on("resize", function()
    {
      var height=$(window).innerHeight();
        var width=$(window).innerWidth();
//            alert('resize h '+height+' w '+width);

     if (width < 768 && height < 670) {
    $('.page-emerald').removeClass('leftmenu');
      $('#canvas-back').removeClass('show');

      $('#viewport').addClass('portrait');
      $('body').addClass('responsive');
      $('.hide-on-mobile .text').addClass('hide');
     } else{
      $('.page-emerald').addClass('leftmenu');
        $('#viewport').removeClass('portrait');
      $('#canvas-back').addClass('show');

        $('body').removeClass('responsive');
        $('.hide-on-mobile .text').removeClass('hide');

         };
          });

  
  $( '#menu_mainMenu ul li' ).click( function( e ) {
    event.preventDefault();
    var id = event.currentTarget.id;
    $('.window').addClass('hide');
    $('#window_'+id).removeClass('hide');
    } );

    $( '.icon.close' ).click( function( e ) {
      event.preventDefault();
    var id = event.currentTarget.id;
    $('.window').addClass('hide');
});

$( '#save' ).click( function( e ) {
event.preventDefault();
    $('#des_window').toggleClass('hide');

});
$( '#log' ).click( function( e ) {
  event.preventDefault();
    $('#login_window').toggleClass('hide');

});
$( ' #login_window button' ).click( function( e ) {
  event.preventDefault();
    $('#login_window').toggleClass('hide');
    $('#myAcc').toggleClass('hide');
    $('#log').toggleClass('hide');

});
$( '#des_window button' ).click( function( e ) {
  event.preventDefault();
    $('#des_window').toggleClass('hide');

});
$( '.backToMenu' ).click( function( e ) {
  
    event.preventDefault();
    $('.level1').toggleClass('hide');
    $('.level0').toggleClass('hide');
});
$( '#contrast' ).click( function( e ) {
    event.preventDefault();
    $('.level1').toggleClass('hide');
    $('.level0').toggleClass('hide');

});
$( '.front-view' ).click( function( e ) {
   event.preventDefault();
      $('#canvas-zoom').removeClass('canvas');
      $('.shirt-main').removeClass('canvas');
      $('#canvas-front').addClass('canvas');

});
$( '.back-view' ).click( function( e ) {
     event.preventDefault();
     $('#canvas-zoom').removeClass('canvas');
     $('.shirt-main').removeClass('canvas');
     $('#canvas-back').addClass('canvas');
     $('#canvas-back').addClass('show');

});
$( '.zoom-view' ).click( function( e ) {
   event.preventDefault();
       $('#canvas-zoom').toggleClass('canvas');
        if($('.shirt-main').hasClass('canvas'))
        {
         $('.shirt-main').removeClass('canvas');
        }
        else
        {
         $('.shirt-main').addClass('canvas');
       }

});

})( jQuery );