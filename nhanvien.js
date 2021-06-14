function NhanVien(_tkNV, _tenNV, _emailNV, _passWord, _datePicker, _luongCB, _chucVu, _gioLam) {
    this.tkNV = _tkNV;
    this.tenNV = _tenNV;
    this.emailNV = _emailNV;
    this.passWorld = _passWord;
    this.datePicker = _datePicker;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

    this.tinhLuong = function () {
        this.tongLuong = (parseFloat(this.luongCB) * parseFloat(this.gioLam))
        return this.tongLuong;
    }
    this.tinhXepLoai = function () {
        if (176 < _gioLam && _gioLam >= 192)
            return "Nhân viên xuất sắc"
        if (160 < _gioLam && _gioLam >= 176)
            return "Nhân viên giỏi"
        if (_gioLam >= 160)
            return "Nhân viên Khá"
        if (_gioLam < 160)
            return "Nhân viên trung bình"
    }
    return this.xepLoai;
}

