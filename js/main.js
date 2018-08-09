let enti = [];

let ambiente;

const colori = [['rgba(255, 0, 104, 0.5)', 'rgba(255, 199, 0, 0.5)', 'rgba(255, 112, 0, 0.5)','rgba(148, 255, 0, 0.5)','rgba(174, 0, 255, 0.5)','rgba(132, 114, 140, 0.5)','rgba(63, 184, 191, 0.25)','rgba(63, 99, 191, 0.5)'],];

let colore;

//let attrae;

let G = 1;

const maxSplice = 100;

const eMin = 0.05;

const eMax = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colore = random(colori);
	
	/*for (let i = 0; i < 100; i++) {
   enti[i] = new Ente(random(0.1, 6), random(width), random(height));
 }*/
	
  //attrae = new Attractor(); //
}

class Ente {
  constructor(m, x, y) {
    this.massa = m;
    this.posizione = createVector(x, y);
    this.velocità = createVector(0, 0);
    this.accelerazione = createVector(0, 0);
	let col = random(colore);
	const durata = 20; // ==========
  var value = 0;
  var fattore = 1.5;
  var target = m;
  var over = target * fattore;
  var easing = 0.05;
  
  var inc = setInterval(exec, durata);
  var dec;
  
  function exec(){
  	if(ceil(value) >= over){
  		clearInterval(inc);
  		dec = setInterval(decr, durata);
  	}else{
	      //value++;
	      value += easing * (over - value);
	  }
	}
	function decr(){
		if(ceil(value) <= target){
			clearInterval(dec);
		}else{
			value -= easing * (value -target);
		}
	}
	this.vedi = function(){
		 noStroke();
		 fill(col);
		 ellipse(this.posizione.x, this.posizione.y, value* 16, value * 16);
		
	}
  }
// =========
  applicaForza(forza) {
    let f = p5.Vector.div(forza, this.massa);
    this.accelerazione.add(f);
  }

  aggiorna() {
    this.velocità.add(this.accelerazione);
    this.posizione.add(this.velocità);
    this.accelerazione.mult(0);
  }

  calcolaAttrazionne(m) {
    let forza = p5.Vector.sub(this.posizione, m.posizione);  // Calcolo direzione forza
    let distanza = forza.mag(); // Distanza tra oggetti
    distanza = constrain(distanza, 25.0, 100.0); // Limitare distanza per eliminare risultati estremi tra oggetti molto vicini e molto lontani
    forza.normalize();
    let strength = (G * this.massa * m.massa) / (distanza * distanza); // Calcolo forza gravitazionale
    forza.mult(strength); // Forza vettore —> magnitudo * direzione
    return forza;
  }
	
	checkBordi() {
		const limite = 750;
		if (this.posizione.x > width + limite) {
      this.posizione.x = width + limite;
      this.velocità.x *= -1;
    } else if (this.posizione.x < - limite) {
      this.velocità.x *= -1;
      this.posizione.x = - limite;
    }
    if (this.posizione.y > height + limite) {
      this.velocità.y *= -1;
      this.posizione.y = height + limite;
    } else if (this.posizione.y < - limite) {
      this.velocità.y *= -1;
      this.posizione.y = - limite;
    }
  }
}

function draw() {
	clear();
  background(255);
	
	for(let i = 0; i < enti.length; i++){
		enti[i].vedi();
	}
	
  for (let i = 0; i < enti.length; i++) {
    for (let j = 0; j < enti.length; j++) {
      if (i !== j) {
		  
        //let forza = attractor.calcolaAttrazione(enti[i]);
        let forza = enti[j].calcolaAttrazionne(enti[i]);
        enti[i].applicaForza(forza);
      }
    }
	  
    enti[i].aggiorna();
	enti[i].checkBordi();
  }
	
	if (enti.length > maxSplice) {
		enti.splice(0,1);
	}
}

ambiente = setInterval(spazio, 5000);

function spazio(){
	var x = random(width);
	var y = random(height);
	var m = random(eMin, eMax);
	var en = new Ente(m, x, y);
	enti.push(en);
	if(enti.length >= maxSplice){
		enti.splice(0,1);
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {
	//let r = floor(random(colori.length));
	//fill(colori[r]);
	var e = new Ente(random(eMin, eMax), mouseX, mouseY);
	enti.push(e);
}

function mouseDragged() {
	//let r = floor(random(colori.length));
	//fill(colori[r]);
	var e = new Ente(random(eMin, eMax), mouseX, mouseY);
	enti.push(e);
}