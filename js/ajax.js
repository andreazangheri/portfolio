			var worksContainer = document.getElementById("works-ajax");
			var worksXhttp = document.getElementById("worksXhttp");
			var divMidHead = document.getElementById("div-mid-head");
			var worksRandom = document.getElementById("works");
			var workList = document.getElementById("works-list");
			var worksListAjax = document.getElementById("works-list-ajax");
			var worksSection = document.getElementById("works-section");
			var bottomMenu = document.getElementById("menu");
			var menuNext = document.getElementById("menu-next");
			var meXhttp = document.getElementById("meXhttp");
			var menuXhttp = document.getElementById("menu-ul");
				
			/*=== . RANDOM WORK ===*/

			var myRequest = new XMLHttpRequest();
			myRequest.open('GET', 'https://www.typerror.altervista.org/js/data.json');
			myRequest.onload = function() {
				var data = JSON.parse(myRequest.responseText);
				renderRandomHTML(data);
			};
			
			myRequest.send();
			
			Handlebars.registerHelper('random', function(context, options){
					var e = Math.floor(Math.random() * (context.length)); //numero progetti
					var r = options.fn(context[e]);
					return r;
				});
			
			function renderRandomHTML(data) {
				var rawTemplate = document.getElementById("random-template").innerHTML;
				var compiledTemplate= Handlebars.compile(rawTemplate);
				var ourGeneratedHTML = compiledTemplate(data);
				
				var randomAjax = document.getElementById("works");
				randomAjax.innerHTML = ourGeneratedHTML;
			}
			
			/*=== ME ===*/
			
			meXhttp.addEventListener("click", function() {
				myRequest;
			   
				myRequest.open('GET', 'https://www.typerror.altervista.org/js/data.json');
				myRequest.onload = function() {
				var data = JSON.parse(myRequest.responseText);
				rendermeHTML(data);
				renderRandomHTML(data);
				};
				
				myRequest.send();
				
				divMidHead.classList.remove("hide");
				bottomMenu.classList.remove("hide");
				workList.classList.remove("hide");
				worksListAjax.classList.remove("show");
				worksListAjax.classList.remove("fixed");
				worksSection.classList.remove("show");
				
				divMidHead.classList.add("show");
				bottomMenu.classList.add("show");
				workList.classList.add("show");
				worksListAjax.classList.add("hide");
				worksSection.classList.add("hide");
			
			});
			
			function rendermeHTML(data) {
				var rawTemplate = document.getElementById("me-template").innerHTML;
				var compiledTemplate= Handlebars.compile(rawTemplate);
				var ourGeneratedHTML = compiledTemplate(data);
				
				var meAjax = document.getElementById("mid-head");
				meAjax.innerHTML = ourGeneratedHTML;
			}
			
			/* === PROGETTI === */
			
			worksXhttp.addEventListener("click", function() {
				var xhttp;
	
			if (window.XMLHttpRequest) {
				xhttp = new XMLHttpRequest();
				} else {
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				xhttp.open("GET", "https://www.typerror.altervista.org/js/data.json");
				xhttp.onload = function() {
				var data = JSON.parse(xhttp.responseText);
					
			
				renderHTML(data);
			};
				
				xhttp.onerror = function(){
					console.log("Connection error");
				};
				
  				xhttp.send();
				
				xhttp.onloadend = function(){
				
				divMidHead.classList.remove("show");
				bottomMenu.classList.remove("show");
				workList.classList.remove("show");
				worksListAjax.classList.remove("hide");
				worksListAjax.classList.remove("fixed");
				worksSection.classList.remove("show");
				//menuNext.classList.remove("hide"); progetti bottone
				
				divMidHead.classList.add("hide");
				bottomMenu.classList.add("hide");
				workList.classList.add("hide");
				worksListAjax.classList.add("show");
				worksSection.classList.add("hide");
				//menuNext.classList.add("show"); progetti bottone
				}
			});
			
			function renderHTML(data) {
				var rawTemplate = document.getElementById("progetti-template").innerHTML;
				var compiledTemplate= Handlebars.compile(rawTemplate);
				var ourGeneratedHTML = compiledTemplate(data);
				
				var worksAjax = document.getElementById("works-ajax");
				worksAjax.innerHTML = ourGeneratedHTML;
			}	
			
			/* === LAVORI === */
			
			var lavoriEvento = function lavoriEvento(){
				var xhttp;
				var currentID = event.target.id;
				console.log(currentID);
	
			if (window.XMLHttpRequest) {
				xhttp = new XMLHttpRequest();
				} else {
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				xhttp.open("GET", "https://www.typerror.altervista.org/js/data.json");
				xhttp.onload = function() {
				var data = JSON.parse(xhttp.responseText);
				renderNextHTML(data);
				}
				xhttp.send();
				
				xhttp.onloadend = function(){
				
				worksListAjax.classList.add("fixed");
				worksSection.classList.add("show");
					}
				
				Handlebars.registerHelper('custom', function(context, options){
					var r = options.fn(context[currentID]);
					return r;
					console.log(currentID);
				});
				
				function renderNextHTML(data) {
				var rawTemplate = document.getElementById("works-template").innerHTML;
				var compiledTemplate= Handlebars.compile(rawTemplate);
				var ourGeneratedHTML = compiledTemplate(data);
				
				var workSection = document.getElementById("works-section");
				workSection.innerHTML = ourGeneratedHTML;
			}
			}
			