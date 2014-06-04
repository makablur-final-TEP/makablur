$(function(){
    	$(".rslides").responsiveSlides({
  			auto: true,             /* Boolean: Animate automatically, true or false*/
  			speed: 400,            /* Integer: Speed of the transition, in milliseconds*/
  			timeout: 2000,          /* Integer: Time between slide transitions, in milliseconds*/
  			pager: true,           /* Boolean: Show pager, true or false*/
  			nav: true,             /* Boolean: Show navigation, true or false*/
  			random: false,          /* Boolean: Randomize the order of the slides, true or false*/
  			pause: true,           /* Boolean: Pause on hover, true or false*/
  			pauseControls: true,    /* Boolean: Pause when hovering controls, true or false*/
			prevText: "Anterior",   /* String: Text for the "previous" button*/
  			nextText: "Siguiente",       /* String: Text for the "next" button*/
  			namespace: "rslides",   /* String: Change the default namespace used*/
	  		before: function(){},   /* Function: Before callback*/
  			after: function(){},     /* Function: After callback */
			});
  		});