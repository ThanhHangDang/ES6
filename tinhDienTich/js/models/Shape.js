export default class Shape{
    constructor(_name, _sizeX, _sizeY, _bgColor){
        this.name = _name;
        this.sizeX = _sizeX;
        this.sizeY = _sizeY;
        this.bgColor = _bgColor;
        this.area = 0;
    }

    getArea(){
        this.area = 0;
    }

    draw(){
        return `
            <div class="alert alert-primary">Chưa có diện tích</div>        
        `;
    }
}