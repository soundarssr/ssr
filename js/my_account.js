( function( $ ) {
  
  $( '.my_page .myAcc-list ul li' ).click( function( e ) {
       e.preventDefault();
      var id='.'+ e.currentTarget.id;
        $('.my_page').addClass('hide');
        $(id).removeClass('hide');
       
    } );

  $( '.my_page .header button.main_menu' ).click( function( e ) {
         e.preventDefault();
        $('.my_page').addClass('hide');
        $('#my-acc').removeClass('hide');
    } );


})( jQuery );