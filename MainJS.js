var height = $(window).height();

$(".home").css("height", height.toString());
$(".name").css("padding-top", mid.toString());
$( window ).resize(function() {
	height = $(window).height();
	var mid = Math.round(height/2);
	alert(mid);
	$(".home").css("height", height.toString());
	$(".name").css("padding-top", mid.toString());
});


//stellar