"use strict";

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

const VERTICAL_OFFSET = 100;
const HORIZONTAL_OFFSET = -39;

const IMAGE_WIDTH = 270;
const IMAGE_HEIGHT = 250;
const VIEWBOX_WIDTH = 900;
const HORIZONTAL_MARGIN = 0;
const VERTICAL_MARGIN = -97;

var PROJECTS = {
	dexto: {
		title: "Dexto",
		url: "dexto.html",
		img: "img/dexto.png",
		description: "Dexto is a revolutionary application that makes configuring gestures with the Myo easy. Using various algorithms we figured out how to track finger movements...",
	},
	istitch: {
		title: "iStitch",
		url: "istitch.html",
		img: "img/istitch2.png",
		description: "iStitch is a image processing system for corneal nerve quantification. It stitches images and videos into montages using the OpenCV stitching algorithm and..."
	},
	fireauth: {
		title: "FireAuth",
		url: "https://github.com/FireAuth/FireAuth",
		img: "img/fireauth.png",
		description: "FireAuth is a firebase wrapper that manages all the authentication in a Firebase application. The wrapper has a many simple methods which make firebase authentication simple."
	},
	techlab: {
		title: "Techlab Website",
		url: "techlab-website.html",
		img: "img/techlab.png",
		description: "I contributed to the creation of the Techlab website during my internship at Techlab Education. I collaborated with other interns to improve the user experience and make the entire website beautiful and usable."
	},
	firecrud: {
		title: "FireCRUD",
		url: "https://github.com/ayushajain/FireCRUD",
		img: "img/firecrud.png",
		description: "FireCRUD is an open source library for making CRUDs with Firebase. By refrencing the firebase branch url and passing in an object that defines the table structure a full user CRUD screen is created."
	},
	teaching: {
		title: "Teaching at Techlab",
		url: "techlab-teaching.html",
		img: "img/teaching.JPG",
		description: "During the summer of 2015, I worked as an intern for Techlab Education. I worked with kids of all ages and taught them how to program in various languages such as javascript and python. I also helped taught the web dev classes..."
	},
	gba: {
		title: "Gameboy Advanced Emulator",
	},
	dankripplz: {
		title: "DankRipplz",
		url: "dankripplz.html",
		img: "img/dankripplz.png",
		description: "DankRipplz was a fun minigame created using D3.js by myself and another Techlab intern. It was a fun project we created within the span of 2-3 hours without any prior knowledge of D3..."
	},
	aquaponics: {
		title: "Aquaponics",
		url: "aquaponics.html",
		img: "img/aqua.jpg",
		description: "The Aquaponics Project was a DIY aquaponics system that is meant to operate without human interferance. It was created to minimize water usage since California was in a drought."
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

var numPerRow = (VIEWBOX_WIDTH  - HORIZONTAL_MARGIN)/IMAGE_WIDTH;
var grid = "";
var numRows = Math.floor(Object.keys(PROJECTS).length / numPerRow);
var projectKeys = Object.keys(PROJECTS);
var currProject = 0;

var IMAGE_VERT_OFFSET = -44;
var IMAGE_HORI_OFFSET = 11;

for(var j = 0; j < numRows + 1;j++){
	for(var i = 0; i <= numPerRow; i++){
		if(currProject < projectKeys.length){
			var img = PROJECTS[projectKeys[currProject]].img;
			if(typeof img === 'undefined')
				img = "http://placehold.it/700x400";

			console.log(PROJECTS[projectKeys[currProject]].title)

			grid += '<a xlink:href="http://google.com">';
			//grid += '<rect width="270" height="185" transform="translate(' + (HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')" style="fill: #EBEFF0;stroke-width:2;stroke:#434a54" />';
			grid += '<image transform="translate(' + (IMAGE_HORI_OFFSET + HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (IMAGE_VERT_OFFSET + VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')" width="' + IMAGE_WIDTH + '" height="' + IMAGE_HEIGHT + '" xlink:href="' + img + '"></image>';
			grid += '<image transform="translate(' + (IMAGE_HORI_OFFSET + HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (IMAGE_VERT_OFFSET + VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')" width="' + IMAGE_WIDTH + '" height="' + IMAGE_HEIGHT + '" xlink:href="img/Gradient.png"></image>';
			grid += '<text class="portfolio-text" transform="translate(' + (15 + HORIZONTAL_OFFSET + i * IMAGE_WIDTH + (i * HORIZONTAL_MARGIN / numPerRow)) + ', ' + (149 + VERTICAL_OFFSET + IMAGE_HEIGHT * j + j * VERTICAL_MARGIN) + ')">' +  PROJECTS[projectKeys[currProject]].title + '</text>'
			grid += '</a>';
		}
		currProject++;
	}
}


$("#portfolio-grid").html(grid);
