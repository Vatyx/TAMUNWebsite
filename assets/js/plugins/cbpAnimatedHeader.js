/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 200;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.remove( header, 'navbar-expanded' );
			$('#topLogoBlack').fadeOut(200);
	        $('#topLogoWhite').fadeIn(200);

	        $('#navList li a').each(function() {
	        	$(this).css('color', 'white');
	        });
		}
		else {
			classie.add( header, 'navbar-expanded' );
			$('#topLogoWhite').fadeOut(200);
	        $('#topLogoBlack').fadeIn(200);

	        $('#navList li a').each(function() {
	        	$(this).css('color', 'black');
	        });
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();