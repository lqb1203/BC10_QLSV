function Validation() {
    this.kiemTraRong = function (input, divID, mess) {
        if (input.trim() === "") {
            getEle(divID).innerHTML = mess;
            getEle(divID).className = "alert alert-danger"
            return false;
        } else {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        }
    };

    this.kiemTraKyTuChuoi = function (input, divID, mess,) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (input.match(letter)) {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraEmail = function (input, divID, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraMatKhau = function (input, divID, mess) {
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraNgayLam = function (input, divID, mess) {
        var letter = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
        if (input.match(letter)) {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraLuong = function (input, divID, mess) {
        var letter = /^[0-9]+$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraChucVu = function (idSelect, divID, mess) {
        if (getEle(idSelect).selectedIndex != 0) {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraGioLam = function (input, divID, mess) {
        if (parseInt(input) >= 80 && parseInt(input) <= 200) {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        } else {
            getEle(divID).innerHTML = mess;
            getEle(divID).className = "alert alert-danger";
            return false;
        }
    };

    this.kiemTraTrung = function (input, divID, mess, arr) {
        var status = true;
        for (i = 0; i < arr.length; i++) {
            if (arr[i].tkNV === input) {
                status = false;
                break;
            }
        }

        if (status) {
            getEle(divID).innerHTML = " ";
            getEle(divID).className = " ";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };
}