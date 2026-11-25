/* Lịch âm – dương và tuần trăng cho Bếp Cô Kỹ.
   Thuật toán âm lịch Việt Nam của Hồ Ngọc Đức (múi giờ UTC+7), lấy từ trang nguyenducdungvn.github.io. */
window.LICH = (function () {
  var INT = Math.floor, PI = Math.PI, TZ = 7;
  function jdFromDate(dd, mm, yy) { var a = INT((14 - mm) / 12), y = yy + 4800 - a, m = mm + 12 * a - 3; var jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045; if (jd < 2299161) jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083; return jd; }
  function newMoonExact(k) { var T = k / 1236.85, T2 = T * T, T3 = T2 * T, dr = PI / 180; var Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3; Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr); var M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3, Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3, F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3; var C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M); C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr) - 0.0004 * Math.sin(dr * 3 * Mpr); C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr)) - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M)); C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr)) + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M)); var deltat = T < -11 ? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3 : -0.000278 + 0.000265 * T + 0.000262 * T2; return Jd1 + C1 - deltat; }
  function newMoon(k) { return INT(newMoonExact(k) + 0.5 + TZ / 24); }
  function sunLong(jdn) { var T = (jdn - 2451545.5 - TZ / 24) / 36525, T2 = T * T, dr = PI / 180; var M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2, L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; var DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M); DL += (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M); var L = (L0 + DL) * dr; L -= PI * 2 * INT(L / (PI * 2)); return INT(L / PI * 6); }
  function month11(yy) { var k = INT((jdFromDate(31, 12, yy) - 2415021) / 29.530588853); var nm = newMoon(k); if (sunLong(nm) >= 9) nm = newMoon(k - 1); return nm; }
  function leapOffset(a11) { var k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5), last, i = 1, arc = sunLong(newMoon(k + i)); do { last = arc; i++; arc = sunLong(newMoon(k + i)); } while (arc !== last && i < 14); return i - 1; }
  function toLunar(dd, mm, yy) { var dn = jdFromDate(dd, mm, yy), k = INT((dn - 2415021.076998695) / 29.530588853); var ms = newMoon(k + 1); if (ms > dn) ms = newMoon(k); var a11 = month11(yy), b11 = a11, ly; if (a11 >= ms) { ly = yy; a11 = month11(yy - 1); } else { ly = yy + 1; b11 = month11(yy + 1); } var d = dn - ms + 1, diff = INT((ms - a11) / 29), leap = 0, m = diff + 11; if (b11 - a11 > 365) { var lo = leapOffset(a11); if (diff >= lo) { m = diff + 10; if (diff === lo) leap = 1; } } if (m > 12) m -= 12; if (m >= 11 && diff < 4) ly -= 1; return { d: d, m: m, y: ly, leap: leap }; }
  var CAN = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'], CHI = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];
  var DOW = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  var CAN = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'], CHI = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];
  var CAN0 = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'], CHI0 = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  var SYN = 29.530588853;
  function jdNow(d) { return d.getTime() / 864e5 + 2440587.5; }
  /* tuổi trăng (ngày từ trăng non), độ sáng 0..1, ngày trăng tròn & trăng non kế tiếp */
  function trang(d) {
    var j = jdNow(d), k = INT((j - 2415020.75933) / SYN);
    while (newMoonExact(k + 1) <= j) k++;
    while (newMoonExact(k) > j) k--;
    var age = j - newMoonExact(k), illum = (1 - Math.cos(2 * PI * age / SYN)) / 2;
    var full = newMoonExact(k) + SYN / 2; if (full < j) full = newMoonExact(k + 1) + SYN / 2;
    var nxt = newMoonExact(k + 1);
    var ten = age < 1.5 ? 'Trăng non' : age < 6.4 ? 'Trăng lưỡi liềm đầu' : age < 8.9 ? 'Trăng thượng huyền' : age < 13.8 ? 'Trăng gần tròn' : age < 15.8 ? 'Trăng tròn' : age < 21.1 ? 'Trăng khuyết dần' : age < 23.6 ? 'Trăng hạ huyền' : age < 28 ? 'Trăng lưỡi liềm cuối' : 'Trăng non';
    var toDate = function (jd) { return new Date((jd - 2440587.5) * 864e5); };
    return { age: age, illum: illum, ten: ten, tronKe: toDate(full), nonKe: toDate(nxt), tang: age < SYN / 2 };
  }
  function ngay(d) {
    var D = d.getDate(), M = d.getMonth() + 1, Y = d.getFullYear();
    var L = toLunar(D, M, Y), jd = jdFromDate(D, M, Y);
    return {
      L: L, namCC: CAN[L.y % 10] + ' ' + CHI[L.y % 12],
      ngayCC: CAN0[(jd + 9) % 10] + ' ' + CHI0[(jd + 1) % 12],
      thangCC: CAN0[(L.y * 12 + L.m + 3) % 10] + ' ' + CHI0[(L.m + 1) % 12]
    };
  }
  /* tìm ngày dương của một ngày âm sắp tới (quét tối đa 400 ngày) */
  function timAm(d0, dd, mm) {
    for (var i = 0; i < 400; i++) { var x = new Date(d0.getFullYear(), d0.getMonth(), d0.getDate() + i), L = toLunar(x.getDate(), x.getMonth() + 1, x.getFullYear()); if (L.d === dd && L.m === mm && !L.leap) return { ngay: x, con: i }; }
    return null;
  }
  return { toLunar: toLunar, ngay: ngay, trang: trang, timAm: timAm };
})();
