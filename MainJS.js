//height & width
var h = $(window).height();
var w = $(window).width();

//presize svgs
$("svg").attr("width", w);
$("svg").attr("height", h);

//fade out divs
$("#Proj1PreInfo").fadeOut();
$("#Proj2PreInfo").fadeOut();
$("#Proj3PreInfo").fadeOut();

//project hover methods
$("#P1Hover").hover(
	function(){
		var opacity = $("#Proj1C").css("opacity");
		if(opacity > 0.5){
			$("#Proj1C").attr("r", 35);
			$("#Proj1PreInfo").stop().fadeIn();
			$(this).attr("x", -500);
			$(this).attr("width", 690);
			$(this).attr("height", 880);
		}
	},
	function(){
		var opacity = $("#Proj1C").css("opacity");
		$("#Proj1C").attr("r", 30);
		$("#Proj1PreInfo").stop().fadeOut();
		$(this).attr("x", -31);
		$(this).attr("width", 60);
		$(this).attr("height", 60);
	}
);
$("#P2Hover").hover(
	function(){
		var opacity = $("#Proj2C").css("opacity");
		if(opacity > 0.5){
			$("#Proj2C").attr("r", 35);
			$("#Proj2PreInfo").stop().fadeIn();
			$(this).attr("x", -200);
			$(this).attr("width", 690);
			$(this).attr("height", 880);
		}
	},
	function(){
		var opacity = $("#Proj2C").css("opacity");
		$("#Proj2C").attr("r", 30);
		$("#Proj2PreInfo").stop().fadeOut();
		$(this).attr("x", -31);
		$(this).attr("width", 60);
		$(this).attr("height", 60);
	}
);
$("#P3Hover").hover(
	function(){
		var opacity = $("#Proj3C").css("opacity");
		if(opacity > 0.5){
			$("#Proj3C").attr("r", 35);
			$("#Proj3PreInfo").stop().fadeIn();
			$(this).attr("x", -310);
			$(this).attr("y", -840);
			$(this).attr("width", 690);
			$(this).attr("height", 880);
		}
	},
	function(){
		var opacity = $("#Proj3C").css("opacity");
		$("#Proj3C").attr("r", 30);
		$("#Proj3PreInfo").stop().fadeOut();
		$(this).attr("x", -31);
		$(this).attr("y", -30)
		$(this).attr("width", 60);
		$(this).attr("height", 60);
	}
);


//window resize
$(window).on('resize', function(){
	h = $(window).height();
	w = $(window).width();
	$("svg").attr("width", w);
	$("svg").attr("height", h);

});



//navbar scroll color
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if(scroll < 1920){
    	$("#ScrollingBar").attr("fill", "#3498db");
    	$("#ScrollBaseBar").attr("fill", "#3498db");
    	$("#MainBar").attr("fill", "#337FB1");
    }
    else if(scroll >= 1920 && scroll < 10000){
    	$("#ScrollingBar").attr("fill", "#e74c3c");
    	$("#ScrollBaseBar").attr("fill", "#e74c3c");
    	$("#MainBar").attr("fill", "#BE3D2F");
    }
});


//reset document position
// $('html, body').animate({
//     scrollTop: 0
// }, 100);

$(".portfolioredirect").click(function(){
	window.location.href = "http://ayushajain.com/portfolio"
})

//hover anchors
$('a').click(function(){
	var scrollTo = parseInt($(this).attr('href'), 10);
    $('html, body').stop().animate({
        scrollTop: scrollTo
    }, 1000);
    return false;
});
