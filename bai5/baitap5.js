/**
 * input: Nhập 2 chữ số bất kỳ
 * Cách thực hiện
 * b1: tách lấy hàng đơn vị của 2 số trên (số%10)
 * b2: tách lấy hàng chục của 2 số trên (số /10)
 *b3 cộng 2 số đã tách giữa hàng đơn vị và hàng trăm lại với nhau
 * output: tổng 2 chữ số đã nhập
 */
var kySoUserEl = document.getElementById("kySo");
function kySoUser() {
  var a = kySoUserEl.value;
  var tachLayHangDonVi = Number(a) % 10;
  var tachLayHangChuc = Math.floor(Number(a) / 10);
  var TongKySo = tachLayHangDonVi + tachLayHangChuc;
  document.getElementById("tongKySo").innerHTML = TongKySo;
}
