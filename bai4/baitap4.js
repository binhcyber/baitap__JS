/**
 * input: nhập chiều dài và chiều rộng
 * Cách thực hiện
 * Diện tích: Dài x rộng
 * Chu vi: (Dài + rộng)/2
 * output: xuất ra diện tích và chu vi
 */

var chieuDaiUserEl = document.getElementById("chieuDaiHCN");

var chieuRongUserEl = document.getElementById("chieuRongHCN");

function dienTich() {
  var a = chieuDaiUserEl.value;
  var b = chieuRongUserEl.value;
  var dienTich = Number(a) * Number(b);
  document.getElementById("SodienTich").innerHTML = dienTich;
}
function chuVi() {
  var a = chieuDaiUserEl.value;
  var b = chieuRongUserEl.value;
  var chuVi = (Number(a) + Number(b)) * 2;
  document.getElementById("SochuVi").innerHTML = chuVi;
}
