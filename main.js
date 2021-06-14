var dsnv = new DanhSachNhanVien();
var validation = new Validation();


function getEle(id) {
    return document.getElementById(id);
}

getLocalStorage();

getEle("btnThemNV").onclick = function () {
    var _tkNV = getEle("tknv").value;
    var _tenNV = getEle("name").value;
    var _emailNV = getEle("email").value;
    var _passWord = getEle("password").value;
    var _datePicker = getEle("datepicker").value;
    var _luongCB = getEle("luongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("gioLam").value;

    var isValid = true;

    isValid &= validation.kiemTraRong(_tkNV, "divTkERR", "(*) Tài khoản không được rỗng") && validation.kiemTraKyTuChuoi(_tkNV, "divTkERR", "(*) Tài khoản viên bắt đầu bằng chữ") && validation.kiemTraTrung(_tkNV, "divTkERR", "(*) Tên tài khoản đã tồn tại", dsnv.list);
    isValid &= validation.kiemTraRong(_tenNV, "divTenERR", "(*) Tên nhân viên không được rỗng") && validation.kiemTraKyTuChuoi(_tenNV, "divTenERR", "(*) Tên nhân viên phải là chữ");
    isValid &= validation.kiemTraRong(_emailNV, "divEmailERR", "(*) Email không được rỗng") && validation.kiemTraEmail(_emailNV, "divEmailERR", "(*) Email không đúng định dạng");
    isValid &= validation.kiemTraRong(_passWord, "divMkERR", "(*) Mật khẩu không được rỗng") && validation.kiemTraMatKhau(_passWord, "divMkERR", "(*) Mật khẩu bao gồm chữ và số và chữ viết hoa");
    isValid &= validation.kiemTraRong(_datePicker, "divDatepickerERR", "(*) Ngày làm không được rỗng") && validation.kiemTraNgayLam(_datePicker, "divDatepickerERR", "(*) Ngày làm không đúng định dạng");
    isValid &= validation.kiemTraRong(_luongCB, "divLuongCBERR", "(*) Lương căn bản không được rỗng") && validation.kiemTraLuong(_luongCB, "divLuongCBERR", "(*) Lương không đúng định dạng");
    isValid &= validation.kiemTraChucVu("chucvu", "divChucVuERR", "(*) Vui lòng chọn chức vụ");
    isValid &= validation.kiemTraRong(_gioLam, "divGioLamERR", "(*) Giờ làm không được rỗng") && validation.kiemTraGioLam(_gioLam, "divGioLamERR", "(*) Giờ làm phải từ 80 giờ trở lên");

    var nhanVien = new NhanVien(_tkNV, _tenNV, _emailNV, _passWord, _datePicker, _luongCB, _chucVu, _gioLam);
    if (isValid) {
        nhanVien.tinhLuong();
        nhanVien.tinhXepLoai();
        dsnv.themNhanVien(nhanVien);
        taoBang(dsnv.list);
        setLocalStorage();
    }
};


function taoBang(arr) {
    getEle("tableDanhSach").innerHTML = " ";
    for (var i = 0; i < arr.length; i++) {
        var tagTR = document.createElement("tr");

        var tagTD_tkNV = document.createElement("td");
        var tagTD_tenNV = document.createElement("td");
        var tagTD_emailNV = document.createElement("td");
        var tagTD_ngayLam = document.createElement("td");
        var tagTD_chucVu = document.createElement("td");
        var tagTD_tongLuong = document.createElement("td");
        var tagTD_xepLoai = document.createElement("td");
        var tagTD_Button_Edit = document.createElement("td")
        var tagTD_Button_Delete = document.createElement("td");

        tagTD_tkNV.innerHTML = arr[i].tkNV;
        tagTD_tenNV.innerHTML = arr[i].tenNV;
        tagTD_emailNV.innerHTML = arr[i].emailNV;
        tagTD_ngayLam.innerHTML = arr[i].datePicker;
        tagTD_chucVu.innerHTML = arr[i].chucVu;
        tagTD_tongLuong.innerHTML = arr[i].tongLuong;
        tagTD_xepLoai.innerHTML = arr[i].xepLoai;

        tagTD_Button_Delete.innerHTML = '<button class="btn btn-danger" onclick="xoaNhanVien(\'' + arr[i].tkNV + '\')">Xoá</button>';

        tagTR.appendChild(tagTD_tkNV);
        tagTR.appendChild(tagTD_tenNV);
        tagTR.appendChild(tagTD_emailNV);
        tagTR.appendChild(tagTD_ngayLam);
        tagTR.appendChild(tagTD_chucVu);
        tagTR.appendChild(tagTD_tongLuong);
        tagTR.appendChild(tagTD_xepLoai);
        tagTR.appendChild(tagTD_Button_Delete);

        getEle("tableDanhSach").appendChild(tagTR);
    }
}

function xoaNhanVien(tkNV) {
    dsnv._XoaNhanVien(tkNV);
    taoBang(dsnv.list);
    setLocalStorage();
}

function setLocalStorage() {
    var arrString = JSON.stringify(dsnv.list);
    localStorage.setItem("DSNV", arrString);
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        dsnv.list = JSON.parse(localStorage.getItem("DSNV"));
        taoBang(dsnv.list);
    }
}