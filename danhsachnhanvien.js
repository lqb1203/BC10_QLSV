function DanhSachNhanVien() {
    this.list = [];

    this.themNhanVien = function (nv) {
        this.list.push(nv);
    };

    this._timViTri = function (tkNV) {
        var index = -1;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].tkNV == tkNV) {
                index = i;
                break;
            }
        }
        return index;
    };

    this._XoaNhanVien = function (tkNV) {
        var index = this._timViTri(tkNV);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    };
}