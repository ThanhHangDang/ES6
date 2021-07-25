import Shape from "./Shape.js";

export default class Square extends Shape{
    constructor(_name, _sizeX, _sizeY, _bgColor, _side){
        super(_name, _sizeX, _sizeY, _bgColor);
        this.side = _side;
    }

    getArea(){
        this.area = Math.pow(this.side, 2);
    }

    draw(){
        return `
            <div class="text-center" style="width:${this.sizeX}; height:${this.sizeY}; background-color:${this.bgColor}">
                <p>
                    Tên: ${this.name}
                    <br/>
                    Diện tích: ${this.area}
                </p>
            </div>
        `
    }
}