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
		var posP = 0;
		var audioElement = $('#myAudio')[0];
		var playing = false;



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
			if(!playing) {
	        	srcid = (event.target.id);
	        	var tmp = Places.length; 
	        	if (tmp < 4){
		        	Places.push(srcid);
		        	var tmpsrc = ("BtnPos"+(tmp+1).toString());
					document.getElementById(tmpsrc).src = "src/"+srcid+".png";		
					console.log(Places);
	        	}
	        }
		});

	  	$(".cn").click(function(event) {
			if(!playing) {
	        	source = (event.target.src);
	        	var tmp = Places.length; 
	        	if (tmp > 0){
		        	var tmpsrc = ("BtnPos"+(tmp).toString());
					document.getElementById(tmpsrc).src = "src/Casilla01.png";		
		        	Places.pop(source);
	        	}
	        }
		});

		$('#myAudio').on('playing', function() {
		   playing = true;
		   // disable button/link
		});
		$('#myAudio').on('ended', function() {
		   playing = false;
			Places.shift();
			console.log(posP);
        	var tmp = Places.length; 
        	if (tmp > 0){
	        	var tmpsrc = ("BtnPos"+(posP).toString());
				document.getElementById(tmpsrc).src = "src/Casilla01.png";		
        	}
			console.log(Places);

			playNext();
		   // enable button/link
		});

		$(".pl").click(function (event) {
			playNext();
		});

	    function playNext()  
	    {  
			if(!playing) {

		   		if (Places.length > 0){
			      var oggVar = ("src/snd/"+Places[0] +".mp3");   
			      audioElement.setAttribute('src', oggVar); 
			      audioElement.play();
			      posP += 1;
		   		} else {
		   			posP = 0;
		   			Places = [];
					document.getElementById("BtnPos1").src = "src/Casilla01.png";		
					document.getElementById("BtnPos2").src = "src/Casilla01.png";		
					document.getElementById("BtnPos3").src = "src/Casilla01.png";		
					document.getElementById("BtnPos4").src = "src/Casilla01.png";		
		   		}
			}  
		}
});