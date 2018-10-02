(function($){
  $(function(){
    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
    }
    );
    $('.parallax').parallax();
    $('.modal').modal({
          dismissible: false, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
          ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            console.log(modal, trigger);
          },
          complete: function() {} // Callback for Modal close
        }
    );
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $(".dropdown-button").dropdown();
    $('ul.tabs').tabs();    
    $('select').material_select();
  });
})(jQuery);