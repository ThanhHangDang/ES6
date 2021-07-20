import Food from "../../models/v2/Food.js";
import ListFood from "../../models/v2/ListFood.js";

const listFood = new ListFood();

const getEle = (id) => {
    return document.getElementById(id);
};

const renderTable = (arr) => {
    // let contentHTML = "";
    // arr.forEach((item) => {
        // contentHTML += `
        //     <tr>
        //         <td>${item.id}</td>
        //         <td>${item.tenMon}</td>
        //         <td>${item.loaiMon === "loai1" ? "Chay" : "Mặn"}</td>
        //         <td>${item.giaMon}</td>
        //         <td>${item.khuyenMai}</td>
        //         <td>${item.giaKhuyenMai}</td>
        //         <td>${item.tinhTrang === "0" ? "Hết" : "Còn"}</td>
        //    </tr>
        // `; 
    // })
    // return contentHTML;

    return arr.reduce((contentHTML, item) => {
        return (contentHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.tenMon}</td>
                <td>
                    <img src="./../../../assets/img/${item.hinhMon}">
                </td>
                <td>${item.loaiMon === "loai1" ? "Chay" : "Mặn"}</td>
                <td>${item.giaMon}</td>
                <td>${item.khuyenMai}</td>
                <td>${item.giaKhuyenMai}</td>
                <td>${item.tinhTrang === "0" ? "Hết" : "Còn"}</td>
                <td>
                    <button class="btn btn-info" onclick="suaMonAn(${item.id})" data-toggle="modal" data-target="#exampleModal">Sửa</button>
                    <button class="btn btn-danger">Xóa</button>
                </td>
            </tr>
        `); 
    }, "")
}

const fetchData = () => {
    listFood.getListFoodApi()
        .then((result) => {
            getEle("tbodyFood").innerHTML = renderTable(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
fetchData();

getEle("btnThem").addEventListener("click", () => {
    //Sửa lại tiêu đề của modal header
    getEle("exampleModalLabel").innerHTML = "Thêm món ăn";

    //Thêm nút "Thêm món ăn" vào modal footer
    const footer = `<button type="button" class="btn btn-warning" id="btnThemMon" onclick="themMonAn()">Thêm</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
});

const themMonAn = () => {
    // dom lấy value từ các thẻ input
    const _tenMon = getEle("tenMon").value;
    const _loaiMon = getEle("loai").value;
    const _giaMon = getEle("giaMon").value;
    const _khuyenMai = getEle("khuyenMai").value;
    const _tinhTrang = getEle("tinhTrang").value;
    let _hinhMon = "";
    if(getEle("hinhMon").files.length > 0){
        _hinhMon = getEle("hinhMon").files[0].name;
    };
    const _moTa = getEle("moTa").value;

    // tạo ra 1 đối tượng food từ lớp đối tượng Food
    const food = new Food("", _tenMon, _loaiMon, _giaMon, _khuyenMai, _tinhTrang, _hinhMon, _moTa);

    food.tinhGiaKhuyenMai();

    listFood.addFoodApi(food)
        .then((result) => {
            alert("Add success!");
            document.getElementsByClassName("close")[0].click();
            fetchData();
        })
        .catch((error) => {
            console.log(error);
        });
};
window.themMonAn = themMonAn;

/**
 * Sửa món ăn
 */
const suaMonAn = (id) => {
    //Sửa lại tiêu đề của modal header
    getEle("exampleModalLabel").innerHTML = "Cập nhật";

    //Thêm nút "Thêm món ăn" vào modal footer
    const footer = `<button type="button" class="btn btn-success">Cập nhật</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

    listFood.getFoodById(id)
        .then((result) => {
            //Show value ra các thẻ input
            getEle("foodID").value = result.data.id;
            getEle("tenMon").value = result.data.tenMon;
            getEle("loai").value = result.data.loaiMon;
            getEle("giaMon").value = result.data.giaMon;
            getEle("khuyenMai").value = result.data.khuyenMai;
            getEle("tinhTrang").value = result.data.tinhTrang;
            getEle("moTa").value = result.data.moTa;
        })
        .catch((error) => {
            console.log(error);
        });
}
window.suaMonAn = suaMonAn;
