import{tinhTongHaiSo, tinhHieuHaiSo} from "./test.js";
console.log(tinhTongHaiSo());
console.log(tinhHieuHaiSo());

var username = "hang";

/**
 * Khai báo biến
 */
let fullname = "Dang Thanh Hang";
const Pi = 3.14;

/**
 * Arrow function
 */
const demoFunction = () => {
    console.log("hello");
}

/**
 * Default Params
 */
const tinhTong = (a, b, c, d = 0) => { //tham số mặc định
    let rs = a + b + c + d;
    console.log(rs);
}
tinhTong(1, 2, 3);

/**
 * Rest params
 */
const sum = (...numbers) => { //red params
    //numbers = mảng []
    // let total = 0;
    // for(let i=0; i < numbers.length; i++){
    //     total += numbers[i];
    // }

    // numbers.map((number) => {
    //     total += number;
    // })

    // numbers.forEach((number) => {
    //     total += number;
    // })

    const total = numbers.reduce((a, b)=>{
        return a + b;
    }, 0)

    console.log(total);
}
sum(1, 2, 3, 4, 5);

/**
 * Spread Operator
 */
//array
let mangA = [1, 2, 3];
let mangB = [...mangA, 4, 5];
console.log(mangA);
console.log(mangB);
//object
let obj =  {
    name: "Hàng",
    age: 18,
};
let obj2 = {...obj};
obj2.lop = "vlxd";
console.log(obj);
console.log(obj2);

/**
 * Destructuring (bốc tách dữ liệu)
 */
//array
let arr = ["hang", 18];
let [ten, tuoi] = arr;
console.log(ten);
console.log(tuoi);
//object
let objPeople = {
    user: "hang1",
    lop: "vlxd"
};
let {user, lop} = objPeople;
console.log(user);
console.log(lop);

/**
 * String template `${}`
 */
let usr = "hang";
let ketQua = `hello ${usr}`;
console.log(ketQua);

/**
 * Object literal
 */
let firstName = "Dang";
let lastName = "Hang";

let objUser = {
    firstName,
    lastName,
}
console.log(objUser);

/**
 * for of
 * for in
 */
let listUser = ["hang", "thanh", "dang"];
for(let item of listUser){
    console.log(item);
}

for(let i in listUser){
    console.log(i);
}

listUser.forEach((iteam, index) => {
    console.log(iteam, index);
});

let newArray = listUser.map((item, index) => {
    return index * 2;
});
console.log(newArray);