/**
 * input: nhập số tiền cần quy đổi từ USD => VNĐ
 * Cách thực hiện:
 * Lấy số tiền mà User đã nhập x với giá USD (23500VND)
 *
 *
 *
 * output: số tiền đã được quy đổi VNĐ
 */

var tienUserUSD = document.getElementById("UserUSD");
// console.log(tienUserUSD);

function quyDoiTien() {
  var a = tienUserUSD.value;
  var giaUSD = 23500;
  var quyDoi = Number(a) * giaUSD;
  console.log(quyDoi);
}
