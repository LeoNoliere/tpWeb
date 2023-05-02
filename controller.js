
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect;
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line;
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInterractionStart = function(dnd){
		this.currentShape = new Rectangle();

	}.bind(this);

	this.onInterractionUpdate = function(dnd){
		
		if(this.currEditingMode === editingMode.rect){
			this.currentShape = new Rectangle(dnd.initialX, dnd.initialY, this.currLineWidth, this.currColour, dnd.finalY - dnd.initialY, dnd.finalX - dnd.initialX);

		}else{
			this.currentShape = new Line(dnd.initialX, dnd.initialY, this.currLineWidth,this.currColour, dnd.finalX, dnd.finalY);
		}
		
		
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInterractionEnd = function(dnd){
		var id = crypto.randomUUID();
		drawing.shapeArray.set(id, this.currentShape);
		drawing.paint(ctx,canvas);
		updateShapeList(id, this.currentShape);
		document.getElementById("remove" + id).onclick = (event) => removeEventListener(drawing, event.currentTarget.id.substring(6), ctx, canvas);
		
	}.bind(this);
};


