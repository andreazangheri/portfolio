var divMidHead = document.getElementById("div-mid-head");
var workList = document.getElementById("works-list");
var worksListAjax = document.getElementById("works-list-ajax");
var worksSection = document.getElementById("works-section");
var bottomMenu = document.getElementById("menu");
var menuXhttp = document.getElementById("menu-ul");
var back = document.getElementById("back");
var me = document.getElementById("meXhttp");

/* === PASSIVE EVENT LISTENER === */

jQuery.event.special.touchstart = {
	setup: function( _, ns, handle ){
		if ( ns.includes("noPreventDefault") ) {
			this.addEventListener("touchstart", handle, { passive: false });
		} else {
			this.addEventListener("touchstart", handle, { passive: true });
		}
	}
};

jQuery.event.special.onmousewheel = {
	setup: function( _, ns, handle ){
		if ( ns.includes("noPreventDefault") ) {
			this.addEventListener("onmousewheel", handle, { passive: false });
		} else {
			this.addEventListener("onmousewheel", handle, { passive: true });
		}
	}
};

/* === MOBILE TOUCH - NO-TOUCH === */

$(document).ready(function() {
	if ("ontouchstart" in document.documentElement) {
		$('.no-touch').removeClass('no-touch').addClass('touch')
	}
	$('.touch').on('touchstart touchend', function(e) {
		$(this).toggleClass('over');
	});
})

/* === LOADER === */

$body = $("body");
$(document).on({
	ajaxStart: function() { $body.addClass("loading");},
	ajaxStop: function() { $body.removeClass("loading");}
});

/* === RANDOM WORK === */

var myfirsRequest = new XMLHttpRequest();

if (window.XMLHttpRequest) {
		myfirstRequest = new XMLHttpRequest();
	} else {
		myfirstRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

myfirstRequest.open('GET', 'https://www.typerror.altervista.org/js/data.json');

myfirstRequest.onloadend = function() {
	var data = JSON.parse(myfirstRequest.responseText);
	
		/* === Render Data === */
		
		rendermeHTML(data);
		rendermenuHTML(data);
		renderRandomHTML(data);
	};
	
myfirstRequest.send();

Handlebars.registerHelper('encode', function(context){
		return new Handlebars.SafeString(context);
});

Handlebars.registerHelper('random', function(context, options){
	var e = Math.floor(Math.random() * (context.length)); //numero progetti
	var r = options.fn(context[e]);
	return r;
});
			
/* === ME === */
			
var meEvento = function meEvento(){
    $.get('https://www.typerror.altervista.org/js/data.json');
	$("#mid-head").empty();
	$("#works").empty();
	$("#works-ajax").empty();
	$("#menu-ul").empty();
	var myRequest = new XMLHttpRequest();
	
	if (window.XMLHttpRequest) {
		myRequest = new XMLHttpRequest();
	} else {
		myRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
			   
	myRequest.open('GET', 'https://www.typerror.altervista.org/js/data.json');
			
	myRequest.onloadend = function() {
		var data = JSON.parse(myRequest.responseText);
		
		/* === Render Data === */
		
		rendermeHTML(data);
		rendermenuHTML(data);
		renderRandomHTML(data);
		
		/* === Show Content === */
				
		back.classList.remove("show");
		divMidHead.classList.remove("hide");
		bottomMenu.classList.remove("hide");
		workList.classList.remove("hide");
		worksListAjax.classList.remove("show");
		worksListAjax.classList.remove("fixed");
		worksListAjax.classList.remove("relative");
		worksSection.classList.remove("show");
		menuXhttp.classList.remove("hide");
		
		back.classList.add("hide");
		divMidHead.classList.add("show");
		bottomMenu.classList.add("show");
		workList.classList.add("show");
		worksListAjax.classList.add("hide");
		worksSection.classList.add("hide");
		menuXhttp.classList.add("show");
		}
				
	myRequest.send();
	
	
Handlebars.registerHelper('encode', function(context){
		return new Handlebars.SafeString(context);
});
	
	Handlebars.registerHelper('random', function(context, options){
	var e = Math.floor(Math.random() * (context.length)); //numero progetti
	var r = options.fn(context[e]);
	return r;
	});
			
	};
			
/* === PROGETTI === */
			
	var progettiEvento = function progettiEvento(){
    $.get('https://www.typerror.altervista.org/js/data.json');
	$("#mid-head").empty();
	$("#works").empty();
	$("#works-ajax").empty();
	$("#menu-ul").empty();
	$('#meXhttp').prop("onclick", null);
	$('#meXhttp').removeAttr("onclick");
	$('#meXhttp').prop("onclick",' meEvento()');
	$('#meXhttp').attr("onclick",' meEvento()');
	$('#back').prop("onclick", null);
	$('#back').removeAttr("onclick");
	$('#back').prop("onclick",' meEvento()');
	$('#back').attr("onclick",' meEvento()');
		
	var xhttp;
	
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.open("GET", "https://www.typerror.altervista.org/js/data.json");
				
	xhttp.onerror = function(){
	console.log("Connection error");
	};
				
  	xhttp.send();
				
	xhttp.onloadend = function(){
					
	var data = JSON.parse(xhttp.responseText);
					
		/* === Render Data === */
		
	renderHTML(data);
		
		/* === Show Content === */
				
	back.classList.remove("hide");
	divMidHead.classList.remove("show");
	bottomMenu.classList.remove("show");
	workList.classList.remove("show");
	worksListAjax.classList.remove("hide");
	worksListAjax.classList.remove("fixed");
	worksSection.classList.remove("show");
				
	back.classList.add("show");
	divMidHead.classList.add("hide");
	bottomMenu.classList.add("hide");
	workList.classList.add("hide");
	worksListAjax.classList.add("show");
	worksListAjax.classList.add("relative");
	worksSection.classList.add("hide");
	}
};

/* === PROGETTI BACK === */


			
/* === LAVORI === */
			
var lavoriEvento = function lavoriEvento(){
back.classList.remove("show");
back.classList.add("hide");
$.get('https://www.typerror.altervista.org/js/data.json');		
$("#works-ajax").empty();
$('#meXhttp').prop("onclick", null);
$('#meXhttp').removeAttr("onclick");
$('#meXhttp').prop("onclick", 'progettiEvento()');
$('#meXhttp').attr("onclick", 'progettiEvento()');
$('#back').prop("onclick", null);
$('#back').removeAttr("onclick");
$('#back').prop("onclick", 'progettiEvento()');
$('#back').attr("onclick", 'progettiEvento()');
var xhttp;
var currentID = event.target.id;
//console.log(currentID);
	
	worksSection.classList.add("hide");
	back.classList.remove("hide");
	
if (window.XMLHttpRequest) {
	xhttp = new XMLHttpRequest();
} else {
	xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
	xhttp.open("GET", "https://www.typerror.altervista.org/js/data.json");
			
	xhttp.onloadend = function(){
		
		/* === Parse Data === */
		
	var data = JSON.parse(xhttp.responseText);
		renderNextHTML(data);
		var i;
		var imgContainer = document.querySelector('#image-container');
		var container = imgContainer.querySelectorAll('.container');
		
		for ( i = 0; i < container.length; i++){
		container[i].classList.add('is-loading');
		//console.log(container);
		}
		for ( i = 0; i < container.length; i++){
		var img = container[i].querySelectorAll('img');
		img[0].classList.add('hide');
		//console.log(img);
		}
		
		new imagesLoaded(imgContainer, function(instance) {
			for (i = 0; i < container.length; i++ ) {
			container[i].classList.remove('is-loading');
			var img = container[i].querySelectorAll('img');
			img[0].classList.remove('hide');
			img[0].classList.add('show');
			}
		});
	
		worksSection.classList.remove('hide');
		//worksListAjax.classList.remove("relative");
		worksListAjax.classList.remove('show');
		divMidHead.classList.remove('show');
		workList.classList.remove('show');
		menuXhttp.classList.remove('show');
	
		//worksListAjax.classList.add("fixed");
		worksSection.classList.add('show');
		worksListAjax.classList.add('hide');
		divMidHead.classList.add('hide');
		workList.classList.add('hide');
		menuXhttp.classList.add('hide');
		window.scrollTo(0,0);
		
};
	
	xhttp.send();
				
	Handlebars.registerHelper('custom', function(context, options){
		var r = options.fn(context[currentID]);
		return r;
		//console.log(currentID);
	});
}
			
function renderHTML(data) {
	var rawTemplate = document.getElementById('progetti-template').innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var worksAjax = document.getElementById('works-ajax');
	worksAjax.innerHTML = ourGeneratedHTML;
}	

function rendermeHTML(data) {
	var rawTemplate = document.getElementById('me-template').innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var meAjax = document.getElementById('mid-head');
	meAjax.innerHTML = ourGeneratedHTML;
}
	
function renderRandomHTML(data) {
	var rawTemplate = document.getElementById('random-template').innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var randomAjax = document.getElementById('works');
	randomAjax.innerHTML = ourGeneratedHTML;
}
			
function rendermenuHTML(data) {
	var rawTemplate = document.getElementById('menu-template').innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var menuAjax = document.getElementById('menu-ul');
	menuAjax.innerHTML = ourGeneratedHTML;
}
				
function renderNextHTML(data) {
	var rawTemplate = document.getElementById('works-template').innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var workSection = document.getElementById('works-section');
	workSection.innerHTML = ourGeneratedHTML;
}