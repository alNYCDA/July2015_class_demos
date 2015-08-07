$(document).ready(function(){

	$("#topDIV").animate({
		top:"-=150px"
	}, 3000);

	$("#bottomDIV").animate({
		bottom:"-=150px"
	}, 3000);

	$("#socialIcons img").click(function(){
		var tik = 0;

		var myObj = $(this);

		//console.log(tik);
		
		var timer = setInterval( function(){


			if(tik >= 360){
				tik = 0;
			}else{
				tik++;
			}

			rotationAnimation( myObj, tik )

		}, 12/1000);
		 

	});

	function rotationAnimation( obj, degrees ){

		$(obj).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'})

	}

});
