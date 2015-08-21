$(document).ready(function(){

	$("#closeBtn").click( function(){

		$("#lightbox").fadeOut( 300 );

	} );

	$("#openLightbox").click( function(){

		$("#lightbox").fadeIn( 300 );

	});


	$("img").click( function(){

		var picturePath = $(this).attr("src");
		// console.log( $(this).attr("src") );
		// console.log( $(this).attr("id") );
		// console.log( $(this).attr("name") );

		$("#lightbox").fadeIn( 300 );

		$("#lightBoxContentBox div").html( "<img src='" + picturePath + "' class='lb_img'/>" )

	} );
});