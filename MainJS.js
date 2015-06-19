var h = $(window).height();
var w = $(window).width();

$("svg").attr("width", w);
$("svg").attr("height", h);

$(window).on('resize', function(){
	h = $(window).height();
	w = $(window).width();
	$("svg").attr("width", w);
	$("svg").attr("height", h);
});
