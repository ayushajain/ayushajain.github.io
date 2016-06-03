"use strict";

$("#scene2").delay(500).queue(function (next) {
	$(this).css('opacity', '1');
	next();
});

//height & width
var h = $(window).height();
var w = $(window).width();

//presize svgs
$("svg").attr("width", w);
$("svg").attr("height", h);
$("#scene2").attr("height", h);


//window resize
$(window).on('resize', function(){
	h = $(window).height();
	w = $(window).width();
	$("svg").attr("width", w);
	$("svg").attr("height", h);
	$("#scene2").attr("height", h);

});

$(".nav").hide().delay(1000).fadeIn(2000);
$("#scroll-down").hide().delay(1000).fadeIn();

//scroll to scene x
$("ul.topnav > li").click(function(){
	var scrollOffset = $(this).attr('scroll');
	var scrollTime = Math.abs(scrollOffset - document.body.scrollTop);

	$('html, body').animate({
		scrollTop: scrollOffset
	}, 1000);
});

$(window).on('mousewheel', function(){
	//code that will only fire on manual scroll input
	$('html, body').stop();
});

//navbar scroll color
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

	//hide scroll-down arrow once user scrolls down
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


var PROJECTS = {
	dexto: {
		title: "Dexto",
		url: "dextolabs.github.io",
		github: "github.com/dextolabs/dextolabs.github.io",
		img: "img/dexto.png",
		description: "Dexto is a program that utilizes the    Bayesian Classifier Algorithm to       determine the user's hand movments/    gestures and relays this into a 3D     model. Dexto won the Myo award and 2nd place for the Autodesk award at        AngelHack 2015.",
	},
	istitch: {
		title: "iStitch",
		url: "istitch.github.io",
		github: "github.com/istitch/istitch.github.io",
		img: "img/istitch2.png",
		description: "iStitch is a image processing system forcorneal nerve quantification. It       stitches images and videos into using  the OpenCV stitching algorithm and alsoutilizes various algorithms to         vectorize the retina and determine the presence of diabetes."
	},
	fireauth: {
		title: "FireAuth",
		github: "github.com/FireAuth/FireAuth",
		img: "img/fireauth.png",
		description: "FireAuth is a firebase wrapper that     manages all the authentication in a    Firebase application. The wrapper has  many methods which make firebase       authentication easy to implement for   NodeJS and the browser."
	},
	techlab: {
		title: "Techlab Website",
		url: "techlab.education",
		img: "img/techlab.png",
		description: "I contributed to the creation of the    Techlab website during my internship atTechlab Education. I collaborated with other interns to improve the user      experience and make the entire website appealing and usable."
	},
	firecrud: {
		title: "FireCRUD",
		url: "github.com/ayushajain/FireCRUD",
		img: "img/firecrud.png",
		description: "FireCRUD is an open source library for  making CRUDs with Firebase. By         referencing the Firebase branch url,    and passing in an object that defines the table structure, a full user CRUD  screen is created."
	},
	teaching: {
		title: "Teaching at Techlab",
		url: "ayushajain.com/timeline",
		img: "img/teaching.JPG",
		description: "During the summer of 2015, I worked as  an intern for Techlab Education. I     worked with kids of all ages and taughtthem how to program in various         languages such as Python and Java. I   also helped lead the web development,  arduino and IOT classes."
	},
	gba: {
		title: "Gameboy Advanced Emulator",
		url: "ayushajain.com/gba",
		github: "github.com/ayushajain/gba",
		img: "img/gba.png",
		description: "GBA is a javascript based Gameboy        Advanced Emulator. After compiling    multiple open-source javascript        libraries for the Gameboy, I was able  to create a fully-functional emulator  that saves games."
	},
	dankripplz: {
		title: "DankRipplz",
		url: "dankripplz.com",
		img: "img/dankripplz.png",
		description: "DankRipplz was a fun minigame created   using D3.js by myself and another      Techlab intern. It was a fun project we created within the span of 2-3 hours  without any prior knowledge of D3."
	},
	aquaponics: {
		title: "Aquaponics",
		url: "ayushajain.com/timeline",
		img: "img/aqua.jpg",
		description: "The Aquaponics Project was a DIY        aquaponics system that is meant to     operate without human interferance. It was created to minimize water usage    because of the drought."
	},
	// dankchains: {
	// 	title: "DankChains",
	// 	url: "dankchains.html",
	// 	img: "img/dankchains.png",
	// 	description: "DankChains is a game concept that I have been planning to work on. So far, I have created an engine for the game and I am currently working on switching from Firebase to some sort of RTC or WebSocket"
	// },
	// peered: {
	// 	title: "PeerEd",
	// 	url: "http://ayushajain.com/PeerEd",
	// 	img: "",
	// 	description: "PeerEd was the project I worked on in a Hackathon. During TeenHacks, my team and I created PeerEd to help students recieve feedback on their writing. For most of us, this was our first hackathon..."
	// }
}

const VERTICAL_OFFSET = 56;
const HORIZONTAL_OFFSET = -38;

const IMAGE_WIDTH = 270;
const IMAGE_HEIGHT = 250;
const VIEWBOX_WIDTH = 900;
const HORIZONTAL_MARGIN = 0;
const VERTICAL_MARGIN = -97;

var numPerRow = (VIEWBOX_WIDTH  - HORIZONTAL_MARGIN)/IMAGE_WIDTH;
var grid = "";
var numRows = Math.floor(Object.keys(PROJECTS).length / numPerRow);
var projectKeys = Object.keys(PROJECTS);
var currProject = 0;


var gridPos = [];
for(var j = 0; j < numRows + 1;j++){
	for(var i = 0; i <= numPerRow; i++){
		if(currProject < projectKeys.length){
			var img = typeof PROJECTS[projectKeys[currProject]].img === 'undefined' ? "http://placehold.it/700x400": PROJECTS[projectKeys[currProject]].img;
			var convertedDesc = '<tspan x="0" dy="1.2em">';

			if(typeof PROJECTS[projectKeys[currProject]].img !== 'undefined') {
				for (var x = 0; x < PROJECTS[projectKeys[currProject]].description.length; x++) {
					convertedDesc += PROJECTS[projectKeys[currProject]].description.charAt(x);
					if (x % 39 == 0 && x != 0)
						convertedDesc += '</tspan><tspan x="0" dy="1.2em">';
				}
			}
			var desc = '<text id="' + projectKeys[currProject] + '-description" style="fill: black" class="portfolio-text" transform="translate(' + (12 + HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (209 + VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')">' + convertedDesc;

			//project urls
			if(typeof PROJECTS[projectKeys[currProject]].url !== 'undefined')
				desc += '<tspan x="0" dy="1.2em">Project Page: ' + '<a style="fill: blue" xlink:href="http://' + PROJECTS[projectKeys[currProject]].url + '"> ' + PROJECTS[projectKeys[currProject]].url + '</a></tspan>';

			//github urls
			if(typeof PROJECTS[projectKeys[currProject]].github !== 'undefined')
				desc += '<tspan x="0" dy="1.2em">Github: ' + '<a style="fill: green" xlink:href="https://' + PROJECTS[projectKeys[currProject]].github + '"> ' + PROJECTS[projectKeys[currProject]].github + '</a></tspan>';

			desc += '</text>';
			//gridPos.push('<a xlink:href="http://google.com">');
			gridPos.push('<rect id="' + projectKeys[currProject] + '-hover" width="' +  270 + '" height="' + 154 + '" transform="translate(' + (HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (48 + VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')" style="fill: #EBEFF0;stroke-width:2;stroke:none" />' +
						desc +
						'<image transform="translate(' + (HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')" width="' + IMAGE_WIDTH + '" height="' + IMAGE_HEIGHT + '" xlink:href="' + img + '"></image>' +
						'<image transform="translate(' + (HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')" width="' + IMAGE_WIDTH + '" height="' + IMAGE_HEIGHT + '" xlink:href="img/Gradient.png"></image>' +
						'<text class="portfolio-text" transform="translate(' + (12 + HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (189 + VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')">' +  PROJECTS[projectKeys[currProject]].title + '</text>'+
						'<rect id="' + projectKeys[currProject] + '" width="' + 270 + '" height="' + 155 + '" transform="translate(' + (HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (48 + VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')" style="opacity: 0;fill: #EBEFF0;stroke-width:2;stroke:none" />');
			//gridPos.push('</a>';
		}
		currProject++;
	}
}

for(var i = gridPos.length - 1; i >= 0; i--)
	grid += gridPos[i];


currProject = 0;

//creating hitboxes
for(var j = 0; j < numRows + 1;j++) {
	for (var i = 0; i <= numPerRow; i++) {
		if (currProject < projectKeys.length) {
			var img = PROJECTS[projectKeys[currProject]].img;
			if (typeof img === 'undefined')
				img = "http://placehold.it/700x400";
			//grid += '<rect id="' + projectKeys[currProject] + '" width="' + 270 + '" height="' + 155 + '" transform="translate(' + (HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (48 + VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')" style="opacity: 0;fill: #EBEFF0;stroke-width:2;stroke:none" />';

			$("#" + $(this).attr("id") + "-description").hide();

			//hitbox selections
			$(document).on('mouseenter', ('#' + projectKeys[currProject]), function () {

				for (var project in projectKeys) {
					$("#" + projectKeys[project] + "-hover").stop().animate({
						'height': '154'
					}, 0);
					$("#" + projectKeys[project] + "-description").hide();
				}

				$("#" + $(this).attr("id") + "-hover").stop().animate({
					'height': '330'
				}, 200);

				$("#" + $(this).attr("id") + "-description").fadeIn();

			});

		}
		currProject++;
	}
}



$("#portfolio-grid").html(grid);

//hide descriptions
for(var i = 0; i < projectKeys.length; i++){
	$("#" + projectKeys[i] + "-description").hide();
}