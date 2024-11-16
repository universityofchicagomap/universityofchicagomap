// preloader
jQuery(window).on('load', function() {
  jQuery('#status').fadeOut();
  jQuery('#preloader').delay(350).fadeOut('slow');
  jQuery('body').delay(350).css({'overflow':'visible'});
})

// toggle button
jQuery(function($){
  $( '.toggle-nav button' ).click( function(e){
    $( 'body' ).toggleClass( 'show-main-menu' );
    var element = $( '.sidenav' );
    classic_artificial_intelligence_trapFocus( element );
  });

  $( '.close-button' ).click( function(e){
    $( '.toggle-nav button' ).click();
    $( '.toggle-nav button' ).focus();
  });
  $( document ).on( 'keyup',function(evt) {
    if ( $( 'body' ).hasClass( 'show-main-menu' ) && evt.keyCode == 27 ) {
      $( '.toggle-nav button' ).click();
      $( '.toggle-nav button' ).focus();
    }
  });
});

function classic_artificial_intelligence_trapFocus( element, namespace ) {
  var classic_artificial_intelligence_focusableEls = element.find( 'a, button' );
  var classic_artificial_intelligence_firstFocusableEl = classic_artificial_intelligence_focusableEls[0];
  var classic_artificial_intelligence_lastFocusableEl = classic_artificial_intelligence_focusableEls[classic_artificial_intelligence_focusableEls.length - 1];
  var KEYCODE_TAB = 9;

  classic_artificial_intelligence_firstFocusableEl.focus();

  element.keydown( function(e) {
    var isTabPressed = ( e.key === 'Tab' || e.keyCode === KEYCODE_TAB );

    if ( !isTabPressed ) {
      return;
    }

    if ( e.shiftKey ) /* shift + tab */ {
      if ( document.activeElement === classic_artificial_intelligence_firstFocusableEl ) {
        classic_artificial_intelligence_lastFocusableEl.focus();
        e.preventDefault();
      }
    } else /* tab */ {
      if ( document.activeElement === classic_artificial_intelligence_lastFocusableEl ) {
        classic_artificial_intelligence_firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  });
}

// scroll to top
jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 0) {
      jQuery('#button').fadeIn();
    } else {
      jQuery('#button').fadeOut();
    }
  });
  jQuery('#button').click(function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  classic_artificial_intelligence_search_focus();
  
});


// search
function classic_artificial_intelligence_search_focus() {

  /* First and last elements in the menu */
  var classic_artificial_intelligence_search_firstTab = jQuery('.serach_inner input[type="search"]');
  var classic_artificial_intelligence_search_lastTab  = jQuery('button.search-close'); /* Cancel button will always be last */

  jQuery(".search-open").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    jQuery('body').addClass("search-focus");
    classic_artificial_intelligence_search_firstTab.focus();
  });

  jQuery("button.search-close").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    jQuery('body').removeClass("search-focus");
    jQuery(".search-open").focus();
  });

  /* Redirect last tab to first input */
  classic_artificial_intelligence_search_lastTab.on('keydown', function (e) {
    if (jQuery('body').hasClass('search-focus'))
    if ((e.which === 9 && !e.shiftKey)) {
      e.preventDefault();
      classic_artificial_intelligence_search_firstTab.focus();
    }
  });

  /* Redirect first shift+tab to last input*/
  classic_artificial_intelligence_search_firstTab.on('keydown', function (e) {
    if (jQuery('body').hasClass('search-focus'))
    if ((e.which === 9 && e.shiftKey)) {
      e.preventDefault();
      classic_artificial_intelligence_search_lastTab.focus();
    }
  });

  /* Allow escape key to close menu */
  jQuery('.serach_inner').on('keyup', function(e){
    if (jQuery('body').hasClass('search-focus'))
    if (e.keyCode === 27 ) {
      jQuery('body').removeClass('search-focus');
      classic_artificial_intelligence_search_lastTab.focus();
    };
  });
}

// slider
jQuery(document).ready(function() {
  jQuery('#slider-cat .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav:false,
    dots:true,
    rtl:false,
    items: 1,
    autoplay:true,
  })
});

// slider title hightlight
jQuery(document).ready(function($) {
    $('#slider-cat h1 a').each(function() {
        var $this = $(this);
        var words = $this.text().split(' ');

        if (words.length > 3) {
            words[1] = '<span class="highlight">' + words[1] + '</span>';
            words[2] = '<span class="highlight">' + words[2] + '</span>';
            words[3] = '<span class="highlight">' + words[3] + '</span>';
            $this.html(words.join(' '));
        }
    });
});

