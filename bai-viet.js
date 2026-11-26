/* =========================================================
   KHO BÀI VIẾT CỦA CÔ KỸ
   Mỗi bài là một khối { ... }. Thêm bài mới: chép một khối, sửa nội dung.
   - ngay   : ngày chị đăng gốc trên Facebook, dạng "2024-11-24" (để "" nếu chưa rõ)
   - muc    : "bep" (chuyện bếp) · "nha" (chuyện nhà) · "ban" (bếp bán)
              · "noingoai" · "vuon" · "khoe" · "di" (đi đây đó)
   - tieuDe : tiêu đề ngắn
   - anh    : tên ảnh trong thư mục img/, ảnh đầu là ảnh bìa
   - noiDung: nguyên văn bài, xuống dòng bình thường
   - nguon  : "Facebook" nếu bài đăng lần đầu trên Facebook
   - loa    : (tùy chọn) bài Cô Kỹ KÊU GỌI ĐẶT HÀNG thì ghi một câu ngắn, vd  loa:"Mẻ kim chi mới, nhận đơn đến hết thứ Bảy ạ!"
              → trang chủ hiện cái loa rung + nút "📣 Đang nhận đơn" (tin-moi.js). Bếp đang nghỉ thì loa tự ẩn.
   - loaDen : (tùy chọn) loa hiện đến hết ngày này, dạng "2026-11-30"; bỏ trống = 3 ngày sau ngày đăng
   Bài mới nhất tự lên bảng TIN MỚI trên căn bếp. Link mở thẳng bài: bepcoky.com/#bai=<tên ảnh bìa bỏ -01.jpg>, vd #bai=261126
   LƯU Ý: kho GitHub công khai – không đưa ảnh các con, ảnh chụp tin nhắn,
   số điện thoại hay thông tin của khách vào đây.
   ========================================================= */
window.BAI_VIET = [
/* ---- Bài mới (thêm 26/11/2026) ---- */
{ngay:"2026-11-26", muc:"bep", tieuDe:"Giữa tuần lên nguyên combo Bò", anh:["fb/261126-01.jpg", "fb/261126-02.jpg", "fb/261126-03.jpg", "fb/261126-04.jpg"], nguon:"Facebook",
noiDung:`Giữa tuần ăn món gì cho lạ mà ấm bụng? Vẫn là chiều lòng hợp ý của các cô chiêu cậu ấm nhà ông chủ thì nay em lên nguyên combo Bò nha quý zị😂😂😂`},

/* ---- 145 bài nhập từ ảnh chụp Facebook 01–10/2026 (D:\New App 2026\Bep co Ky Web\Cac bai viet 2026\_md), cập nhật 27/11/2026 ---- */
{ngay:"2026-10-19", muc:"noingoai", tieuDe:"Anh Chí xuống bếp xem Nở nấu gì", anh:["fb/191026-01.jpg"], nguon:"Facebook",
noiDung:`Đi làm về anh Chí xuống bếp xem Nở nấu gì mà thơm từ ngõ thơm vào thế😜😜😜.
- Anh Chí: Này không được rồi, phải tống em đi chơi thôi chứ để ở nhà như này nghịch lắm😜😜😜
- Nở: 🤣🤣🤣, bố để yên cho em nghịch được không?`},

{ngay:"2026-10-18", muc:"bep", tieuDe:"Tôm này làm những món gì? – 11 món biến tấu", anh:["fb/181026-1-01.jpg", "fb/181026-2-01.jpg"], nguon:"Facebook",
noiDung:`Nhiều chị em hỏi: tôm này thì làm những món gì?
Vâng rất nhiều món dễ ăn chị em ạ:
- Nấu bánh đa- miến
- Tẩm bột chiên
- Nấu súp
- Gỏi cuốn
- Trộn sa lát
- Sốt cà chua
- Rim mắm đường
- Cho vào nồi chiên nóng chấm tương ớt.
- Nấu canh rau ngót, tơi, cải
- Piza
- Xào miến, mướp- nấm hương.....
Nói chung dễ biến tấu ạ!`},

{ngay:"2026-10-17", muc:"ban", tieuDe:"Khách ăn xong đi tuyên truyền bán hộ em", anh:["fb/171026-1-01.jpg", "fb/171026-1-02.jpg", "fb/171026-1-03.jpg", "fb/171026-1-04.jpg", "fb/171026-2-01.jpg"], nguon:"Facebook",
noiDung:`🌹☘️🌼 Khách nhà em ăn đồ của em xong đi tuyên truyền cho người nhà cho bạn bè xong bán hộ em luông😂😂😂. Thế tết này khách lại có quà to em tri ân rồi ạ he he`},

{ngay:"2026-10-15", muc:"ban", tieuDe:"Hơn 20 kg tôm – ăn đã ngon lên ảnh cũng phải đẹp", anh:["fb/151026-1-01.jpg", "fb/151026-1-02.jpg", "fb/151026-1-03.jpg", "fb/151026-2-01.jpg"], nguon:"Facebook",
noiDung:`📌♻️🌼 Hơn 20kg tôm. Ăn đã ngon lên ảnh cũng phải đẹp😂`},

{ngay:"2026-10-14", muc:"ban", tieuDe:"Mải làm cho khách nên lên mâm hơi muộn", anh:["fb/141026-1-01.jpg"], nguon:"Facebook",
noiDung:`👉👉👉 Mải làm cho khách nên em lên mâm hơi muộn. Cơ mà dễ ăn không ngán đâu quý zị ạ😂😂😂`},

{ngay:"2026-10-12", muc:"bep", tieuDe:"Bóc chục cân hành mà cả nhà nước mắt giàn giụa", anh:["fb/121026-1-01.jpg"], nguon:"Facebook",
noiDung:`Em bóc có chục cân hành mà cả nhà nước mắt giàn giụa mỗi em không thì chồng em bảo: Mắt em mắt lửa ngươi vàng à?😜😜😜`},

{ngay:"2026-10-12", muc:"ban", tieuDe:"Đang ăn cơm cũng buông bát đi giao", anh:["fb/121026-a-01.jpg", "fb/121026-a-02.jpg", "fb/121026-a-03.jpg"], nguon:"Facebook",
noiDung:`🌹Trưa em ship cho khách 3kg rồi xong thì 8h tối đang ăn cơm thì: alo chị ơi ship luôn em 2kg nữa để em gửi đi cho người nhà bay chuyến muộn được không ạ?
Ôi, được quá ấy chứ em. Thế là buông bát đũa em đóng hàng rồi lên đường ngay về em còn kịp phi hành cho khách sáng mai lấy gửi đi nữa ạ! Bất kể ở đâu nếu lên đường ngay được là em sẵn sàng nên khách cứ yên tâm nếu tin tưởng em nhé ạ! ❤️`},

{ngay:"2026-10-12", muc:"ban", tieuDe:"Mắm tép chưng với thịt băm – thơ quảng cáo của em", anh:["fb/121026-b-01.jpg"], nguon:"Facebook",
noiDung:`Mắm tép chưng với thịt băm,
Vàng ươm, bóng bẩy, sực mùi gừng hành.
Trưa hè cho tới đông lạnh,
Cơm nóng xới vội, chan đầy yêu thương.
Mặn mà, béo ngậy, vấn vương,
Món ngon bình dị, ấm lòng người xa.
📞 Alo 0342.668.311 hoặc ib em nhé mọi người!`},

{ngay:"2026-10-10", muc:"nha", tieuDe:"Năm nay sao nhanh đến Tết thế", anh:["fb/101026-01.jpg"], nguon:"Facebook",
noiDung:`Năm nay sao em thấy nhanh đến tết thế các bác nhỉ? Nghĩ đến tết là em chỉ muốn xỉu vì cá là mệt mỏi. Không có gì thay đổi thì 4 tháng nữa thôi là chúng mình cùng đón giao thừa á😂😂😂. Và tết thì em chỉ thích đúng đêm giao thừa, khoảnh khắc chuyển giao tiễn năm cũ đón năm mới😂`},

{ngay:"2026-10-09", muc:"khoe", tieuDe:"Chính thức em say cà phê", anh:["fb/091026-cafe-01.jpg"], nguon:"Facebook",
noiDung:`Đùa chứ, lâu lâu thèm mới uống thôi có phải ngày nào em cũng táp thế này đâu mà hơn tiếng sau chân tay lòng mề em run rụng rời không lê lết nổi thế này nhỉ?😔😔😔. Đấy là còn may, bảo sao sáng nay chồng em ra cửa đi làm rồi lại lộn vào nhà nhòm em hồi lâu rồi bảo: em uống gì uống lắm thế rồi ở nhà một mình làm sao ai đỡ được, cứ tưởng uống ké ngụm của chồng hớp thôi mà uống cả cốc kinh thật( trước giờ chồng em vẫn là người tiên lượng rất chuẩn nhá😜😜😜) rồi bố cháu uống nốt hộ 1/3 chỗ này mà giờ em còn thế này chứ em xơi tất chắc giờ xùi bọt mép không cầm nổi điện thoại đăng bài này đâu á😜😜😜. Chính thức em say cà phê😂`},

{ngay:"2026-10-09", muc:"noingoai", tieuDe:"Chuyện say thuốc lào giấu kín 34 năm", anh:["fb/091026-2-01.jpg"], nguon:"Facebook",
noiDung:`Em cũng đã từng say thuốc lào hồi trẻ trâu ở quê thấy mẹ rít thuốc kêu rõ vui tai kích thích não bộ em muốn thử, nhả khói thật điêu luyện nhiều lần. Em cũng tranh thủ bố mẹ đi làm đồng chưa về em bắt chiếc cũng lấy que đóm gẩy bã thuốc cũ đi, vét sạch vụn bã quanh miệng bát điếu, vê thuốc cho vào, lấy que đóm rồi dùng ngón út cũng gẩy vào que đóm kêu tanh tách trước khi châm lửa như người nhớn😂😂😂. Em vẫn nhớ cái đoạn vừa thao tác nhưng tai vẫn dóng lên hóng tiếng bố mẹ ngoài ngõ đi làm về chưa mà tim đập loạn xạ😂. Rồi thì cái gì đến cũng đến, lửa đã lên dí vào miệng bát điếu tay còn lại giữ xe điếu miệng cũng chu ra rụt vào rít kiểu lấy đà 3 hơi( em làm y như mẹ em rít hàng ngày😂😂😂) để rít phát cuối thật sâu thật dứt khoát và thật nhanh gọn rồi hơi ngửa cổ lên nhả khói điêu luyện như mẹ rồi chững lại một nhịp nuốt thật mạnh chỗ hơi và khói còn lại vào bụng( kiểu hơi đầu nhả hết chất độc thì chỗ còn lại là chất thì giữ lại trong bụng á😂. Ngày ấy em ngầm hiểu là như vậy chứ em không dám hỏi bố mẹ tại sao lại làm như thế😂😂). Nuốt xong tay cầm xe điếu gác lên miệng bát, rót cốc nước chè tươi uống xong rồi thì chân vắt chéo lên nhau ngồi kiểu thưởng thức thư giãn ấy. Ờ rồi xong thì sao. Cha mẹ quỷ thần ơi em ruột gan em làm sao thế này? Chỉ đúng chưa đầy 5 phút sau thì các ngón tay của em bắt đầu có dấu hiệu cứng, co quắp rồi nước bọt ở đâu ra mà nó tứa ngập mồm em lúc nào không hay, nó chảy tự do em không kiểm soát được nó cơ😂😂😂, cố nuốt ngược lại nhưng không được😜. Lúc này thì em muốn quỵ xuống rồi và mắt mũi em cũng lờ đờ nhưng đầu em vẫn nghĩ sợ chớt😜, sợ bố mẹ về là ăn lươn no chứ đùa. Ruột gan bắt đầu nhào lộn ghê gớm mà em chỉ ú ớ không gọi to được. Lần 2 cái gì đến cũng đến, bố mẹ về hai cụ tá hoả tưởng con bị sao( còn tưởng em nghịch gì uống nhầm thuốc trừ sâu😜😜😜) kêu gọi em xong em vẫn ú ớ trong nước mắt bảo con hút thuốc lào giống mẹ😂😂. Khốn khổ em xanh mắt đến giờ không dám kể với ai suốt 34 năm cho đến hôm nay em say cà phê từ sáng đến tận chiều tối chồng em đi làm về nhìn em dẹo ở ghế không cầm nổi cốc nước uống rồi cười điêng kèm câu: em thấy ngu người chưa😜😜😜. Em còn vụ 2 vợ chồng uống thử bia 9 độ say cả chấy xong bò lên cầu thang cứ đứa sau bấu chân đứa trước cả tiếng đồng hồ không lên nổi trên tầng 2🤣🤣🤣`},

{ngay:"2026-10-07", muc:"bep", tieuDe:"Trời se lạnh thèm bánh mì nóng giòn", anh:["fb/071026-01.jpg", "fb/071026-02.jpg", "fb/071026-03.jpg"], nguon:"Facebook",
noiDung:`Nay thời tiết se lạnh tự nhiên lại thèm cái bánh mì nhiều ruột nóng hổi này. 6k thoả mãn cho một con vã😂😂😂`},

{ngay:"2026-10-06", muc:"ban", tieuDe:"Kimbap: mấy hôm nay em lắp mô tơ mới kịp", anh:["fb/061026-1-01.jpg", "fb/061026-1-02.jpg"], nguon:"Facebook",
noiDung:`Mấy ngày nay em toàn nắp mô tơ vào đuýt mới kịp. Các vợ cứ thương em thì em cũng hết lòng và quên luôn cái đau lưng cái tê tay cái đau vai gáy😂😂😂`},

{ngay:"2026-10-05", muc:"bep", tieuDe:"Bắp cải cuộn thịt theo nguyện vọng các thành viên", anh:["fb/051026-01.jpg", "fb/051026-02.jpg", "fb/051026-03.jpg", "fb/051026-04.jpg"], nguon:"Facebook",
noiDung:`🌹☘️📌 Thể theo nguyện vọng của các thành viên thì mẹ đã hoàn thành. Việc còn lại để mấy cái dạ dày của các đại ca lo nhá😂😂😂`},

{ngay:"2026-10-04", muc:"di", tieuDe:"Còn thời cưỡi ngựa bắn cung", anh:["fb/041026-01.jpg", "fb/041026-02.jpg", "fb/041026-03.jpg", "fb/041026-04.jpg", "fb/041026-05.jpg"], nguon:"Facebook",
noiDung:`Còn thời cưỡi ngựa bắn cung
Hết thời vô bếp cầm cung bắn ruồi😜😜😜`},

{ngay:"2026-10-04", muc:"bep", tieuDe:"Ngày thường kiếm xèng, cuối tuần làm điều mình thích", anh:["fb/041026-1-01.jpg", "fb/041026-1-02.jpg", "fb/041026-1-03.jpg", "fb/041026-1-04.jpg", "fb/041026-2-01.jpg"], nguon:"Facebook",
noiDung:`Ngày thường kiếm xèng, theo zai thì ngày cuối tuần làm điều mình thích. Sở trường em ít mà sở đoản em nhiều🤣🤣🤣`},

{ngay:"2026-10-03", muc:"noingoai", tieuDe:"Xin phép chồng đi chơi nhưng không quên nhiệm vụ", anh:["fb/031026-01.jpg", "fb/031026-02.jpg", "fb/031026-03.jpg"], nguon:"Facebook",
noiDung:`Xin phép chồng em đi chơi nhưng vẫn không bao giờ quên nhiệm vụ😜😜😜. Anh ở nhà ăn xôi uống thuốc đầy đủ vợ đi chơi nhá😜😜😜`},

{ngay:"2026-10-03", muc:"ban", tieuDe:"Xôi vò siêu tơi rời, khô dẻo không bết", anh:["fb/031026-xoi-01.jpg"], nguon:"Facebook",
noiDung:`Siêu tơi rời với em xôi vò khô dẻo không bết dính vón cục. Màu vàng chanh đẹp mắt lên mâm cúng nhà khách thì thôi rồi.
Chị bảo: xôi vò em nấu cuối mâm khách thi nhau xin túi gói về cho ông nhà tôi, cho các cháu....
Phản hồi đó khiến tâm huyết em vào bếp của em thật xứng đáng, quên những giọt mồ hôi đầm đìa ướt hết người dưới cái nóng oi ả của cuối tháng 8 âm. Vâng, em vẫn nấu xôi vò phục vụ khách từ nay đến cuối năm nhá quý zị! Cảm ơn khách đã tin tưởng và quý mến em!🥰🥰🥰`},

{ngay:"2026-10-02", muc:"bep", tieuDe:"Nạp năng lượng rồi chiến tiếp", anh:["fb/021026-uong-nuoc-01.jpg"], nguon:"Facebook",
noiDung:`Nạp năng lượng rồi chiến tiếp nào🥰`},

{ngay:"2026-09-30", muc:"noingoai", tieuDe:"Cụ Chí và Thị Nở quên kính", anh:["fb/300926-2-01.jpg"], nguon:"Facebook",
noiDung:`🌹🌹🌹 Nay có khi em cười nguyên ngày các vợ ạ. Chả là nay hai đứa em rủ nhau đi tí công chuyện. Cụ Chí dắt xe quay đầu xong rồi chỉ chờ thị Nở ra là lên đường, chao ôi cái não Nở lại hay quên nên trước khi ra khỏi nhà là quên đủ thứ cứ đi ra đi vô vài lần mới nhớ hết những đồ nghề cần mang😜 nhất là hai quả kính riêng biệt 1 nhìn xa 1 nhìn chữ😂.
Như nay đi ra cổng cụ Chí chuẩn bị khoá cổng thì Nở mới nhớ ra quên cả hai kính nên muốn quay vào lấy thì:
- Cụ Chí: 😒( lườm), nhanh lên( hơi quát😛)
- Thị Nở: Cười😜😜😜😜😜
Rồi em vào tìm kính một hồi mãi mới thấy đủ 2 cái vì cũng lú không nhớ để chúng ở xó xỉnh nào, em cũng lại cuống sợ cụ ấy cáu khiến em buồn cười😜. Vừa tìm mồm lẩm bẩm: bực thế nhỉ, nhà như có ma😜. Ở thì là thấy ngay( khúc này các vợ thử đi nếu mình không tìm thấy đồ cáu tiết cứ lẩm bẩm câu đó đảm bảo thấy liền, Em chiêm nghiệm mãi rồi á😜😜😜). Xong thì chờ lâu quá cụ Chí cũng lượn vào:
- Cụ Chí: Em ngủ trong nhà à? Lại lườm😒😒😒
- Nở: Vẫn không nói gì mà chỉ cười to hơn, ngặt nghẽo hơn🤣🤣🤣🤣
Em vừa đi ra vừa mải cười cụ lại đá em phát rồi bẩu:
- Nhìn ngứa mắt thế không biết🤣🤣🤣( nói tận 3 lần đến lúc ngồi lên xe nhá🤣🤣🤣. Quả này thì em cười vật vã hơn, cười bò ra xe không chèo lên xe nổi xong cụ lại tiếp nhời.
- Cười cái..... ấy😜😜😜
Đùa chứ đầu em chí hình dung và tưởng tượng lại bị phong phú á nên em cười không ngậm được mồm ra tận bãi xe vẫn cười. Lên xe cụ vẫn sổ thêm mấy câu nữa thì em quyết định lên bài này dìm cụ😜😜🤣.
👉 Rồi thì sao, đến nơi cần đến và giải quyết việc cần giải quyết thì ối dồi ôi chúc mừng anh chị đã quay vào ô mất điện nên không được việc rồi. Chí lại dắt díu Nở về lên xe cái cụ lại tiếp:
- Cụ Chí: Nhọ thật😜
- Nở: Ai bảo trước khi đi cứ mắng vợ cơ🤣🤣🤣.
- Cụ Chí: Bẩm bà lần sau em không thế nữa🤣🤣🤣
☘️ Thời tiết sang thu rồi mà cái nóng bức oi ả nó vẫn hoành hành đến mệt. Nhớ cái mưa cái ren rét, lành lạnh, mát mẻ của VT`},

{ngay:"2026-09-28", muc:"ban", tieuDe:"Gần chục cân tôm – cứ phải cầu kì mới làm", anh:["fb/280926-01.jpg"], nguon:"Facebook",
noiDung:`🌹☘️📌Gần chục cân tôm chỉ luộc lên rồi bóc nõn giao khách thì quá đơn giản và không mất nhiều thời gian.
 Vâng đúng vậy đó ạ và ai cũng làm được chỉ là có thích hay không thôi, nhưng với em thì gần như hết ngày với gần chục kí lô tôm bóc nõn làm sạch dư này đấy ạ! Với em lấy được tiền của các bác không đơn giản như những gì mọi người nói đâu. Cứ phải cầu kì, cứ phải cẩn thận, cứ phải là ngon nhất mới làm, cứ phải là nhà mình ăn như nào thì khách cũng sẽ được ăn y như thế thì đêm em ngủ mới ngon giấc được các bác ạ😂😂😂`},

{ngay:"2026-09-25", muc:"noingoai", tieuDe:"5 người chia 3 phe – đêm Trung thu nhà em", anh:["fb/250926-01.jpg", "fb/250926-02.jpg", "fb/250926-03.jpg"], nguon:"Facebook",
noiDung:`☘️📌♻️ 5 người chia 3 phe móc nối 3 đầu cầu và kết thúc đêm rằm trung thu. Rồi thì chúng đã lớn tự nhận trách nhiệm chăm sóc nhau, tự lo được cho nhau và để anh bố đưa chị mẹ đi đón chị Hằng riêng cơ😜😜😜.`},

{ngay:"2026-09-25", muc:"noingoai", tieuDe:"Nhớ mẹ – thế mà đã 11 năm rồi", anh:["fb/250926-ve-que-2-01.jpg"], nguon:"Facebook",
noiDung:`Nhớ mẹ❤️
Thế mà đã 11 năm rồi
Mẹ tôi bỏ lại cuộc đời dở dang
Nước mắt lã chã hai hàng
Lòng con vẫn nặng bóng hình Mẹ yêu.

Con ngồi lặng lẽ hồi lâu,
Ngỡ như mẹ vẫn ở đâu, quanh mình
Cuộc đời sao quá vô tình
Để cho Bố Mẹ một mình, chốn xa?

Những chiều con ghé qua nhà
Đâu rồi dáng mẹ, vào ra đợi chờ
Thương sao những sớm tinh mơ
Con thầm gọi mẹ giữa mờ mờ sương.

Mẹ ơi nơi cõi vô thường
Con xin mẹ chớ vấn vương nặng lòng
Ngày ngày con vẫn cầu mong
Cho mẹ được đến cõi Bồng, cảnh Tiên

Con mẹ sẽ sống thật lành
Mong linh hồn mẹ cửa Thiền, ngát hoa.❤️`},

{ngay:"2026-09-23", muc:"bep", tieuDe:"Em cũng có quà Trung thu", anh:["fb/230926-01.jpg", "fb/230926-02.jpg"], nguon:"Facebook",
noiDung:`Em cũng có quà trung thu á😂😂😂`},

{ngay:"2026-09-20", muc:"bep", tieuDe:"Mua mít tố nữ lại ra mít tố nam", anh:["fb/200926-01.jpg", "fb/200926-02.jpg"], nguon:"Facebook",
noiDung:`Lần đầu tiên mua mít tố nữ xong thì lại ra mít tố nam với nửa nam nửa nữ😜😜😜`},

{ngay:"2026-09-16", muc:"vuon", tieuDe:"Nhà có kiến cũng tại em", anh:["fb/160926-01.jpg"], nguon:"Facebook",
noiDung:`Vâng: nhà có kiến cũng tại em, có ruồi cũng do em, có gián cũng từ em mà ra và có chuột cũng do em nuôi nó. Tất cả là tại em được chưa😂. Vậy thì làm thế nào để không cảm thấy khó chịu và làm sao để bản thân thấy mãn nguyện? Chỉ còn cách thay mái đúng không các vợ😜😜😜?`},

{ngay:"2026-09-15", muc:"bep", tieuDe:"Chanh leo vàng ngọt thật các chị em ạ", anh:["fb/150926-01.jpg"], nguon:"Facebook",
noiDung:`Chanh leo vàng ngọt thật các chị em ạ. Em nghe đồn lâu rồi mà nay mới mạnh dạn thử. 70k/1kg được 14 quả😂😂😂`},

{ngay:"2026-09-12", muc:"ban", tieuDe:"Tôm bóc nõn: khâu rút chỉ để em lo", anh:["fb/120926-01.jpg"], nguon:"Facebook",
noiDung:`☘️📌♻️Mua tôm ngoài chợ thì lúc nào cũng sẵn, mua về bắc lên bếp sôi nước lên cho tôm vào rồi bỏ ra bóc cũng đơn giản, nhưng thêm khâu lấy các đường chỉ tôm và dạ dày ở đuôi tôm thì không phải cô bác chị em nào cũng có thời gian để làm vì bận nhiều công việc khác. Vậy nếu quý vị tin tưởng và giành công việc đó cho em, em đảm bảo về mọi người chỉ việc bỏ ra chế biến theo từng món sở thích của gia đình mình mà không phải lo về chất lượng. Vẫn là khẩu hiệu đó: Nhà em ăn như nào em làm cho mọi ngươi y như thế luôn.
📞📞📞 0342.668.311 nhớ alo em nếu cần nhé ạ!`},

{ngay:"2026-09-12", muc:"ban", tieuDe:"Mát zời với cơm nóng, cơm nguội, bánh mì, xôi", anh:["fb/120926-thit-trung-01.jpg"], nguon:"Facebook",
noiDung:`📌📌📌 Mát zời nhá món này với cơm nóng cơm nguội bánh mì, xôi đều ok các bác ạ! Lên đơn alo em nhé!`},

{ngay:"2026-09-11", muc:"noingoai", tieuDe:"Thêm tuổi mới mong anh vững tay lái", anh:["fb/110926-01.jpg"], nguon:"Facebook",
noiDung:`❤️Thêm tuổi mới mong anh vững tay lái, chắc tay chèo, sức khoẻ dồi dào đưa con thuyền nhỏ bé của chúng mình về bờ an toàn và hạnh phúc anh nhé! Happy birthday! Mẹ con em yêu thương anh nhiều lắm ạ!😘😘😘`},

{ngay:"2026-09-10", muc:"ban", tieuDe:"Em vẫn cật lực làm, quý zị lên đơn nha", anh:["fb/100926-01.jpg"], nguon:"Facebook",
noiDung:`Em vẫn cật lực làm quý zị lên đơn nha hi`},

{ngay:"2026-09-08", muc:"di", tieuDe:"Nhìn nghịch ngợm thế thôi chứ sản phẩm này hay dỗi", anh:["fb/080926-01.jpg", "fb/080926-02.jpg", "fb/080926-03.jpg", "fb/080926-04.jpg", "fb/080926-05.jpg"], nguon:"Facebook",
noiDung:`Nhìn nghịch ngợm thế thôi chứ sản phẩm này hay dỗi. Xin chiều chuộng và yêu thương😜😜😜`},

{ngay:"2026-09-07", muc:"ban", tieuDe:"Nghỉ lễ ăn chơi xong thì phải cày thôi", anh:["fb/070926-01.jpg"], nguon:"Facebook",
noiDung:`Nghỉ lễ ăn chơi cũng xong rồi thì phải cày thôi các bác nhỉ? Alo- ib em là các bác có đơn ạ`},

{ngay:"2026-09-03", muc:"di", tieuDe:"Hà Nội chiều hôm ấy", anh:["fb/030926-01.jpg", "fb/030926-02.jpg", "fb/030926-03.jpg", "fb/030926-04.jpg", "fb/030926-05.jpg"], nguon:"Facebook",
noiDung:`Hà Nội chiều hôm ấy!`},

{ngay:"2026-09-03", muc:"ban", tieuDe:"Nghỉ lễ xong rồi, lại đảo thịt chưng", anh:["fb/030926-thit-trung-01.jpg"], nguon:"Facebook",
noiDung:`Vâng tất cả cứ bình thường là đời vui rồi ! Nghỉ lễ xong rồi các bác lên đơn em ship nha😂`},

{ngay:"2026-08-28", muc:"di", tieuDe:"Vẫn yêu đời dù mưa hay bão", anh:["fb/280826-01.jpg"], nguon:"Facebook",
noiDung:`🥰 Vẫn Yêu đời dù mưa hay bão.
Đời của mình cứ vẽ cho xinh🌹`},

{ngay:"2026-08-25", muc:"ban", tieuDe:"Chả nem rán sơ – về rán lại lửa hai cho giòn", anh:["fb/250826-01.jpg"], nguon:"Facebook",
noiDung:`🌹 Rán sơ qua thế này cho khách về rán lại lửa nữa cho giòn rồi bày lên mâm thắp hương gia tiên ngày rằm tháng 7. Tháng Vu Lan Báo Hiếu nhớ ơn tổ tiên cội nguồn! 🌹
P/s: Em hết chả nem và cũng ngừng nhận đơn nhá khách ơi. Em đuối rồi á😂`},

{ngay:"2026-08-22", muc:"di", tieuDe:"Đi qua ngày mưa, yêu thêm những ngày nắng", anh:["fb/220826-01.jpg", "fb/220826-02.jpg", "fb/220826-03.jpg", "fb/220826-04.jpg", "fb/220826-05.jpg"], nguon:"Facebook",
noiDung:`🌹Đi qua ngày mưa, yêu thêm những ngày nắng!🌹`},

{ngay:"2026-08-22", muc:"nha", tieuDe:"5 năm sau lùn đi các bác ạ", anh:["fb/220826a-01.jpg", "fb/220826a-02.jpg"], nguon:"Facebook",
noiDung:`5 năm sau lùn đi các bác ạ😜😜😜`},

{ngay:"2026-08-21", muc:"ban", tieuDe:"Mưa mát trời, thịt chưng là chân ái", anh:["fb/210826-01.jpg", "fb/210826-02.jpg", "fb/210826-03.jpg"], nguon:"Facebook",
noiDung:`♻️‼️☘️ Mưa mát trời em ấy là chân ái luôn ấy các bác ạ! Lên đơn ới em nha`},

{ngay:"2026-08-13", muc:"di", tieuDe:"Thở đi nhẹ một kiếp người", anh:["fb/130826-01.jpg"], nguon:"Facebook",
noiDung:`☘️🌹♻️ Thở đi nhẹ một kiếp người
Vui đi để có nụ cười thênh thang.`},

{ngay:"2026-08-10", muc:"ban", tieuDe:"Em đi chữa lành về rồi – khách chờ em trả đơn", anh:["fb/100826-01.jpg", "fb/100826-02.jpg", "fb/100826-03.jpg"], nguon:"Facebook",
noiDung:`Em đi chữa lành về rồi ạ😂. Khách chờ em trả đơn dần dần nhá! Nay em trả tạm từng này, còn lại đến cuối tuần em trả nốt nha quý zị🥰`},

{ngay:"2026-08-05", muc:"ban", tieuDe:"Hương xa, mùi thịt chưng buổi sáng", anh:["fb/050826-thit-trung-01.jpg"], nguon:"Facebook",
noiDung:`Hương xa, mùi #THỊT_CHƯNG buổi sáng
Hương xa, mùi hành- xả mới ép xong.
Hương xa, người ấy luôn bên cạnh
Làm tim loạn nhịp hóa mong manh.😂😂😂

Các ido cần cứ Alo-ib em nhé!`},

{ngay:"2026-07-28", muc:"di", tieuDe:"Anh yêu nắng hay yêu em?", anh:["fb/280726-01.jpg", "fb/280726-02.jpg", "fb/280726-03.jpg", "fb/280726-04.jpg"], nguon:"Facebook",
noiDung:`🌹🌹🌹Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?"😂😂😂`},

{ngay:"2026-07-13", muc:"ban", tieuDe:"Cứ nhẩn nha thế này cho đỡ cuống khách", anh:["fb/130726-01.jpg"], nguon:"Facebook",
noiDung:`Cứ nhẩn nha thế này thôi cho đỡ cuống khách nhé!🥰🥰🥰`},

{ngay:"2026-07-09", muc:"di", tieuDe:"Ai cài lên tóc em vào mùa hạ", anh:["fb/090726-01.jpg", "fb/090726-02.jpg"], nguon:"Facebook",
noiDung:`Ai cài lên tóc em vào mùa hạ, để tình mình xa lạ những ngày đông.😜😜😜`},

{ngay:"2026-07-02", muc:"khoe", tieuDe:"Sau hai ngày chạy bộ, đùi với bắp chân đau nhừ", anh:["fb/020726-01.jpg", "fb/020726-02.jpg", "fb/020726-03.jpg"], nguon:"Facebook",
noiDung:`Sau hai ngày đầu thì hai cái đùi với hai cái bắp chân nó đau dữ bà con ạ, nhất là khúc lên xuống cầu thang mà như muốn rụng từng khúc😂. Lết lết xong lại dậm dờ nhúc nhích, thì thoảng la lên: á, ối....😜 các con nghe chúng cười sặc mà nay buổi thứ 3 bà già vẫn quyết tâm chiến đấu để cho quen nhưng vẫn chỉ cán mốc 2,5km bởi lời dụ dỗ nghỉ của Hoàng Thượng và Công Chúa nhỏ😂😂😂`},

{ngay:"2026-07-02", muc:"ban", tieuDe:"Lại là em đây – bà cô bán thịt chưng mắm tép", anh:[], nguon:"Facebook",
noiDung:`❤️Lại là em đây bà cô bán thịt chưng mắm tép ạ😂`},

{ngay:"2026-07-01", muc:"khoe", tieuDe:"Muốn khỏe mạnh phải thể dục thể thao", anh:["fb/010726-01.jpg", "fb/010726-02.jpg"], nguon:"Facebook",
noiDung:`Muốn khoẻ mạnh phải thể dục thể thao. Bao nhiêu lần thực hiện rồi lại nản và bỏ cuộc. Lần này là lần thứ N thực hiện, nhất định cố gắng nhé cô gái vì sức khoẻ bản thân mình😂`},

{ngay:"2026-06-26", muc:"nha", tieuDe:"Mình nhận được nhiều hơn mình nghĩ", anh:["fb/260626-01.jpg"], nguon:"Facebook",
noiDung:`❤️Trong cuộc sống, chúng ta thường ít khi nhận ra mình nhận được nhiều hơn là cho đi. Chỉ khi chúng ta biết ơn thì cuộc sống mới trở nên giàu có. Một trái tim biết ơn là một trái tim hạnh phúc!❤️
#Thứ_6_Ngày_26_06_2026🌹`},

{ngay:"2026-06-21", muc:"di", tieuDe:"Vũng Tàu: khi ta yêu cuộc sống", anh:["fb/210626-vung-tau-01.jpg", "fb/210626-vung-tau-02.jpg", "fb/210626-vung-tau-03.jpg", "fb/210626-vung-tau-04.jpg", "fb/210626-vung-tau-05.jpg"], nguon:"Facebook",
noiDung:`Khi ta yêu cuộc sống
Bằng tất cả chân thành
Nỗi buồn rồi cũng hóa
Màu hy vọng biếc xanh.`},

{ngay:"2026-06-19", muc:"di", tieuDe:"Xung quanh đây bốn bề là thính", anh:["fb/190626-01.jpg"], nguon:"Facebook",
noiDung:`Xung quanh đây bốn bề là thính.
Bình tĩnh như em được mấy người.😜😜😜`},

{ngay:"2026-05-18", muc:"vuon", tieuDe:"Lại mưa – em tát nước to tay", anh:[], nguon:"Facebook",
noiDung:`Eo, lại mưa quý zị ạ! Cơn mưa này qua, chưa kịp rút nước cơn mưa khác lại nhẩy vào ào ào đổ nước thế nài em tát nước to tay😂😂😂`},

{ngay:"2026-05-17", muc:"vuon", tieuDe:"Mùng 1 mà lộc quá: nước đùn vào tận bếp", anh:["fb/170526-01.jpg", "fb/170526-02.jpg", "fb/170526-03.jpg"], nguon:"Facebook",
noiDung:`Chỗ nhà các bác thế nào rồi ạ? Nhà em là chỉ lụt ngoài sân vườn mà không hiểu sao trong nhà phòng khách bếp nước ở khe kẽ nào đùn lên ngập hết. Nay mùng 1 mà lộc quá các bác ạ😂😂😂`},

{ngay:"2026-05-16", muc:"ban", tieuDe:"Thiếu mỗi chữ U nữa thôi là giàu", anh:["fb/160526-01.jpg"], nguon:"Facebook",
noiDung:`Thiếu mỗi chữ U nữa thôi là giàu quý zị ạ😂😂😂`},

{ngay:"2026-05-13", muc:"bep", tieuDe:"Thử dưa chuột trộn xì dầu theo mạng – ăn cũng bình thường", anh:["fb/130526-01.jpg", "fb/130526-02.jpg", "fb/130526-03.jpg", "fb/130526-04.jpg", "fb/130526-05.jpg"], nguon:"Facebook",
noiDung:`Vâng! Nay em cũng bắt chước chị em trên mạng làm thử món DƯA CHUỘT TRỘN XÌ DẦU. Có lẽ mỗi người mỗi khẩu vị khác nhau nên em thấy ăn cũng bình thường chứ không nức nở lệ nhoà như các video trên mạng. Còn chị em nào chưa thử thì làm thử ăn nhé biết đâu lại hợp khẩu vị của gia đình mình thấy ngon cũng nên😂`},

{ngay:"2026-05-11", muc:"ban", tieuDe:"Ốm dậy làm cật lực, cảm ơn khách vẫn âm thầm ủng hộ", anh:["fb/110526-01.jpg"], nguon:"Facebook",
noiDung:`🐮 Đợt vừa rồi em đau nhức tay chân nhiều nên phải dành thời gian chữa trị và nghỉ ngơi dưỡng long thể😂. Nhưng khách yêu quý, tín nhiệm vẫn âm thầm ủng hộ em nên ngày nay em làm cật lực giờ mới ngưng tay không kịp video trực tiếp luôn ạ!
❤️ Cháu/ em Cảm ơn cô chú anh chị em nhà mình lúc nào cũng thương em và đồng hành cùng em trên mọi mặt trận bất kể nắng-mưa-gió rét miễn là cả nhà thích là em Kỹ sẵn sàng vào việc ạ! 😘`},

{ngay:"2026-05-07", muc:"khoe", tieuDe:"Càng già ốm càng dai – ra vườn bói được cụm ngải cứu", anh:["fb/070526-01.jpg"], nguon:"Facebook",
noiDung:`Càng già ốm càng dai sao ấy các thím ạ, mà lần này hai ứa rủ nhau ốm cùng lúc sao mà từ tối 30/4 đến tận hôm nay  vẫn lửng cửng chưa hết cơn. Thuốc vã cũng khơ khớ phát táo bón mấy ngày không đi được, mụn cứ quanh mồm nó mọc mới ác chứ lị + thêm quả 3 con răng nó đến ngày hết đát nó giã cho cũng tới bến, ngày 3 cữ cháo loãng, đặc húp nhai phát run người mỗi lần nhìn thấy cháo😂. Cơ mà được cái tuần ốm em xuống được 2 kí lô thịt😜. Nấp trong nhà mãi cũng cớm người, nay ra vườn bói được cụm rau ngải cứu này tối làm vài ba quả trứng quả nữa tẩm bổ lấy sức cho lại người các thím ạ!😂`},

{ngay:"2026-04-30", muc:"noingoai", tieuDe:"Đêm qua mưa thật là to…", anh:["fb/300426-01.jpg", "fb/300426-02.jpg"], nguon:"Facebook",
noiDung:`Đêm qua mưa thật là to
Trăng sao ướt hết tối mò buồn ghê
Sáng nay trời vội trở về
Chiếu muôn tia nắng trên đê trong làng😂😂😂`},

{ngay:"2026-04-27", muc:"noingoai", tieuDe:"Ở bên anh em không cần phải nhớn", anh:["fb/270426-01.jpg", "fb/270426-02.jpg", "fb/270426-03.jpg", "fb/270426-04.jpg", "fb/270426-05.jpg"], nguon:"Facebook",
noiDung:`☘️🌹♻️Anh bảo: Ở bên anh em không cần phải nhớn, cơ mà muốn em nhớn em cũng không nhớn á😜🍫`},

{ngay:"2026-04-24", muc:"bep", tieuDe:"Sữa chua nha đam ngập răng – tự chấm 9 điểm", anh:["fb/290426-1-01.jpg", "fb/290426-1-02.jpg", "fb/290426-1-03.jpg", "fb/290426-1-04.jpg"], nguon:"Facebook",
noiDung:`Ăn sữa chua nha đam mà lèo tèo vài hạt nha đam không bõ cho hai hàm răng mất công lao động😂. Nên là lại triển em nó vậy ăn cho sướng mồm tiện công giải thoát cho cây nha đam bớt sức nặng của các bẹ đỡ siêu vẹo mà thấy tội á😜😜😜. Được bữa ngập răng các thím ạ😂😂😂.
P/s: Lần trước em làm nhưng không thành công vì vẫn rất đắng mà hì hục làm bao lâu. Nay em làm thì thành công rực rỡ với thời gian công đoạn rút đi rất ngắn luôn. Đúng kiểu làm phát ăn ngay ấy các thím ạ😂. 9 điểm về chỗ hi vọng cố gắng lần sau được 10 điểm ạ😂😂😂`},

{ngay:"2026-04-23", muc:"bep", tieuDe:"Cơm nắm rong biển phô mai – mỗi người 7 viên", anh:["fb/230426-01.jpg", "fb/230426-02.jpg", "fb/230426-03.jpg"], nguon:"Facebook",
noiDung:`☘️🌹👏 Lạ mồm nên ăn 3 ngày 3 bữa vẫn hết đĩa này mỗi bữa😂😂😂. Mỗi người có 7 viên thôi chứ mấy😜`},

{ngay:"2026-04-23", muc:"vuon", tieuDe:"Hải Phòng mưa to – hay nàng Bân đã tái giá?", anh:["fb/230426-1-01.jpg", "fb/230426-1-03.jpg", "fb/230426-1-04.jpg", "fb/230426-1-05.jpg"], nguon:"Facebook",
noiDung:`Sáng nay HP mưa to dã man các chế nhỉ? To cỡ này luôn ý ạ. Cây cối nghiêng ngả siêu vẹo, lụt ngập cả ngõ luôn. Mưa to + rét mà hai hàm răng em đập vào nhau bụng trộm nghĩ hay nàng bân đã tái giá😜`},

{ngay:"2026-04-22", muc:"bep", tieuDe:"Vạc ăn đêm", anh:["fb/220426-01.jpg"], nguon:"Facebook",
noiDung:`Nhà em kiểu ăn món gì ăn liền cho chán rồi sau một thời gian dài mới dám ăn lại😜😜😜. Vạc ăn đêm😂`},

{ngay:"2026-04-22", muc:"vuon", tieuDe:"7 năm vẫn trồng mồng tơi", anh:["fb/220426-2-01.jpg", "fb/220426-2-02.jpg"], nguon:"Facebook",
noiDung:`7 năm sau vẫn duy trì vì em thích mồng tơi😜`},

{ngay:"2026-04-21", muc:"bep", tieuDe:"Thèm là triển, phun topping mới chịu", anh:["fb/210426-01.jpg"], nguon:"Facebook",
noiDung:`Cứ thèm là triển ăn cho thoải mái😂😂😂. Phun toping mới chịu 😜😜😜`},

{ngay:"2026-04-20", muc:"khoe", tieuDe:"Hoàng Thượng dâng con sen món chống đói", anh:["fb/200426-01.jpg"], nguon:"Facebook",
noiDung:`Chả hiểu sao dạo này em toàn đói đêm mặc dù tối ăn nhiều hay ít sớm hay muộn thì cứ tầm 10-11h là em bắt đầu lên cơn nhãi ruột😜. Thế là lại được Hoàng Thượng dâng cho con sen một món gì đó ăn nhẹ để chống đói. Hi vọng cân vẫn giữ nguyên mốc 49 kí lô như hiện tại là đượt á😜😜😜`},

{ngay:"2026-04-19", muc:"vuon", tieuDe:"Thu hoạch", anh:["fb/190426-01.jpg", "fb/190426-02.jpg", "fb/190426-03.jpg", "fb/190426-04.jpg"], nguon:"Facebook",
noiDung:`Thu hoạch`},

{ngay:"2026-04-16", muc:"nha", tieuDe:"Không đẻ con gái như em đời không nể", anh:["fb/160426-01.jpg"], nguon:"Facebook",
noiDung:`Đúng kiểu: không đẻ con gái như em đời không nể😜😜😜.
- Ngày bé đến cấp 2 em cũng leo trèo hơn khỉ😜, toàn chơi trò của con trai và môn nào em cũng có mặt: đánh khăng, bắn bi, chơi cù quay, búng nịt..... nhẩy dây , chơi chuyền, ô ăn quan chỉ đá đưa tí là chán😜😜😜
- Xong cấp 3 rồi đến vọt lên trên cấp 3 thì em thuỳ mị nết na nữ tính trầm lắm chứ bộ😜😜😜
- Rồi thì sau đó một thời gian em lao đầu vào cái gọi là yêu đương ấy thế là tòi lòi phòi ra 2 quả bom nổ chậm và 1 quả bom hẹn giờ trong vòng 8 năm cộng thêm vài năm nữa em mới sốc lại hồn vía. Và giờ thì ối dồi ôi em kiểu hơn cả khúc đầu ấy các mom ạ😜😜😜. Có ai kiểu giống em không? Này cơ vài tuổi nữa vớ vỉn 3 quả bom kia noá lại tống em vào trại dưỡng lão là đẹp ý😜`},

{ngay:"2026-04-13", muc:"nha", tieuDe:"Năm nay nàng Bân thoái hóa khớp, không may áo được", anh:[], nguon:"Facebook",
noiDung:`Mấy nay em thấy trên fb các chị em hỏi nàng Bân bao giờ quay lại may áo😜. Em thì xin thưa là em đã cất hết quần áo đông phơi bày quần áo hè lâu rồi vì em biết năm nay chị Bân bị thoái hoá xương khớp tê bì nhức tay nên không may áo được chị em nhá😜😜😜`},

{ngay:"2026-04-12", muc:"nha", tieuDe:"Mình cứ sống là mình thôi nhé!", anh:["fb/120426-01.jpg"], nguon:"Facebook",
noiDung:`Buồn cũng thế vui rồi cũng thế
Những hơn thua sẽ nằm lại cuối trời
Yêu cũng thế ghét rồi cũng thế
Tận sau cùng buông bỏ để rong chơi.

Đời ngắn lắm chỉ như là cơn gió
Thoáng ngang qua bao mùa cũ vội vàng
Rồi thực tại quay cuồng trong cơn lốc
Cơm áo, gạo tiền, cảm xúc đa mang.

Mình cứ sống là mình thôi nhé!
Có dại khờ một chút cũng sao đâu
Chẳng cần phải bao ngày đêm toan tính
Những hờn ghen cho nặng cả mái đầu.

☘️ Luôn là chính mình và sống yêu đời nhé cô gái 18+😜😜😜`},

{ngay:"2026-04-09", muc:"nha", tieuDe:"Bộ áo dài 80 cành mặc hơn chục năm", anh:["fb/090426-01.jpg", "fb/090426-02.jpg", "fb/090426-03.jpg"], nguon:"Facebook",
noiDung:`☘️ Bộ áo dài em mua cũng cỡ chục năm có lẻ rồi ấy chứ không đùa đâu các bác ạ😜. Có 80 cành thôi mà em mặc cũng cỡ 4-5 lần gì đó. Bữa hôm trước hội đình làng em, em diện ra đình xong về tranh thủ tí thể dục mà cụ Chí nhà em chộp ngay quả video này. Vẫn còn nghịch như này thì lên bà ngại thế nào được chứ cá bác nhể😜😜😜`},

{ngay:"2026-04-06", muc:"nha", tieuDe:"Em của 8 năm trước", anh:["fb/060426-01.jpg"], nguon:"Facebook",
noiDung:`Xem lại ảnh ngày xưa cũ hầu như cái nào em cũng đứng dưới gốc cây, ngồi bụi cỏ, chèo cột điện..... cười mỉm với chúm chím. Giờ thì toàn thấy em cười xoè hết tầm hở hết cả lợi mới chịu😜. Và đây em của 8 năm trước😂😂😂`},

{ngay:"2026-04-06", muc:"di", tieuDe:"Đi chơi phải đội nón nó mới mát", anh:["fb/060426-1-01.jpg"], nguon:"Facebook",
noiDung:`Đi chơi phải đội nón nó mới mát😜😜😜`},

{ngay:"2026-04-06", muc:"bep", tieuDe:"Chuối luộc – món tuổi thơ đi mót chuối sau bão", anh:["fb/060426-2-01.jpg", "fb/060426-2-02.jpg"], nguon:"Facebook",
noiDung:`Vâng. Chuối luộc, món mà tuổi thơ đi mót chuối đổ sau bão về luộc ăn của em😂😂😂`},

{ngay:"2026-04-03", muc:"ban", tieuDe:"Kim chi đóng túi, chuẩn bị lên đường", anh:["fb/030426-01.jpg", "fb/030426-02.jpg"], nguon:"Facebook",
noiDung:`Chuẩn bị lên đường thôi nào`},

{ngay:"2026-04-03", muc:"vuon", tieuDe:"Cà chua sân thượng đến ngày thu hoạch", anh:["fb/030426-1-01.jpg"], nguon:"Facebook",
noiDung:`Cũng đến ngày thu hoạch bạn ấy😂`},

{ngay:"2026-04-03", muc:"ban", tieuDe:"Sai một ly đi một dặm – thùng kim chi dồn việc", anh:["fb/030426-2-01.jpg"], nguon:"Facebook",
noiDung:`Đúng là sai một ly đi một dặm. Đáng lẽ thứ 6 em mới làm vì công việc được phân bổ rõ ràng việc nào vào ngày đấy rồi nhưng chỉ vì sự nhầm nhọt của chị bán rau khiến công việc của em lại bị cộng dồn dập. Cứ bảo sao cụ chí nhà em không cho làm toàn lườm em😜😜`},

{ngay:"2026-04-02", muc:"ban", tieuDe:"Mẻ kim chi làm đến 2 giờ sáng", anh:["fb/020426-01.jpg", "fb/020426-02.jpg", "fb/020426-03.jpg", "fb/020426-04.jpg"], nguon:"Facebook",
noiDung:`Em vẫn chưa được mở mắt từ sáng đến giờ, toàn ti hí các mom ạ😜😜😜. Dự lại 2h sáng mới xong á😜`},

{ngay:"2026-04-01", muc:"nha", tieuDe:"Cá tháng Tư: cứ ngồi giữa ruộng chờ người thả tim", anh:["fb/010426-01.jpg"], nguon:"Facebook",
noiDung:`Kệ, cứ ngồi đây chờ kiểu gì cũng có người thả 😂😂😂`},

{ngay:"2026-03-30", muc:"di", tieuDe:"Hôm nay anh học toán hình…", anh:["fb/300326-01.jpg", "fb/300326-02.jpg", "fb/300326-03.jpg", "fb/300326-04.jpg"], nguon:"Facebook",
noiDung:`❤️ Hôm nay anh học toán hình, chẳng thấy hình gì ngoài hình bóng em😜😜😜`},

{ngay:"2026-03-30", muc:"nha", tieuDe:"Đôi tất chân gà", anh:["fb/300326a-01.jpg"], nguon:"Facebook",
noiDung:`Em đang bận mà con em nhờ mẹ đi vào hộ con để con chụp ảnh cái mà đi vào xong cũng hết mợ hồn, hi vọng đêm nay em không mộng mị về hình ảnh này😜`},

{ngay:"2026-03-30", muc:"ban", tieuDe:"Gom đơn kim chi theo dự báo thời tiết", anh:[], nguon:"Facebook",
noiDung:`Theo như dự báo thì sang tuần thời tiết cũng tương đối đèm đẹp các chị em ạ😜. Em lại gom đơn thêm mẻ kim chi vào cuối tuần này được khum😂. Chúng mình tiếp tục mổ cái chữ cho em xin cái đơn thật yêu thương để em thêm động lực xắn tay áo tiếp tục vào bếp nhé ak!🥰🥰🥰`},

{ngay:"2026-03-30", muc:"vuon", tieuDe:"Trồng rau chỉ thích để ngắm hơn là ăn", anh:["fb/300326c-01.jpg", "fb/300326c-02.jpg", "fb/300326c-03.jpg", "fb/300326c-04.jpg"], nguon:"Facebook",
noiDung:`Có ai như em? Trồng rau chỉ thích để ngắm hơn là ăn😜😜😜. Đợt này em đi ngắn ngày nên cây chưa bị ngẹo😂.
Chúc cả nhà mình ngày mới năng lượng nhé!🥰`},

{ngay:"2026-03-28", muc:"ban", tieuDe:"Lên lại mẻ kim chi nhạt hơn", anh:["fb/280326-01.jpg"], nguon:"Facebook",
noiDung:`Anh chị em nhà mình đâu rồi, hết kim chi mặn chưa để em lên lại mẻ nhạt hơn ạ😜😜`},

{ngay:"2026-03-27", muc:"ban", tieuDe:"Mẻ kim chi mặn – em xin lỗi quý zị", anh:["fb/270326b-01.jpg"], nguon:"Facebook",
noiDung:`Ôi mèng ơi, nay em mới thẩm kim chi em làm nhưng quả thật nó mặn hơn em tưởng tượng ạ. Không hiểu sao hôm em làm có bị tẩu hoả nhập ma gì không mà cho lắm mắm thế vậy trời nhỉ? Giờ nghĩ lại quá trình hôm đó làm nước sốt thì em cũng nể em thật ấy ạ😔. Mà nhà em bố em làm nông không làm nhà máy nước mắm đâu ạ mà lần này em vung tay quá trán vậy trời😔😔😔. Em xin lỗi quý zị mẻ này vì quá mặn ạ😭😭😭`},

{ngay:"2026-03-26", muc:"bep", tieuDe:"Làm tất ăn cả: cốc mì với ba em mực", anh:["fb/260326-01.jpg"], nguon:"Facebook",
noiDung:`Vâng, làm tất ăn cả là đây các bác ạ. Một mình hẳn 1 cốc mì kèm thêm 3 em lái siêu ngon ạ. 😜😜😜`},

{ngay:"2026-03-26", muc:"ban", tieuDe:"Vừa làm vừa tự đi ship", anh:["fb/260326a-01.jpg", "fb/260326a-02.jpg"], nguon:"Facebook",
noiDung:`Nhiều anh chị em thấy em bé con con vừa làm vừa đi ship luôn thì động viên bảo: sao em không thuê ship cho đỡ vất vả? Nhưng khổ lỗi em cứ bị thích cái gì cũng tự tay làm kiểu làm tất ăn cả ấy ạ😜😜😜`},

{ngay:"2026-03-24", muc:"ban", tieuDe:"Hết kim chi rồi nhá các mom", anh:[], nguon:"Facebook",
noiDung:`Em hết kim chi rồi nhá các mom. Hẹn các mom vào mẻ sau nhé ạ!🥰🥰🥰`},

{ngay:"2026-03-24", muc:"ban", tieuDe:"1 giờ đêm mới xong thùng kim chi", anh:["fb/240326a-01.jpg", "fb/240326a-02.jpg"], nguon:"Facebook",
noiDung:`Vâng 1h đêm mới xong thùng kim chi này và dự là 2h mới được đi ngủ😜. Mai cho em dậy muộn tí ti nhé các chế cứ chốt đơn em rép sau ạ😂`},

{ngay:"2026-03-23", muc:"ban", tieuDe:"Lên đơn lại dùm em nào các tềnh yêu", anh:["fb/230326-01.jpg"], nguon:"Facebook",
noiDung:`Lên đơn lại dùm em nào các tềnh yêu ơi!`},

{ngay:"2026-03-23", muc:"ban", tieuDe:"Nhà em làm gì bán là ăn cái đó luôn", anh:["fb/230326a-01.jpg"], nguon:"Facebook",
noiDung:`Đây ạ, chẳng giấu gì các cụ. Nhà em làm cái gì bán là ăn cái đó luôn ấy. Nên các cụ mợ yên tâm về chất lượng sản phẩm nha!
Em mời các cụ ăn trưa với em nhé! Oánh chén xong bát này em vào việc tiếp cho đến 1h đêm mới xong á😂`},

{ngay:"2026-03-23", muc:"ban", tieuDe:"Kim chi gần 40 kg – bảng giá", anh:["fb/230326b-01.jpg", "fb/230326b-02.jpg"], nguon:"Facebook",
noiDung:`Nay em làm có gần 40kg thôi kí zị ạ. Số lượng ít mà còn dư cũng không nhiều. Chị em nào thích món này mà tin tưởng về mọi mặt thì ới em Kỹ chốt đơn liền nha!
👉 125k/1kg cái không tính nước thêm nha.
👉 120k/1kg từ 2kg
👉 110k/1kg từ 5kg
☘️ Chưa bao gồm ship ạ!`},

{ngay:"2026-03-22", muc:"ban", tieuDe:"Trời nắng đẹp – làm kim chi thôi", anh:["fb/220326-01.jpg"], nguon:"Facebook",
noiDung:`Sang tuần nắng đẹp đủ điều kiện để làm món Kim Chi của #BẾP_NHÀ_CÔ_KỸ nên mai em làm một mẻ phục vụ các chị đẹp em xinh hồi cuối năm ngoái chưa có đơn. Anh chị em cô bác ai ăn ới em nhé ạ!🥰`},

{ngay:"2026-03-22", muc:"bep", tieuDe:"Xôi tôm hay tôm xôi thì cũng vào bụng hết", anh:["fb/220326a-01.jpg"], nguon:"Facebook",
noiDung:`Xôi tôm hay tôm xôi thì cũng vào bụng hết😂`},

{ngay:"2026-03-21", muc:"ban", tieuDe:"Hết tháng Giêng, em Kỹ quay lại đảo thịt chưng", anh:["fb/210326-01.jpg"], nguon:"Facebook",
noiDung:`Lại là em Kỹ thịt chưng mắm tép đây!
Hết tháng giêng rồi em Kỹ quay trở lại với công cuộc đảo thịt chưng phục vụ bà con mình. Cả nhà mình ăn hết đồ trong tủ lạnh rồi thì lên đơn cho em Kỹ bận bịu tí nha!🥰🥰🥰`},

{ngay:"2026-03-21", muc:"bep", tieuDe:"Gà nấu lá giang", anh:["fb/210326a-01.jpg"], nguon:"Facebook",
noiDung:`Gà nấu lá giang`},

{ngay:"2026-03-20", muc:"di", tieuDe:"Quay như chong chóng", anh:["fb/200326-01.jpg"], nguon:"Facebook",
noiDung:`Đúng là quay như chong chóng😜😜😜`},

{ngay:"2026-03-19", muc:"nha", tieuDe:"Tháng mới bắt đầu, nắng ngập tràn", anh:["fb/190326-01.jpg", "fb/190326-02.jpg", "fb/190326-03.jpg"], nguon:"Facebook",
noiDung:`"Tháng mới bắt đầu, nắng ngập tràn
Chúc cho bằng hữu bớt lo toan
Công thành danh toại, đời viên mãn
Gia đạo êm ấm, hưởng bình an."`},

{ngay:"2026-03-14", muc:"nha", tieuDe:"Hơi phũ nhưng là sự thật – chị em chọn ảnh nào?", anh:["fb/140326-01.jpg", "fb/140326-02.jpg"], nguon:"Facebook",
noiDung:`Hơi phũ nhưng nó là sự thật ý. Cơ mà chị em chọn ứa nào? Nhớ là nói thật nòng nhé😜😜😜`},

{ngay:"2026-03-13", muc:"di", tieuDe:"Một chuyến đi đáng nhớ", anh:["fb/130326-01.jpg", "fb/130326-02.jpg", "fb/130326-03.jpg", "fb/130326-04.jpg"], nguon:"Facebook",
noiDung:`Một chuyến đi đáng nhớ`},

{ngay:"2026-03-11", muc:"di", tieuDe:"Trước 1,50 m giờ độc có 1,49 m", anh:["fb/110326-01.jpg", "fb/110326-02.jpg", "fb/110326-03.jpg", "fb/110326-04.jpg"], nguon:"Facebook",
noiDung:`Ngắn không ngắn, dài không dài mà vừa mới sợ chứ lị😜😜😜. Thực tế hơi phũ, trước 1.50m giờ độc có 1.49m😔😔😔`},

{ngay:"2026-03-10", muc:"noingoai", tieuDe:"Hậu 8/3: khầy và Kỹ tung chưởng tơi tả", anh:["fb/100326-01.jpg", "fb/100326-02.jpg"], nguon:"Facebook",
noiDung:`Hậu ngày mùng 8/3 khầy và Kỹ tung chưởng tơi tả😂😂😂`},

{ngay:"2026-03-09", muc:"di", tieuDe:"Ăn kem giữa biển mùa rét – dìm hàng nhau", anh:["fb/090326-01.jpg", "fb/090326-02.jpg", "fb/090326-03.jpg", "fb/090326-04.jpg"], nguon:"Facebook",
noiDung:`Khốn khổ, đang yên đang lành ở trong nhà ấm áp mà lôi nhau ra đây cho ăn kem bằng được rồi dìm hàng nhau cho chết rét đi mới chịu cơ😜. Ăn được cái kem kia xong cũng sun dúm dó hết vào rồi đi về😂😂😂`},

{ngay:"2026-03-09", muc:"di", tieuDe:"Rừng Thiền Am Các – mời các chế viết hộ cái cáp", anh:["fb/090326a-01.jpg"], nguon:"Facebook",
noiDung:`Em mời các chế viết hộ em cái cáp😂😂😂`},

{ngay:"2026-03-08", muc:"noingoai", tieuDe:"Nở như hoa hồng, mùi như hoa cà (8/3)", anh:["fb/080326-01.jpg"], nguon:"Facebook",
noiDung:`🥰Nở như hoa hồng, mùi như hoa cà,
Tỏa sáng như những vì sao và mặt trời!
Phụ nữ thân mến, chúc bạn luôn hạnh phúc
Và đừng bao giờ đánh mất nụ cười của bạn! 🥰`},

{ngay:"2026-03-01", muc:"vuon", tieuDe:"Rau thơm phải tự trồng mới thơm nức", anh:["fb/010326-01.jpg", "fb/010326-02.jpg", "fb/010326-03.jpg", "fb/010326-04.jpg"], nguon:"Facebook",
noiDung:`Tầm này ăn thế này là đỡ ngấy rồi các ngài nhỉ? Cứ là các loại rau thơm thì là tín đồ của nhà em😜. Thích là phải tự trồng ăn cho noá thơm nức mới chịu á😜!
Nhà cháu mời các ngài ăn cơm tối ạ! 🥰`},

{ngay:"2026-02-26", muc:"vuon", tieuDe:"Giàn trầu chồng trồng cho em ngắm – em không bán", anh:["fb/260226-01.jpg"], nguon:"Facebook",
noiDung:`Khốn khổ trồng rau ra là để ăn không phải vì không đủ tiền mua rau mà do em thích mày mò ấy chứ. Trồng nó lên tốt đẹp thì lại chỉ thích ngắm, ra ngắm vào ngắm không lỡ ăn nhưng không ăn thì nó cũng rạc hỏng hết. Nhưng khi lấy ăn thì nó bị lõm khuyết một đám thành ra tâm lý em lại chùng xuống thấy buồn thế chứ😂😂😂. Đấy là rau còn trầu không thì nhiều người vào hỏi mua hôm trước tết hoặc lúc nào trầu hiếm nhưng em không bán, tán thế nào em cũng không chịu vì chồng em trồng cho em chỉ vì em thích cây xanh để ngắm mỗi ngày. Nên em chỉ cho ai đó cần để sử dụng vào việc, ăn trầu, ngâm ngám chân tay bị bệnh thôi thì em cho bất chấp không ngại các cụ mợ nhé! Bác nào cần cứ đến em nhé hi.`},

{ngay:"2026-02-25", muc:"di", tieuDe:"Tết con Ngựa, hai cụ ngồi ngay ngắn tí", anh:["fb/250226-01.jpg", "fb/250226-02.jpg", "fb/250226-03.jpg", "fb/250226-04.jpg"], nguon:"Facebook",
noiDung:`Tết con Ngựa hai cụ ngồi ngay ngắn tí xem nào😂😂`},

{ngay:"2026-02-25", muc:"di", tieuDe:"Diện áo dài mà vẫn bật nhảy", anh:["fb/250226a-01.jpg", "fb/250226a-02.jpg", "fb/250226a-03.jpg", "fb/250226a-04.jpg"], nguon:"Facebook",
noiDung:`Em cũng sợ em thật ý, cha mẹ sinh bản tính đàn ông mà em không tha cả khi diện áo dài thướt tha. Cười tí cho tỉnh ngủ ạ🤣🤣🤣`},

{ngay:"2026-02-23", muc:"vuon", tieuDe:"Mỗi rau xà lách là sâu không ăn", anh:["fb/230226-01.jpg", "fb/230226-02.jpg", "fb/230226-03.jpg", "fb/230226-04.jpg"], nguon:"Facebook",
noiDung:`Qua bao lần kinh nghiệm thì em thấy mỗi rau sà lách là sâu không ăn😂`},

{ngay:"2026-02-20", muc:"nha", tieuDe:"Trời sinh bản tính dịu hiền…", anh:["fb/200226-01.jpg"], nguon:"Facebook",
noiDung:`Trời sinh bản tính dịu hiền,
Để che bớt vẻ thiếu tiền bên trong😂😂😂`},

{ngay:"2026-02-18", muc:"noingoai", tieuDe:"Nếu anh tính thích dịu dàng…", anh:["fb/180226-01.jpg"], nguon:"Facebook",
noiDung:`❤️ Nếu anh tính thích dịu dàng. Qua đây em hứa nhịp nhàng cùng anh😂😂😂.`},

{ngay:"2026-02-17", muc:"noingoai", tieuDe:"Mùng 1 tiếp ba vị khách “topping 200k”", anh:["fb/170226-01.jpg"], nguon:"Facebook",
noiDung:`Mùng 1 tiếp 3 vị khách này tốp ping 200k/1 bát hai vợ chồng già kiếm cốc cà phê thôi các bác ạ😂😂😂`},

{ngay:"2026-02-17", muc:"noingoai", tieuDe:"Năm mới Tết đến – rước hên vào nhà", anh:["fb/170226a-01.jpg"], nguon:"Facebook",
noiDung:`❤️ Năm mới Tết đến – Rước hên vào nhà – Quà cáp bao la – Mọi nhà no đủ – Vàng bạc đầy tủ – Gia chủ phát tài – Già trẻ gái trai – Sum vầy hạnh phúc – Câu tài chúc phúc – Lộc đến quanh năm – An khang thịnh vượng. Happy new year cả nhà ạ!❤️`},

{ngay:"2026-02-16", muc:"vuon", tieuDe:"46 mùa xuân mới thấy nha đam ra hoa", anh:["fb/160226-01.jpg", "fb/160226-02.jpg", "fb/160226-03.jpg"], nguon:"Facebook",
noiDung:`Đúng là 46 mùa xuân em chưa bao giờ nghe nói Nha Đam ra hoa càng chưa bao giờ nhìn thấy thực tế. Quả thật em ấy đã cho nhà em bất ngờ ngạc nhiên đến lạ các bác ạ! Cảm ơn em gái đã tặng bác em nó nhé! Càng chăm nó càng to nên em mới phải thay cái chậu như này cho hợp với em ấy!`},

{ngay:"2026-02-15", muc:"ban", tieuDe:"Thư cảm ơn khách – Tết Bính Ngọ", anh:[], nguon:"Facebook",
noiDung:`❤️ Thêm một năm nữa trôi qua với bao nhiêu biến động và đầy khó khăn vừa qua. Em Kỹ xin chân thành cảm ơn tất cả quý cô bác, các anh chị em bạn bè trên mọi miền đã tin tưởng đồng hành, ủng hộ em Kỹ suốt thời gian qua! Chính sự kiên nhẫn, thấu hiểu, tin yêu của mọi người đã tiếp thêm động lực lớn mạnh giúp em vượt qua giai đoạn không dễ dàng này. Từng bước duy trì và cải thiện chất lượng sản phẩm- dịch vụ. Những người đặt lần đầu vì tin và quay lại nhiều lần vì ngon.

❤️ Và em cảm ơn cả những người đã lặng lẽ theo dõi thả like, thả tym, xem hết bài livetrem. Một năm không quá dài nhưng đủ để em Kỹ tin rằng chỉ cần mình làm nghề bằng cái tâm thì món ăn quê sẽ tự tìm được đường đến với những người thương nó.

❤️ 3 năm đã qua, một hành trình mới lại bắt đầu em vẫn là Kỹ cô gái chân ngắn😜, thẳng thắn, trung thành luôn sẵn sàng đồng hành cùng mọi sóng gió của cuộc sống và em vẫn đảo thịt chưng mắm tép(món chủ đạo) thêm những món ăn khác bếp nhà cô Kỹ bằng sự tử tế và lòng biết ơn. Em vô cùng trân trọng và biết ơn từng đơn hàng, từng phản hồi, từng lời góp ý, động viên chân thành tình cảm thật lòng, sự tử tế của mọi người dành cho em trong thời gian qua!

Mong rằng bước sang chặng đường tiếp theo #THỊT_CHƯNG_MẮM_TÉP bếp #NHÀ_CÔ_KỸ vẫn được đồng hành cùng thật nhiều bữa cơm ấm áp nữa và em Kỹ hứa sẽ nỗ lực hơn nữa, mang đến những trải nghiệm tốt hơn để xứng đáng với sự tin yêu của tất cả mọi người! Sự tin-yêu của mọi người là niềm hạnh phúc của em!🥰

Em xin kính chúc toàn thể quý cô bác, anh chị em bạn bè đón tết Bính Ngọ thật ấm áp xum vầy, hạnh phúc bên gia đình người thân ạ! 🥰🥰🥰

P/s: Trong thời gian qua em Kỹ có điều gì thiếu sót khiến quý cô bác anh chị chưa hài lòng, em mong mọi người hoan hỉ rộng lòng bỏ qua cho em nhé ạ! Em sẽ chú ý hoàn thiện tốt hơn vào năm Bính Ngọ. Em cảm ơn cả nhà rất nhiều!
Trân trọng!`},

{ngay:"2026-02-14", muc:"vuon", tieuDe:"Nhà em đã có Tết", anh:["fb/140226-01.jpg"], nguon:"Facebook",
noiDung:`Nhà em đã có tết`},

{ngay:"2026-02-11", muc:"ban", tieuDe:"Mẻ nem cuối vừa khít hộp – em xin nghỉ Tết", anh:["fb/110226-01.jpg"], nguon:"Facebook",
noiDung:`🌹 Như dự kiến em ngừng gói nem vào cuối ngày hôm qua nhưng vì các chị em đáng yêu quá nên em lại thương lại nể làm thêm mẻ siêu to vào ngày hôm nay và kết thúc cái cuối cùng cũng vừa xinh khít khịt vào hộp không dư 1 cái nào😀. Chuẩn như cậu với mợ😜😜😜. Và chính thức em hết nem rồi, em xin phép nghỉ tết nhé bà con! Chị em nào báo muộn em xin lỗi không cố được nữa ạ. Còn đúng 5 ngày nữa là tết, em dành để đi về nội ngoại đôi bên. Mong các chị em hoan hỉ nha🥰`},

{ngay:"2026-02-11", muc:"bep", tieuDe:"Chồng con đi ăn mảnh, em ở nhà cũng ăn mảnh", anh:["fb/110226a-01.jpg"], nguon:"Facebook",
noiDung:`Chồng con thi nhau đi ăn mảnh. Em ở nhà mình em cũng ăn mảnh nha😜😜😜`},

{ngay:"2026-02-11", muc:"ban", tieuDe:"Hộp nem 16 cái nặng tận 1,1 kg", anh:["fb/110226b-01.jpg", "fb/110226b-02.jpg", "fb/110226b-03.jpg"], nguon:"Facebook",
noiDung:`Tận 1.1kg/ 1 hộp/ 16 cái nha các mom. Bảo qua chốt nốt rồi mà nay em vẫn ôm thêm mẻ to tướng như này nữa mới được nghỉ đây. Lần sau các mom chốt sớm sớm tí cho em đi đấm bóp nong thể để đón một cái tết tươi tỉnh tí nha😂😂😂`},

{ngay:"2026-02-10", muc:"ban", tieuDe:"Hành cứ phải tự phi mới chịu", anh:["fb/100226-01.jpg"], nguon:"Facebook",
noiDung:`Hành cứ phải tự phi mới chịu cơ, bảo sao nức mũi hàng xóm may không bị mắng cho ý ạ😜😜😜. Sáng đến tối em uốn có 3 chậu này là chốt hạ rồi các mom nhé! Hẹn các mom sang năm nhể😂😂😂`},

{ngay:"2026-02-09", muc:"ban", tieuDe:"Khách ưng gì là em làm – nốt hôm nay rồi nghỉ Tết", anh:["fb/090226-01.jpg", "fb/090226-02.jpg", "fb/090226-03.jpg"], nguon:"Facebook",
noiDung:`Khách ưng gì là em làm thôi, nhưng nốt hôm nay thôi và mai ngày kia em trả đơn nem nữa là cho em nghỉ tết nhá các cụ😂😂😂`},

{ngay:"2026-02-08", muc:"ban", tieuDe:"Gần 300 cái chả nem trong một ngày", anh:[], nguon:"Facebook",
noiDung:`Có gần 300 cái chả nem thôi mà từ sáng đến giờ em mới được mở mắt xong 1 tiếng nữa em lại nhắm mắt😂😂😂xong sáng mai em mới lại được mở mắt😜😜😜`},

{ngay:"2026-02-08", muc:"ban", tieuDe:"Chả nem thịt: hộp 10 cái, 850–900 g", anh:["fb/080226a-01.jpg"], nguon:"Facebook",
noiDung:`📌📌📌Chả nem thịt 150k/1 hộp/ 10 cái/ 850g-900g. Em mời các ngài chốt đơn đủ mẻ là em làm nốt ngày mai thôi nhé ạ!`},

{ngay:"2026-02-06", muc:"ban", tieuDe:"Chả nem tôm: tôm để nguyên con, bánh đa đặt làm riêng", anh:["fb/060226-01.jpg"], nguon:"Facebook",
noiDung:`♻️🌹👉 Chả nem tôm, tôm em để nguyên con chứ không cắt nhỏ.
📌 Loại ram tôm vàng: 1 hộp 16 cái = 240k👉850gram
📌 Loại ram tôm trắng: 1 hộp 10 cái = 220k👉800gam
📌 Loại ram thịt :        1 hộp 10 cái = 170k👉 800gam
👉 Em miễn ship từ 2 hộp bán kính 5km đổ lại.
P/s: Tất cả các nguyên liệu em làm lên thành phẩm từ gia vị(gia đình em ăn) đến bánh đa em cũng đặt làm riêng chứ không mua đại trà ngoài chợ để đảm bảo độ giòn và nhạt. Tiền nào thì của đó phải không quý zị? Ai tin tưởng thì ới em Kỹ làm vì các chị bận, còn nếu có thời gian các chị em làm là thích nhất ạ!🥰🥰🥰
Và em chỉ làm thêm 1 mẻ cuối vào chủ nhật tuần này ạ!`},

{ngay:"2026-02-05", muc:"ban", tieuDe:"Nem tôm xếp hình cành đào ngày Tết", anh:["fb/050226-01.jpg", "fb/050226-02.jpg", "fb/050226-03.jpg"], nguon:"Facebook",
noiDung:`Chỉ vì cành đào tết mà em cố đây các ngài ạ🤣😜`},

{ngay:"2026-02-05", muc:"ban", tieuDe:"Chả nem bắt đầu gói nha bà con", anh:["fb/050226a-01.jpg", "fb/050226a-02.jpg", "fb/050226a-03.jpg"], nguon:"Facebook",
noiDung:`❤️ Chả nem bắt đầu gói nha bà con❤️`},

{ngay:"2026-02-03", muc:"bep", tieuDe:"Phơi cải muối dưa – ai đưa muối đê", anh:["fb/030226-01.jpg"], nguon:"Facebook",
noiDung:`Có vẻ em rất hạp với đồ khắm, chua sao ấy nhể các ngài😜. 🌚🌚🌚 Ai đưa muối đê 🤣🤣🤣`},

{ngay:"2026-01-30", muc:"ban", tieuDe:"Lịch nhận đơn thịt chưng dịp Tết", anh:[], nguon:"Facebook",
noiDung:`Em xin phép ngừng nhận đơn thịt chưng mắm tép đi tỉnh miền Nam, miền Trung từ 👉☘️ 16/12 âm lịch và ngừng nhận đơn đi các tỉnh lân cận từ 👉☘️ 18/12 âm lịch. Và đơn quanh khu vực Hải Phòng em nhận đơn đến 👉☘️ 23/12 âm.
Em cảm ơn cả nhà nhiều ạ!`},

{ngay:"2026-01-30", muc:"ban", tieuDe:"Kim chi: chỉ cân rau, nước sốt không tính tiền", anh:["fb/300126b-01.jpg"], nguon:"Facebook",
noiDung:`☘️☘️☘️ Lúc nhúc như nhợn con thế này thôi chứ ăn là cuốn lắm nhé bà con ơi. Túi nào hơn cân em tính tiền hơn nha quý zị. Cân ở đây là em tính rau cải thôi nhé còn thêm nước xốt là em không tính tiền nha!`},

{ngay:"2026-01-30", muc:"noingoai", tieuDe:"Ông giáo nhà em chỉ cần bát cơm nóng với kim chi", anh:["fb/300126c-01.jpg", "fb/300126c-02.jpg", "fb/300126c-03.jpg"], nguon:"Facebook",
noiDung:`Đấy ông giáo nhà em có cần gì nhiều đâu, từ hôm qua đến giờ hỏi suốt kim chi đã được ăn chưa vợ ơi? Sáng ăn bát cơm nóng với kim chi này là xong bữa rồi á các mợ ạ😂😂😂`},

{ngay:"2026-01-29", muc:"ban", tieuDe:"Kim chi: em làm vì đam mê, không theo gram", anh:["fb/290126-01.jpg", "fb/290126-02.jpg"], nguon:"Facebook",
noiDung:`Em làm vì đam mê thôi chứ không theo một công thức nào chuẩn theo từng gram đâu các chị em ạ. Em làm thử nêm nếm theo khẩu vị của nhà em nên các chị em ăn thấy hợp là cũng trung thành với em mấy năm nay. Cứ tết đến xuân về chị em lại nô nức nhắn tin gọi điện hỏi em nên hôm qua em lên tạm một mẻ gần 50kg thôi. Anh chị em nào ăn nhắn em để em phần nhé ạ! Mai là em đóng hộp gửi nhé chị em!
Cẩn thận từ khâu lựa chọn thực phẩm đến sạch sẽ từng công đoạn chế biến rau, nước sốt! Ăn là yên tâm!
👉125k/1kg( chưa bao gồm ship) em mời các chị em chốt đơn nhé!`},

{ngay:"2026-01-28", muc:"ban", tieuDe:"Đơn tối nay nhẹ nhàng", anh:["fb/280126-01.jpg"], nguon:"Facebook",
noiDung:`Đơn tối nay của em nhẹ nhàng này thôi. Các mợ lên đơn cho em làm sớm để em nghỉ tết sớm còn tranh thủ chơi với con zai em nhá😜.`},

{ngay:"2026-01-27", muc:"ban", tieuDe:"Tôm phải tươi sống dãy đành đạch", anh:["fb/270126-01.jpg"], nguon:"Facebook",
noiDung:`Cứ phải tươi sống dãy đành đạch như này mới chịu nha quý zị🥰`},

{ngay:"2026-01-27", muc:"ban", tieuDe:"Có khi em phải chuyển sang bán nước hoa", anh:["fb/270126a-01.jpg", "fb/270126a-02.jpg"], nguon:"Facebook",
noiDung:`Tình hình có khi em phải chuyển sang bán nước hoa thôi các cụ ạ😂. Em ra chợ có tí mà dừng ở chỗ nào cái là bà con kêu inh ỏi bảo: ối dồi ôi cái mùi gì ở đâu kinh thế nhỉ?😂xong cứ người nọ nhìn người chai kiểu thăm dò mùi á👏. Các cụ mà lại được ăn thịt chưng mắm của em nữa thì lúc ấy lại nghiện cái mùi ấy đấy nhỉ?😜😜😜. Alo hoặc IB ngay cho em nếu thích nhá❤️`},

{ngay:"2026-01-26", muc:"ban", tieuDe:"Hơn 10 kg tôm, 4 công đoạn, từ 8 giờ rưỡi đến 4 giờ chiều", anh:["fb/260126-01.jpg", "fb/260126-02.jpg", "fb/260126-03.jpg"], nguon:"Facebook",
noiDung:`Hơn 10kg tôm sống dãy đành đạch😜 em bật bếp từ lúc 8h30 sáng rồi qua 4 khâu mới ra thành phẩm như rổ( chùm cuối😜) đến tận 16h chiều mới xong. Nghe có vẻ hoang đường hay phũ hơn thì bảo" bốc phét, nói điêu, làm quá😜". Gớm có hơn 10kg luộc lên bóc tí là xong chứ làm gì mà bôi mèo ra những cả ngày thế ghê chết.....😂😂😂. Nhưng đấy là với những người đơn thuần luộc lên rồi bóc là xong chén ngay chứ còn em thì dù là nhà em ăn hay em làm bán cho khách hay gì gì gỉ gi em cũng phải làm qua 4 công đoạn đó thật cẩn thận mới cho vào nồi nấu ăn được các cụ mợ ạ. Còn ai tin em thì họ nghe em nói + nhìn em làm còn ai không tin thì nói gì cũng được á😂. 10 người chỉ cần 4-5 người tin tưởng em là em đã thấy mình may mắn và thành công rồi.

Lòng tin trong bất kể mối quan hệ nào trong cuộc sống này dù là cha mẹ, con cái, vợ chồng, anh em, bạn bè, đồng nghiệp... với em đều vô cùng quý giá và trân trọng. Mất lòng tin rồi là mất đi giá trị của chính mình!

Đừng nghe những gì họ nói hãy nhìn những gì họ làm và sống. Thế là đủ các cụ mợ nhỉ?😂😂😂`},

{ngay:"2026-01-25", muc:"noingoai", tieuDe:"Chồng em bảo: thịt lợn tăng giá quá", anh:["fb/250126-01.jpg"], nguon:"Facebook",
noiDung:`Chồng em bảo: Thịt lợn tăng giá mạnh quá, ăn này thôi cho đỡ tốn, để dành tiền tết còn trả nợ😜😜😜`},

{ngay:"2026-01-23", muc:"ban", tieuDe:"Ăn kim chi em Kỹ rồi, mua ngoài không nuốt được", anh:["fb/230126-01.jpg"], nguon:"Facebook",
noiDung:`Nhiều chị em ăn kim chi em Kỹ làm rồi là không ăn được chỗ nào khác. Gọi hay nhắn cho em Kỹ chỉ bảo chị làm kim chi đi em thèm lắm rồi thôi😂😂😂, mua ngoài không nuốt được😂😂😂`},

{ngay:"2026-01-19", muc:"nha", tieuDe:"Tạm biệt tháng 11, xin chào tháng Chạp", anh:["fb/190126-01.jpg"], nguon:"Facebook",
noiDung:`Tạm biệt tháng 11 và xin chào tháng 12 tháng cuối cùng của năm.
Hành trình 2025 chỉ còn đếm ngược tính bằng ngày thôi.
Tháng 12 đến thật rồi, thời gian cứ lặng lẽ trôi trôi vội vàng.
Kính chúc mọi người bình an.
Tháng cuối cùng của 2025 thật nhiều may mắn ghé thăm.
Dồi dào sức khoẻ làm ăn gặp thời.
Cố gắng lên nhé mọi người.
Chúc một tháng mới tốt tươi cát tường.
Tràn ngập hạnh phúc yêu thương.
Luôn luôn vững bước chặng đường cuối năm.`},

{ngay:"2026-01-17", muc:"noingoai", tieuDe:"Bếp trưởng nhà em nấu chè nha đam", anh:["fb/170126-01.jpg", "fb/170126-02.jpg", "fb/170126-03.jpg", "fb/170126-04.jpg"], nguon:"Facebook",
noiDung:`Bếp trưởng nhà em ra tay nha đam nấu thành chè😜😜😜`},

{ngay:"2026-01-15", muc:"bep", tieuDe:"Bánh dày cốm: ngon thật các bác ạ", anh:["fb/150126-01.jpg"], nguon:"Facebook",
noiDung:`Em thấy trên f.b rần rần quảng bá cái bánh này mà em lại hảo đồ nếp nên mạnh dạn đặt 1 đơn nho nhỏ về ăn thử. Cơ mà ngon thật các bác ạ😂😂😂. Em ăn hết 1 bát tô bún+ 1 bánh dày cốm này mà vẫn thòm thèm + không kịp chụp cái ảnh nào. Em liền xuống tay thêm cái nữa lấy sức để giảm cân một thể😂😂😂. Chị em nào chưa thử nghe em thử một lần đi ngon thật á😂😂😂`},

{ngay:"2026-01-14", muc:"nha", tieuDe:"Chim cánh cụt đau chân đi dép này cho vững", anh:["fb/140126-01.jpg", "fb/140126-02.jpg"], nguon:"Facebook",
noiDung:`Chim cánh cụt đau chân đi này cho vững các bác ạ😜`},

{ngay:"2026-01-10", muc:"vuon", tieuDe:"Một góc nhỏ đam mê, xả stress", anh:["fb/100126-01.jpg", "fb/100126-02.jpg", "fb/100126-03.jpg", "fb/100126-04.jpg"], nguon:"Facebook",
noiDung:`Một góc nhỏ đam mê, sả stress, hết điên hẳn khi ngắm các em ấy các bác ạ😜😜😜`},

{ngay:"2026-01-10", muc:"khoe", tieuDe:"Mỗi ngày đôi ba cốc trà hoa cúc", anh:["fb/100126a-01.jpg"], nguon:"Facebook",
noiDung:`Mỗi ngày làm đôi ba cốc này là có sao không các mợ😜😜😜`},

/* ---- các bài cũ chưa rõ ngày ---- */

{ngay:"", muc:"bep", tieuDe:"Luộc trứng thành… trứng nướng", anh:["trung-nuong.jpg"], nguon:"Facebook",
noiDung:`Cho trứng vào nồi nước 👉 đậy vung 👉 bật bếp, xong thì lên phòng khách ngồi tâm sự với ông chủ tí, rồi thì là mà lúc sau dưới bếp bụp bụp bụp! Ông chủ với con sen dỏng tai lên nghe xem tiếng gì.
- Ông chủ: Ối dồi ôi, nổ trứng cháy khét nẹt rồi 🤣🤣🤣
- Con sen chạy xuống: Nay chồng sướng nhé, được ăn trứng nướng còn gì 🫢
Ông chủ trên nhà lườm nguýt một cái thật dài xuống bếp, thế nào bóng điện dưới bếp tự nhiên tắt phụp 🤣. Nghĩ mà kinh, ngoài trời mưa tầm tã nhưng có tí sấm sét nào đâu nhỉ 😜😜😜`},

{ngay:"", muc:"bep", tieuDe:"Ăn với cơm thôi cũng phải đẹp", anh:["trung-ran-la.jpg"], nguon:"Facebook",
noiDung:`Ăn với cơm thôi cũng phải đẹp 😂`},

{ngay:"", muc:"ban", tieuDe:"Bữa tối muộn: thịt + tôm chưng mắm tép", anh:["bua-toi-muon.jpg"], nguon:"Facebook",
noiDung:`Bữa tối muộn của em với thịt + tôm chưng mắm tép! Em xin phép ăn lấy sức để giảm cân 😜😜😜`},

{ngay:"", muc:"bep", tieuDe:"Pizza nhà làm, “mix topping” kiểu nhà em", anh:["pizza-1.jpg","pizza-2.jpg"], nguon:"Facebook",
noiDung:`Nếu mua ăn sẵn thì chỉ được ăn 2 cái (người ăn người nuốt nước bọt 😜). Vậy mua thực phẩm về tự chế biến thì được ăn nhiều hơn và cả nhà đều được thưởng thức, có chị em nào thích thế không 😜
(Chủ yếu là em thích “mic tốp pinh” theo sở thích khẩu vị của nhà em mà thôi 😜)`},

{ngay:"", muc:"nha", tieuDe:"Chăm bạn ấy thật tốt", anh:[], nguon:"Facebook",
noiDung:`❤️ Phải chăm bạn ấy thật tốt để bạn ấy lớn khỏe mạnh, còn lấy vợ cho mẹ có con dâu, sinh em bé cho mẹ bế cháu 😂😂😂`},

{ngay:"", muc:"nha", tieuDe:"Ngoan cuối tuần anh cho đi ăn cỗ", anh:["vuon-nha.jpg"], nguon:"Facebook",
noiDung:`Mấy hôm trước ông chủ đi công tác nhắn về cho thợ làm bảo: Ngoan cuối tuần về anh cho đi ăn cỗ 😂😂😂`},

{ngay:"", muc:"ban", tieuDe:"Em đang chơi đồ hàng à?", anh:["gia-vi-pho.jpg","nau-dau-pho.jpg","tinh-dau-pho.jpg"], nguon:"Facebook",
noiDung:`Hôm nay ăn cơm với mắm cũng được, mai húp cháo trắng với tí muối cũng xong, nhưng ngày kia nhất định phải được ăn miếng thịt lợn 😜 không thì em thiếu chất, em run lẩy bẩy 😂
Cơ mà từ sáng đến đêm cứ cho em được ở trong nhà, dưới bếp, múa may quay cuồng với mấy món đồ hàng này là em có thể nhịn thông từ sáng đến tối, chỉ uống một cốc ngũ cốc với nước lọc, tối làm bát cơm ấm bụng lên giường ngáy o o đến sáng là thỏa trí tang bồng với niềm đam mê nhỏ bé của em rồi 😜
Ông chủ đi làm về thấy thế thì bảo: Em đang chơi đồ hàng à? Em nghịch quá đấy. Phải tống em đi chơi sớm thôi chứ để ở nhà như này tốn kém lắm 😜😜😜
P/s: Em làm tinh dầu phở Bò – Gà dành cho các chị em bận rộn mà vẫn thích vào bếp ngày cuối tuần, tự tay nấu bát phở cho chồng con mà không phải tìm mua những gia vị lắt nhắt. Tình cảm vợ chồng, gia đình lại thêm gắn kết đầm ấm hơn 🥰
Các chị em cứ đi làm kiếm xèng, mấy việc vặt này cứ để em lo nhé ạ! He he.`},

{ngay:"", muc:"ban", tieuDe:"Gần chục cân pate – hết sạch!", anh:["pate-2.jpg","pate-1.jpg"], nguon:"Facebook",
noiDung:`Ninh ninh nấu nấu có gần chục cân pate nhưng mà em hết sạch rồi chị em nhá! Để mẻ sau em làm mọi người ủng hộ em nhé ạ! 🥰🥰🥰`},

{ngay:"", muc:"ban", tieuDe:"Hành phi – thực tế màu đẹp hơn", anh:["hanh-phi-1.jpg","hanh-phi-2.jpg"], nguon:"Facebook",
noiDung:`Thực tế màu đẹp hơn các vợ ạ. Em hết hành phi rồi nhá. Ai ăn báo em gom đơn làm mẻ mới ạ!`},

{ngay:"", muc:"ban", tieuDe:"Em ấy vẫn là bét seo lơ", anh:["thit-chung-3.jpg","thit-chung-1.jpg"], nguon:"Facebook",
noiDung:`☘️🌼 Thời tiết nay không được rực rỡ, cơ mà em lại thấy trong lành và ấm lòng với sự tin tưởng, trung thành với các món ăn em làm của những anh chị khách vô cùng đáng yêu và đáng trân trọng. Bận tối mắt từ sáng đến đêm, em không kịp video trực tiếp, đến khi mở được mắt thì hàng đã đến tay khách hàng víp vịp rồi ạ 🥰
📌 Em ấy vẫn là bét seo lơ 😜 của #BẾP_CÔ_KỸ ạ! Mọi người cần cứ ới em là có nha! ❤️`},

{ngay:"", muc:"ban", tieuDe:"10 năm trước làm xôi, 10 năm sau làm thịt chưng", anh:["thit-chung-10-nam-sau.jpg","xoi-10-nam-truoc.jpg"], nguon:"Facebook",
noiDung:`10 năm trước em cũng làm xôi khúc đấy, 10 năm sau em lại làm thịt chưng 😜😜😜`},

{ngay:"", muc:"vuon", tieuDe:"Con chuột, cây trầu không và ông chủ nói đểu", anh:["vuon-nha.jpg"], nguon:"Facebook",
noiDung:`Chỉ vì cách đây ít ngày ông chủ bẫy chuột và 1 em chuột đã dính chưởng. Con trai quét dọn sân cửa thấy thế thì gọi video cho mẹ khoe và hỏi giờ phải làm thế nào hả Mẹ? Em bảo con đem nó chôn ở gốc cây ngoài vườn cho mẹ, hay thôi con cứ để đấy tí bố xuống bố xử lý nhé.
- Con bảo: Nhưng nó vẫn còn sống mẹ ạ.
- Mẹ: Ối, nó vẫn sống á con? Sao thế được nhỉ?
- Con: Đây này Mẹ, nó bị kẹp 1 bên chân thôi ý nên nó vẫn giãy giụa Mẹ ạ.
- Mẹ: Ôi thế con tháo kẹp mang ra cuối vườn thả nó ra đi nhé. Xong xem nó có bị làm sao không và có chạy được không nhé. Tí bố xuống con đừng nói gì với Bố nhé! 🫢
- Con: Vâng, nó chạy rồi nhưng chắc đau quá không chạy được nhanh thôi ạ.
Nghe khúc này thì bất chợt em thấy nhói lòng cực, rồi tự nhiên cổ họng nghẹn lại, nước mắt lã chã rơi.
Bụng bảo dạ, mồm dặn con không được nói với ông chủ, với bố, thế mà bẵng đi vài ngày vì em nghĩ chuyện qua rồi nên nói với ông chủ chỉ để hai vợ chồng cười sảng khoái thôi, thế mà ông chủ lại đổ cho em nuôi chuột thế chứ 🤣🤣🤣
Xong nay em dọn dẹp phát hiện lũ chuột đào gần bật gốc cây trầu không em quý nhất, em vội khoe thì ông chủ lại bảo em thế kia, thế mà em cũng đi lần mò quần áo cũ định mang ra trải vào chỗ nó đào cho nó nằm cho ấm như ông chủ bảo, nhưng tự nhiên em chững lại một nhịp rồi nhắn hỏi xem ông chủ có phải nói thật hay nói đểu 🤣🤣🤣
Lần này về chắc ổng tống em ra vườn ở với chuột quá cơ 😜😜😜`},

{ngay:"", muc:"noingoai", tieuDe:"Bố về trong giấc mơ của con", anh:["ve-que-3.jpg","ve-que-1.jpg","ve-que-2.jpg"], nguon:"Facebook",
noiDung:`❤️ Thời gian vừa rồi em bận quá xong em lại không được khỏe nữa nên 1,5 tháng rồi hôm nay em mới được về thăm Bố Mẹ! 7 năm 5 tháng từ ngày bố rời xa thế giới trần tục, hầu như mỗi tháng con về 1–2 lần. Cũng có tháng con được ông chủ cắp đi công tác cùng, rồi thi thoảng có tháng vì lý do khác mà con không về được thì y rằng sau đó con mơ thấy bố. Lần này bố về trong giấc mơ của con, bố quét dọn sân vườn với dáng vẻ thật khỏe mạnh và nhanh nhẹn. Vẫn dáng người ấy, tác phong ấy và tính cẩn thận sạch sẽ, nghiêm khắc kỷ luật, nề nếp ấy đã tôi luyện con gái út của bố từ 1 cô bé nhút nhát tự ti năm nào trở thành người mạnh mẽ kiên cường không chịu khuất phục trước mọi bão giông của cuộc đời của ngày hôm nay!
Bố Mẹ yên tâm nhé! Con sẽ sống thật vui thật tử tế như những gì Bố Mẹ đã sống và dạy bảo chúng con cách sống và làm người! ❤️`},

{ngay:"", muc:"noingoai", tieuDe:"Tháng mười một gió se lòng", anh:["ve-que-2.jpg"], nguon:"Facebook",
noiDung:`❤️ Tháng mười một gió se lòng,
Nhớ cha vất vả, tấm lòng bao la.
Dù cho cha đã đi xa,
Trong con bóng dáng vẫn là núi cao.
Ngày vui gửi cõi trời nào,
Mong cha thanh thản, ngọt ngào giấc mơ.
Con luôn giữ trọn lời thơ,
Đạo làm người hiếu, chẳng mờ phai đâu! ❤️`},

{ngay:"", muc:"khoe", tieuDe:"Hơn chục năm sống chung với viêm xoang trán", anh:["song-chung-voi-thuoc.jpg"], nguon:"Facebook",
noiDung:`Hơn chục năm nay em sống chung với lũ với rất nhiều bệnh dặt dẹo, trong đó có món viêm xoang trán. Ngày trước thì chỉ vào đông mới bị đau nhức, nước mắt giàn giụa, mũi thì xì xoẹt hết cả buổi sáng, mà mỗi lần xì mũi cả cái sống mũi, khoang trán đau nhức sang cả hai hốc mắt, lông mày như búa bổ. Nhưng mấy năm nay bệnh không thuyên giảm còn có chiều hướng tăng, quanh năm nóng lạnh bị suốt. Cứ sáng mở mắt ra bước chân xuống giường cái là hắt hơi dồn dập 5–7 cái mỗi lần, mà cứ tầm 3–4 lần như thế từ trên tầng 2 xuống tầng 1 😔. Em là người rất sợ bệnh tật nên cứ chớm dấu hiệu gì là em đi khám, hỏi thăm thông tin chữa ngay, mà mọi thuốc men, cách phòng tránh đủ cả vẫn không ăn thua. Thời tiết ngoài Bắc mình độc thật, có khi nào em di cư vào trong Nam cho đỡ đau nhức không các bác nhỉ?
Đi chữa bệnh mà bác sĩ bảo: nhìn người thế này năng lượng tươi rói mà sao lắm bệnh thế nhỉ? 😜
Dạ nhìn ngoài ương ương thế thôi chứ trong xanh lắm anh ạ 😜😜😜`},

{ngay:"", muc:"khoe", tieuDe:"Mất mùi sau Covid – ai từng bị như em không?", anh:[], nguon:"Facebook",
noiDung:`Đợt tháng 6 vừa rồi em bị Covid gần 2 chục ngày mới khỏi. Xong sau đó thì em bị mất mùi hẳn luôn, không hề ngửi thấy gì. Hoạ hoằn thoáng ngửi thấy mùi tầm 2–3 giây rồi lại tịt luôn. Các anh chị em nhà mình có ai đã từng bị như em và có đi khám, khám ở đâu ạ?`},

{ngay:"", muc:"di", tieuDe:"Cuộc đời bao khúc bể dâu", anh:["thuong-hai-dem.jpg","thuong-hai-ngay.jpg"], nguon:"Facebook",
noiDung:`Cuộc đời bao khúc bể dâu
Tặng nhau chữ Tín bắc cầu Phúc duyên.`},

{ngay:"", muc:"di", tieuDe:"3 năm sau", anh:["di-choi-vom-cay.jpg"], nguon:"Facebook",
noiDung:`3 năm sau 🗓⏳👣 không được đi ngắm hoa dã quỳ thì ta đi ngắm đồ ăn vậy 😜😜😜`},

{ngay:"", muc:"nha", tieuDe:"Còn 89 ngày nữa là giao thừa", anh:["sap-tet.jpg"], nguon:"Facebook",
noiDung:`🌹 Thế là chỉ còn 89 ngày nữa là lại được đón giao thừa các bác nhỉ? 🥰🥰🥰`}
];
