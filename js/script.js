$(document).ready(function()
{
	setInterval(function () {$('#back').fadeOut();}, 1000);
})
$('#topLogoWhite').hide();
//setInterval(function () {$('#back').fadeOut();}, 3000);

$('#top').parallax({imageSrc: 'images/smallerbackground.png'});
$('#second-top').parallax({imageSrc: 'images/topbackground.png'});
$('#third-top').parallax({imageSrc: 'images/scrollingbackground2fixed.jpg'});

var startY = $('.navbar').height() * 2;
var hasChanged = false;
function checkScroll(){
     //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
	    if(!hasChanged)
	    {   
	        $('.navbar').addClass("scrolled");
	        $('#topLogoBlack').fadeOut(200);
	        $('#topLogoWhite').fadeIn(200);

	        $('#navList li a').each(function() {
	        	$(this).css('color', 'white');
	        });
			
			hasChanged = true;
		}
    	}else{
	        $('.navbar').removeClass("scrolled");
	        $('#topLogoWhite').fadeOut(200);
	        $('#topLogoBlack').fadeIn(200);

	        $('#navList li a').each(function() {
	        	$(this).css('color', 'black');
	        });
	        hasChanged = false;
    	}
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

// var jumboHeight = $('#top').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     console.log(scrolled);
//     $('#top').css('height', (jumboHeight-scrolled) + 'px');
// }

// $(window).scroll(function(e){
//     parallax();
//     console.log("test");
// });