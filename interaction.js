
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	
	this.initialX =0;
	this.initialY=0;
	this.finalX=0;
	this.finalY=0;	
	this.press = false;
  this.interactor = interactor;

	
	

	// Developper les 3 fonctions gérant les événements
  this.pression = function(evt){
    this.press = true;
    
    var pos = getMousePosition(canvas, evt);
    
    this.initialX = pos.x;
    this.initialY = pos.y
    this.interactor.onInterractionStart(this);
  }.bind(this);
  
  this.deplacement = function(evt){
    if(this.press) {
      var pos = getMousePosition(canvas, evt);
      
      this.finalX = pos.x;
      this.finalY = pos.y;

      this.interactor.onInterractionUpdate(this);
    }
  }.bind(this);
  
  this.relachement = function(evt){
    if(this.press) {
      
      var pos = getMousePosition(canvas, evt);
      
      this.finalX = pos.x;
      this.finalY = pos.y;
      
      this.press= false;

      this.interactor.onInterractionEnd(this);      
    }
  }.bind(this);
  
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



