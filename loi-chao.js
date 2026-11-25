/* =====================================================================
   LỜI CHÀO CỦA CÔ KỸ – mỗi lần vào trang là một lời chào mới
   ---------------------------------------------------------------------
   Lời chào = câu mở theo giờ + (nếu có) câu theo ngày đặc biệt + một câu "để dành".
   Muốn thêm câu: thêm một dòng vào đúng nhóm, nhớ đặt trong dấu nháy '...'.
   Máy nhớ những câu vừa hiện (trên máy người xem) để lần sau không lặp lại.
   ===================================================================== */
window.LOI_CHAO = {
  /* câu mở theo khung giờ */
  gio: {
    khuya: [ // 0h – 4h59
      'Khuya thế này các bác còn thức à? Em cũng vừa tắt bếp xong mẻ cuối đây ạ.',
      'Giờ này cả xóm ngủ hết rồi, chỉ còn em với nồi nước dùng lục bục và các bác thôi đấy 😂',
      'Thức khuya thì nhớ uống cốc nước ấm, đừng ăn mì tôm nhé các mom, mai dậy mặt sưng như cái bánh bao đấy.',
      'Đêm nay em trực bếp, các bác cứ ngắm trăng ngoài cửa sổ nhà em cho đỡ buồn ngủ.'
    ],
    sangSom: [ // 5h – 7h59
      'Chào buổi sáng sớm các bác! Em bắc nồi nước lên rồi, gà nhà hàng xóm cũng vừa gáy xong.',
      'Sáng ra mở cửa sổ đón nắng, hít một hơi thật sâu rồi mới vào việc nhé chị em.',
      'Dậy sớm đi chợ được mớ tôm tươi là cả ngày vui các mom ạ. Mời vào bếp nhà em!',
      'Buổi sáng đẹp trời thế này mà ăn sáng qua loa là phí lắm đấy, các bác ăn gì chưa?'
    ],
    sang: [ // 8h – 10h59
      'Chào buổi sáng các bác, các mom! Em đang thái thái băm băm, vào chơi với em tí.',
      'Giờ này chị em đi làm cả rồi, ai ở nhà thì vào bếp em uống cốc trà nói chuyện cho vui nhé.',
      'Sáng nay bếp em thơm mùi hành phi, các bác có ngửi thấy qua màn hình không 😜',
      'Làm việc mỏi mắt thì ghé bếp em xem tí ảnh đồ ăn cho đỡ căng thẳng nha.'
    ],
    trua: [ // 11h – 13h59
      'Trưa rồi các mom ơi! Ăn với cơm thôi cũng phải đẹp – hôm nay nhà mình ăn gì?',
      'Đến giờ lên mâm rồi, bác nào chưa nghĩ ra món thì vào mục “Hôm nay ăn gì?” quay một vòng nhé.',
      'Trưa nắng thế này một bát canh rau ngót nấu tôm là mát ruột lắm các bác ạ.',
      'Ăn trưa xong nhớ chợp mắt mười lăm phút, chiều làm việc tỉnh như sáo chị em ạ.'
    ],
    chieu: [ // 14h – 17h59
      'Chiều rồi, chị em đi làm sắp về chưa? Bữa tối để em lo một phần cho nhé ạ.',
      'Giờ này là giờ nghĩ món tối đau đầu nhất các mom nhỉ 😂 Vào bếp em lấy ý tưởng đi.',
      'Chiều nay trời đẹp, em vừa phơi xong rổ hành, các bác vào chơi tí cho vui.',
      'Một cốc trà gừng buổi chiều cho ấm bụng, rồi mình tính chuyện cơm tối các bác ạ.'
    ],
    toi: [ // 18h – 21h59
      'Chào buổi tối các bác! Cơm nước xong xuôi chưa ạ? Vào bếp em ngồi chơi tí.',
      'Tối rồi, cả nhà quây quần là vui nhất. Ăn ngon miệng nhé các mom!',
      'Buổi tối là giờ em đọc tin nhắn đặt hàng, bác nào cần gì cứ nhắn em nha.',
      'Các bác ngó lên cửa sổ bếp em xem trăng hôm nay tròn hay khuyết nhé – trăng trong tranh đúng tuần trăng thật đấy.'
    ],
    dem: [ // 22h – 23h59
      'Muộn rồi mà các bác vẫn ghé bếp em, quý quá đi mất 🥰',
      'Đêm rồi, đọc tí rồi đi ngủ sớm nhé các mom, mai còn dậy nấu bữa sáng.',
      'Khuya rồi mà em vẫn còn ở dưới bếp các bác ạ. Ninh ninh nấu nấu xong mẻ này em mới đi ngủ.',
      'Đọc bài kiến thức bếp trước khi ngủ cũng là một cách ru ngủ đấy các bác 😂'
    ]
  },

  /* câu theo thứ trong tuần (0 = Chủ Nhật) – thỉnh thoảng mới hiện */
  thu: {
    1: ['Thứ Hai rồi, cố lên các chị em ơi, tuần mới nhiều năng lượng nhé!'],
    5: ['Thứ Sáu rồi các bác ơi, sắp cuối tuần, lên thực đơn đãi cả nhà thôi!'],
    6: ['Thứ Bảy là ngày em được “nghịch” bếp thỏa thích, các bác cuối tuần nấu món gì?'],
    0: ['Chủ Nhật thảnh thơi, nấu một bữa thật tươm tất cho cả nhà các mom nhé.']
  },

  /* ngày dương lịch đặc biệt: 'ngày/tháng' */
  duong: {
    '1/1': 'Chúc mừng năm mới dương lịch! Chúc các bác một năm khỏe mạnh, bếp lúc nào cũng đỏ lửa.',
    '14/2': 'Lễ tình nhân rồi đấy các vợ, nấu một món ông chủ thích là ngọt hơn cả sô-cô-la 😜',
    '8/3': 'Chúc mừng ngày 8/3! Hôm nay chị em nghỉ tay, để các ông chủ vào bếp một hôm nhé 😂',
    '30/4': 'Mừng ngày thống nhất đất nước! Nghỉ lễ đi chơi vui, về nhớ lên đơn với em nha.',
    '1/5': 'Ngày Quốc tế Lao động – chúc các bác người lao động nghỉ ngơi thật đã!',
    '1/6': 'Ngày Thiếu nhi! Hôm nay nhà nào cũng nấu món các bạn nhỏ thích nhất nhé.',
    '2/9': 'Mừng Quốc khánh 2/9! Cờ đỏ sao vàng bay khắp phố, chúc cả nhà nghỉ lễ vui.',
    '20/10': 'Chúc mừng ngày Phụ nữ Việt Nam 20/10! Chúc các chị em luôn xinh, luôn vui, luôn được thương.',
    '20/11': 'Tri ân thầy cô ngày 20/11 – chúc các thầy cô sức khỏe, bình an.',
    '24/12': 'Giáng sinh an lành các bác ơi! Tối nay ra phố ngắm đèn nhớ mặc ấm.',
    '25/12': 'Merry Christmas các mom! Chúc nhà nhà ấm áp, bàn ăn đầy tiếng cười.'
  },

  /* ngày âm lịch đặc biệt: 'ngày/tháng' */
  am: {
    '1/1': 'Chúc mừng năm mới! Mùng Một Tết, chúc các bác an khang thịnh vượng, vạn sự như ý ạ!',
    '2/1': 'Mùng Hai Tết rồi, đi chúc Tết nhà ngoại chưa các mom?',
    '3/1': 'Mùng Ba Tết thầy – chúc các bác năm mới học hành, làm ăn đều hanh thông.',
    '15/1': 'Rằm tháng Giêng – “lễ quanh năm không bằng rằm tháng Giêng”, chúc cả nhà bình an.',
    '3/3': 'Tết Hàn thực mùng 3/3 – nhà nào nặn bánh trôi bánh chay chưa ạ?',
    '5/5': 'Tết Đoan Ngọ – ăn tí rượu nếp, hoa quả “giết sâu bọ” đi các bác!',
    '15/7': 'Rằm tháng Bảy, mùa Vu Lan báo hiếu. Nhớ ơn cha mẹ, ông bà, tổ tiên các bác nhé.',
    '15/8': 'Tết Trung thu rồi! Chúc các bạn nhỏ rước đèn thật vui, người lớn phá cỗ thật ngon.',
    '23/12': 'Hôm nay tiễn ông Công ông Táo về trời, nhà mình chuẩn bị cá chép chưa ạ?',
    'ram': 'Hôm nay ngày rằm, trăng tròn sáng đẹp, chúc các bác tâm an, nhà yên.',
    'mung1': 'Hôm nay mùng Một, chúc các bác một tháng mới thuận buồm xuôi gió.'
  },

  /* câu để dành – chuyện bếp, lời hay, mẹo nhỏ (hiện ngẫu nhiên, không lặp) */
  de_danh: [
    '“Nhà em ăn như nào em làm cho mọi người y như thế luôn.”',
    '“Cứ phải cầu kì, cứ phải cẩn thận, cứ phải là ngon nhất mới làm.”',
    'Ăn với cơm thôi cũng phải đẹp.',
    'Một trái tim biết ơn là một trái tim hạnh phúc.',
    'Thở đi nhẹ một kiếp người, vui đi để có nụ cười thênh thang.',
    'Đi qua ngày mưa, yêu thêm những ngày nắng.',
    'Vẫn yêu đời dù mưa hay bão – đời của mình cứ vẽ cho xinh.',
    'Mẹo nhỏ: vo gạo nhẹ 1–2 lần là đủ, gạo có phải áo đâu mà giặt.',
    'Mẹo nhỏ: chảo đang nóng đừng xả nước lạnh, để nguội rồi hẵng rửa cho chảo bền.',
    'Mẹo nhỏ: cá nước ngọt phải nấu chín – chanh, ớt, rượu không diệt được sán đâu ạ.',
    'Mẹo nhỏ: miếng mút rửa chén thay mỗi tuần, bàn chải có cán thì khô nhanh, sạch hơn.',
    'Mẹo nhỏ: tôm luộc xong thả ngay vào nước đá cho thịt chắc, dễ bóc.',
    'Mẹo nhỏ: chả nem rán sơ rồi để nguội, lúc ăn rán lại lửa hai mới giòn lâu.',
    'Mẹo nhỏ: thái khoai mà dính dao thì kéo dao tới lui một chút thay vì ấn thẳng.',
    'Mẹo nhỏ: đồ nóng, đồ chua thì đựng thủy tinh, inox, sứ – đừng đựng hộp xốp.',
    'Mẹo nhỏ: ốc nhồi hấp 10–15 phút từ lúc nước sôi mạnh là vừa chín tới.',
    'Mắm tép chưng với thịt băm, vàng ươm, bóng bẩy, sực mùi gừng hành.',
    'Hương xa, mùi thịt chưng buổi sáng – hương xa, mùi hành, sả mới ép xong.',
    'Bất kể ở đâu, nếu lên đường ngay được là em sẵn sàng đi giao cho khách.',
    'Mỗi người sinh ra mang theo nhân quả khác nhau – cứ gieo điều tốt các bác ạ.',
    'Khi ta yêu cuộc sống bằng tất cả chân thành, nỗi buồn rồi cũng hóa màu hy vọng.',
    'Ở bên anh em không cần phải nhớn – ông chủ nhà em bảo thế 😜',
    'Sở trường em ít mà sở đoản em nhiều, nhưng nấu ăn thì em chịu khó lắm.',
    'Cơm nóng xới vội, chan đầy yêu thương – món ngon bình dị, ấm lòng người xa.',
    'Bếp sạch thì nhà khỏe, nhà khỏe thì mình mới vui mà nấu tiếp.'
  ]
};

/* Chọn lời chào. Trả về {chao, them} */
window.chonLoiChao = function (now, amLich) {
  var C = window.LOI_CHAO, h = now.getHours();
  var nhom = h < 5 ? 'khuya' : h < 8 ? 'sangSom' : h < 11 ? 'sang' : h < 14 ? 'trua' : h < 18 ? 'chieu' : h < 22 ? 'toi' : 'dem';
  var daXem = [];
  try { daXem = JSON.parse(localStorage.getItem('bep_chao') || '[]'); } catch (e) {}
  function chon(ds, khoa) {
    var con = ds.filter(function (_, i) { return daXem.indexOf(khoa + i) < 0; });
    if (!con.length) { daXem = daXem.filter(function (x) { return x.indexOf(khoa) !== 0; }); con = ds; }
    var x = con[Math.floor(Math.random() * con.length)];
    daXem.push(khoa + ds.indexOf(x));
    return x;
  }
  var dacBiet = C.duong[now.getDate() + '/' + (now.getMonth() + 1)];
  if (!dacBiet && amLich) {
    dacBiet = C.am[amLich.d + '/' + amLich.m] || (amLich.d === 15 ? C.am.ram : amLich.d === 1 ? C.am.mung1 : '');
  }
  if (!dacBiet && C.thu[now.getDay()] && Math.random() < 0.35) dacBiet = C.thu[now.getDay()][0];
  var chao = chon(C.gio[nhom], nhom);
  var them = chon(C.de_danh, 'dd');
  try { localStorage.setItem('bep_chao', JSON.stringify(daXem.slice(-40))); } catch (e) {}
  return { chao: dacBiet ? dacBiet + ' ' + chao : chao, them: them };
};
