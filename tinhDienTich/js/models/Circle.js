import Square from "./Square.js";

export default class Circle extends Square {
    constructor(_name, _sizeX, _sizeY, _bgColor, _radius){
        super(_name, _sizeX, _sizeY, _bgColor);
        this.radius = _radius;
    }

    getArea(){
        this.area = Math.pow(this.radius, 2)*3.14;
    }

    draw(){
        return `
            <div class="text-center rounded-circle" style="width:${this.sizeX}; height:${this.sizeY}; background-color:${this.bgColor}">
                <p>
                    Tên: ${this.name}
                    <br/>
                    Diện tích: ${this.area}
                </p>
            </div>
        `
    }
}