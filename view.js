
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (context){
    context.strokeStyle = this.color;
    context.lineWidth = this.thickness;
    context.strokeRect(this.startX, this.startY, this.width, this.height);
}

Line.prototype.paint = function (context){
    context.strokeStyle = this.color;
    context.lineWidth = this.thickness;
    context.beginPath();
    context.moveTo(this.startX, this.startY);
    context.lineTo(this.endX, this.endY);
    context.stroke();
}
 
Drawing.prototype.paint = function (context, canvas){
    context.fillStryle = '#F0F0F0';
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeArray.forEach(element => element.paint(context))
}

function updateShapeList(index, shape){
    document.getElementById('shapeList').insertAdjacentHTML('beforeend', toDom(shape, index));
}

function toDom(shape, index) {
    if(shape && typeof shape ==='object'){
        let innerHtml = `<li id="liRemove${index}">`
        if (shape.constructor === Rectangle){
            innerHtml += '<span style="color:' + shape.color + '">□</span> Rectangle'
        }else if (shape.constructor === Line){
            innerHtml += '<span style="color:' + shape.color + '">/</span> Line'
        }
        innerHtml += `
                <button type ="button" class="btn btn-default remove"
                id="remove${index}">
                    <span class="glyphicon-remove-sign"></span>
                </button>`
        return innerHtml + '</li>'
    }
}