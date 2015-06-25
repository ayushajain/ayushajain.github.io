var h = $(window).height();
var w = $(window).width();


$("svg").attr("width", w);
$("svg").attr("height", h);

//fade out divs
$("#Proj1PreInfo").fadeOut();




$("#Proj1C").hover(
	function(){
		var opacity = $(this).css("opacity");
		if(opacity > 0.5){
			$(this).attr("r", 40).fadeIn();
			$("#Proj1PreInfo").fadeIn();
		}
	},
	function(){
		var opacity = $(this).css("opacity");
		if(opacity > 0.5){
			$(this).attr("r", 30).fadeIn();
			$("#Proj1PreInfo").fadeOut();
		}
	}
);

$(window).on('resize', function(){
	h = $(window).height();
	w = $(window).width();
	$("svg").attr("width", w);
	$("svg").attr("height", h);
});

