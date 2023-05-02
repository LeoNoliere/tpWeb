
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	
	var initialX =0;
	var initialY=0;
	var finalX=0;
	var finalY=0;
	
	var press = false;
	
	

	// Developper les 3 fonctions gérant les événements
  DnD.pression = function(evt){
    press = true;
    
    var pos = getMousePosition(canvas, evt);
    
    initialX = pos.x;
    initialY = pos.y;

    console.log(initialX);
    console.log(initialY);
  }
  
  DnD.deplacement = function(evt){
    if(press) {
      var pos = getMousePosition(canvas, evt);
      
      finalX = pos.x;
      finalY = pos.y;

      console.log(finalX);
      console.log(finalY);
    }
  }
  
  DnD.relachement = function(evt){
    if(press) {
      
      var pos = getMousePosition(canvas, evt);
      
      finalX = pos.x;
      finalY = pos.y;
      
      press= false;


      console.log(finalX);
      console.log(finalY);

    }
  }
  
	// Associer les fonctions précédentes aux évènements du canvas.
	
	canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplacement, false);
  canvas.addEventListener('mouseup', this.relachement, false);

}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}



