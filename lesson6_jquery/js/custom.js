$(document).ready(function(){

	var isLightOn = true;

	$("#lightSwitch").click(function(){
		flipTheLightSwitch();
	});

	$("#ball").click(function(){
		var windowWidth = $(window).width();

		console.log(windowWidth)
		console.log( $("#ball").position() )

		if($("#ball").position().left <= windowWidth - 150 ){
			$("#ball").animate( {left:"+=100px"} );
		}else{
			$("#ball").animate( {left:"-=100px"} );
		}
	});


	function flipTheLightSwitch(){
		if(isLightOn){
			
			$("body").css("background", "black");
			$("#lightSwitch").val("Turn light On");
			$("#square").fadeOut(3000);
			isLightOn = false;
		}else{
			
			$("body").css("background", "yellow");
			$("#lightSwitch").val("Turn Light Off");
			$("#square").fadeIn(3000);
			isLightOn = true;
		}
	}
});