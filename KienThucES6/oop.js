// function Student(_name){
//     this.name = _name;
// }

class Student{
    constructor(name){
        this.name = name;
    }
}

const student = new Student("hàng");
console.log(student.name);

class Mother{
    constructor(name){
        this.name = name;
    }

    colorEyes(){
        console.log("Red");
    }
}

class Me extends Mother{
    colorSkin(){
        console.log("Brow");
    }
}

const me = new Me("Hào");
me.colorEyes();
me.colorSkin();

class Person{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Monkey extends Person{
    getName(){
        return "hello " + this.name;
    }
}

const khi = new Monkey("khỉ");
console.log(khi.getName());

class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getInfo(){
        console.log(`Tên: ${this.name} - Tuổi: ${this.age}`);
    }
}

class Monkey2 extends People{
    constructor(name, age, eat){
        super(name, age);
        this.eat = eat;
    }

    getInfo(){
        super.getInfo();
        console.log(`Ăn: ${this.eat}`);
    }
}
let monkey2 = new Monkey2("khỉ", 2, "chuối");
monkey2.getInfo();