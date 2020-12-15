/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');
		var	Places = [];

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});


	  	$(".im").click(function(event) {
        	srcid = (event.target.id);
        	var tmp = Places.length; 
        	if (tmp < 4){
	        	Places.push(srcid);
	        	var tmpsrc = ("BtnPos"+(tmp+1).toString());
				document.getElementById(tmpsrc).src = "src/"+srcid+".png";		
				console.log(Places);
        	}
		});

	  	$(".cn").click(function(event) {
        	source = (event.target.src);
        	var tmp = Places.length; 
        	if (tmp > 0){
	        	var tmpsrc = ("BtnPos"+(tmp).toString());
				document.getElementById(tmpsrc).src = "src/Casilla01.png";		
	        	Places.pop(source);
				console.log(Places);
        	}
		});


	var audionameslist = "audiolib/1.mp3,audiolib/2.mp3,audiolib/3.mp3";
    var audionamesarray = audionameslist.split(',');
    var audio = new Audio(audionamesarray[0]);

    audio.src=audionamesarray[0];
    audio.play();

    index=0;
    audio.onended = function() {
    if(index < audionamesarray.length){
        audio.src=audionamesarray[index+1];
        audio.play();
        index++;
        }
    };

});