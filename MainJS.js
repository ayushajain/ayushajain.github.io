var h = $(window).height();
var w = $(window).width();


$("svg").attr("width", w);
$("svg").attr("height", h);

$("#test").hover(
	function(){
		var opacity = $(this).css("opacity");
		if(opacity > 0.5){
			$(this).attr("r", 40).fadeIn();
		}
	},
	function(){
		var opacity = $(this).css("opacity");
		if(opacity > 0.5){
			$(this).attr("r", 30).fadeIn();
		}
	}
);

$(window).on('resize', function(){
	h = $(window).height();
	w = $(window).width();
	$("svg").attr("width", w);
	$("svg").attr("height", h);
});

