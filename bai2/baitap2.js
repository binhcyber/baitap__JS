/**
 * input: cho 5 số thực bất kỳ
 * cách thực hiện
 *B1: Chọc vào element của thẻ input
 *b2: lấy value của input đó
 *: chuyển qua value dưới dạng string sang number để tính toán
 *: trung bình cộng của 5 số trên và chia cho 5
 * output: trung bình cộng của 5 sô thực đó
 */
var numUser1 = document.getElementById("num1");
var numUser2 = document.getElementById("num2");
var numUser3 = document.getElementById("num3");
var numUser4 = document.getElementById("num4");
var numUser5 = document.getElementById("num5");
// console.log({
//   numUser1,
//   numUser2,
//   numUser3,
//   numUser4,
//   numUser5,
// });
function trungBinhCongSoThuc() {
  var a = numUser1.value;
  var b = numUser2.value;
  var c = numUser3.value;
  var d = numUser4.value;
  var e = numUser5.value;
  var trungBinhCong =
    (Number(a) + Number(b) + Number(c) + Number(d) + Number(e)) / 5;
  console.log(trungBinhCong);
}
