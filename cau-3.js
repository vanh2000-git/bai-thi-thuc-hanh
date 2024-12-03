let danhSachSoTietKiem = [];


class SOTIETKIEM {
    constructor(maSo, loaiTietKiem, hoTenKhachHang, cmnd, ngayMoSo, soTienGui) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTenKhachHang = hoTenKhachHang;
        this.cmnd = cmnd;
        this.ngayMoSo = ngayMoSo;
        this.soTienGui = soTienGui;
    }

    kiemTraHopLe() {
        if (this.maSo.length > 5 || this.loaiTietKiem.length > 10 || this.hoTenKhachHang.length > 30) {
            return "Dữ liệu không hợp lệ: Vui lòng kiểm tra lại các trường.";
        }

        const ngayRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!ngayRegex.test(this.ngayMoSo)) {
            return "Ngày mở sổ không hợp lệ.";
        }

        if (isNaN(this.cmnd) || this.cmnd.toString().length !== 9) {
            return "Chứng minh nhân dân không hợp lệ.";
        }

        if (isNaN(this.soTienGui) || this.soTienGui <= 0) {
            return "Số tiền gửi không hợp lệ.";
        }

        return null;
    }
}


function themSoTietKiem(event) {

    let maSo = document.getElementById('maSo').value;
    let loaiTietKiem = document.getElementById('loaiTietKiem').value;
    let hoTen = document.getElementById('hoTen').value;
    let cmnd = document.getElementById('cmnd').value;
    let ngayMoSo = document.getElementById('ngayMoSo').value;
    let soTienGui = document.getElementById('soTienGui').value;


    if (danhSachSoTietKiem.some(soTietKiem => soTietKiem.maSo === maSo)) {
        document.getElementById('errorMessages').textContent = "Mã số sổ tiết kiệm đã tồn tại! Vui lòng nhập mã số khác.";
        return;
    }

    let soTietKiemMoi = new SOTIETKIEM(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui);

    let errorMessage = soTietKiemMoi.kiemTraHopLe();
    if (errorMessage) {
        document.getElementById('errorMessages').textContent = errorMessage;
        return;
    }
    danhSachSoTietKiem.push(soTietKiemMoi);
    alert("Thêm thành công sổ tiết kiệm mới!!!");
    hienThiDanhSachSoTietKiem();
    document.getElementById('errorMessages').textContent = '';
    document.getElementById('formSoTietKiem').reset();
}

function xoaSoTietKiem(event) {

    let maSoXoa = document.getElementById('maSoXoa').value;


    let index = danhSachSoTietKiem.findIndex(soTietKiem => soTietKiem.maSo === maSoXoa);

    if (index === -1) {
        document.getElementById('errorMessages').textContent = "Mã số sổ tiết kiệm không tồn tại. Vui lòng nhập lại.";
        return;
    }
    if (confirm(`Bạn có chắc chắn muốn xóa sổ tiết kiệm có mã số: ${maSoXoa}?`)) {

        danhSachSoTietKiem.splice(index, 1);
        alert(`Sổ tiết kiệm có mã số ${maSoXoa} đã được xóa thành công.`);
        hienThiDanhSachSoTietKiem();
    }

    document.getElementById('errorMessages').textContent = '';
    document.getElementById('formXoaSoTietKiem').reset();
}

function hienThiDanhSachSoTietKiem() {
    let ul = document.getElementById('danhSachSoTietKiem');
    ul.innerHTML = '';
    danhSachSoTietKiem.forEach(function(soTietKiem) {
        let li = document.createElement('li');
        li.innerHTML = `
            <strong>Mã Sổ:</strong> ${soTietKiem.maSo} <br>
            <strong>Loại Tiết Kiệm:</strong> ${soTietKiem.loaiTietKiem} <br>
            <strong>Họ Tên Khách Hàng:</strong> ${soTietKiem.hoTenKhachHang} <br>
            <strong>Chứng Minh Nhân Dân:</strong> ${soTietKiem.cmnd} <br>
            <strong>Ngày Mở Sổ:</strong> ${soTietKiem.ngayMoSo} <br>
            <strong>Số Tiền Gửi:</strong> ${soTietKiem.soTienGui} VND
            <hr>
        `;
        ul.appendChild(li);
    });
}
