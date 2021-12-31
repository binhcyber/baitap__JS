/**
 * input: tiền lương/ ngày: 100000 và số ngày làm
 * Cách thực hiện
 * đặt 1 biến là tiền lương cố định trên ngày: 100000
 * đặt 1 biến là số ngày làm
 * đặt 1 biến là tiền lương thực nhận
 *
 * output: tổng số tiền lương thực nhận:
 */

var soNgayLamUserEL = document.getElementById("ngayLamCuaUser");
var tienLuongTrenNgay = 100000;
function tinhTien() {
  var a = soNgayLamUserEL.value;
  var b = Number(a) * tienLuongTrenNgay;
  document.getElementById("tongTienCuaUser").innerText = b;
}
