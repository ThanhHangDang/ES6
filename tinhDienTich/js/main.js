import Circle from "./models/Circle.js";
import Rectangle from "./models/Rectangle.js";
import Shape from "./models/Shape.js";
import Square from "./models/Square.js";

const getEle = (id) => document.getElementById(id);

const renderHTML = () => {
    const shape = new Shape();
    getEle("main").innerHTML = shape.draw();
}

renderHTML();

getEle("areaSquare").addEventListener("click", () => {
    const side = getEle("side").value;
    const sizeX = getEle("squareX").value + 'px';
    const sizeY = getEle("squareY").value + 'px';
    const bgColor = getEle("squareColor").value;
    
    const square = new Square( "Square", sizeX, sizeY, bgColor, side);
    square.getArea();
    getEle("main").innerHTML = square.draw();
})

getEle("areaRec").addEventListener("click", () => {
    const length = getEle("recL").value;
    const width = getEle("recW").value;
    const sizeX = getEle("recX").value + 'px';
    const sizeY = getEle("recY").value + 'px';
    const bgColor = getEle("recColor").value;
    
    const rectangle = new Rectangle( "Rectangle", sizeX, sizeY, bgColor, length, width);
    rectangle.getArea();
    getEle("main").innerHTML = rectangle.draw();
})

getEle("areaCircle").addEventListener("click", () => {
    const radius = getEle("radius").value;
    const sizeX = getEle("cirX").value + 'px';
    const sizeY = getEle("cirY").value + 'px';
    const bgColor = getEle("cirColor").value;
    
    const circle = new Circle ( "Circle", sizeX, sizeY, bgColor, radius);
    circle.getArea();
    getEle("main").innerHTML = circle.draw();
})