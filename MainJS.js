var h = $(window).height();
var w = $(window).width();


$("svg").attr("width", w);
$("svg").attr("height", h);

//fade out divs
$("#Proj1PreInfo").fadeOut();


$("#P1Hover").hover(
	function(){
		var opacity = $("#Proj1C").css("opacity");
		if(opacity > 0.5){
			$("#Proj1C").attr("r", 35);
			$("#Proj1PreInfo").fadeIn();
			$(this).attr("x", -500);
			$(this).attr("width", 690);
			$(this).attr("height", 880);
		}
	},
	function(){
		var opacity = $("#Proj1C").css("opacity");
		if(opacity > 0.5){
			$("#Proj1C").attr("r", 30);
			$("#Proj1PreInfo").fadeOut();
			$(this).attr("x", -31);
			$(this).attr("width", 60);
			$(this).attr("height", 60);
		}
	}
);

$(window).on('resize', function(){
	h = $(window).height();
	w = $(window).width();
	$("svg").attr("width", w);
	$("svg").attr("height", h);
});

