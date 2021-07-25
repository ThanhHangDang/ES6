import Shape from "./Shape.js";
import Square from "./Square.js";

export default class Rectangle extends Square {
    constructor(_name, _sizeX, _sizeY, _bgColor, _length, _width){
        super(_name, _sizeX, _sizeY, _bgColor);
        this.length = _length;
        this.width = _width;
    }

    getArea(){
        this.area = (this.length*this.width);
    }

}