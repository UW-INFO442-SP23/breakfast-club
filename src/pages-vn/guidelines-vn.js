import React from 'react';
import { Link } from "react-router-dom";

export default function Guidelines(props) {

  return (
      <section>
        <div className="translate">
          <p>
            <Link to="/guidelines" className=""><strong>English</strong></Link> |&nbsp;
            <Link to="/guidelines-vn" className=""><strong>Tiếng Việt</strong></Link>
        </p>
        </div>
        <h1>Hướng Dẫn Chế Độ Ăn Uống</h1>
        <h2 id="videoDesc">Dưới đây là video giới thiệu các thực hành ăn kiêng và dinh dưỡng tốt nhất do Bộ Nông nghiệp, Y tế và Dịch vụ Nhân sinh Hoa Kỳ vạch ra.</h2>
          <div className="guidelineVideo">
            <iframe src="https://www.youtube.com/embed/IR0PaeUNp4M" title="Youtbe Video: Understanding the Dietary Guidelines for Americans"></iframe>
          </div>
        <section className='dgadiv'>
            <img className='dgaimg' src='./breakfast-club/img/dgaguidelines-vn.jpg' alt='"Làm cho mọi bữa ăn đều có giá trị với Hướng dẫn chế độ ăn uống cho người Mỹ. Đây là cách thực hiện: Hạn chế thực phẩm và đồ uống có nhiều đường bổ sung, chất béo bão hòa và natri, đồng thời hạn chế đồ uống có cồn. Thực hiện theo một chế độ ăn uống lành mạnh ở mọi giai đoạn cuộc đời. Tùy chỉnh và tận hưởng chất dinh dưỡng- lựa chọn thực phẩm và đồ uống dày đặc để phản ánh sở thích cá nhân, truyền thống văn hóa và cân nhắc về ngân sách.'></img>
            <div className='dgatextcontainer'>
              <p className='dgadescr'>Đây là một infographic được lấy từ "Dietary Guidelines for Americans 2020-2025"</p>
            </div>
        </section>

        <h2 className='nutrheading'>Hãy tìm hiểu về các loại chất dinh dưỡng khác nhau</h2>
        <h3 className='protheading'>Chất Đạm 101</h3>
        <div className='nutrientsdiv'>

          <section className='protdiv'>

            <img className='protimg' src='./breakfast-club/img/protein-guide-vn.jpg' alt='Tôi nên có bao nhiêu gram protein mỗi ngày? JUU Chia trọng lượng của bạn cho 2,2, sau đó nhân với 0,8. = gam mỗi ngày Ví dụ: 150 lbs ÷ 2,2 = 68,2 68,2 x 0,8= 54,5 gam chất đạm mỗi ngày Ăn chất đạm trong cả 3 bữa ăn để có năng lượng cho cả ngày.'></img>

            <div className='prottextcontainer'>
              <div className='protdescr'>
                <b>Hai Loại Chất Đạm: Chất Đạm Hoàn Chỉnh</b>
                  <p>Có 9 axit amin thiết yếu mà cơ thể không thể sản xuất. Chúng tôi nhận được những thứ này từ các chất đạm hoàn chỉnh.
                  <i> Thịt, cá, trứng, sữa và đậu nành</i></p>
                  <img className='compimg' src='./breakfast-club/img/compprot.png' alt='Examples of complete proteins'></img>
                  <br></br>
                  <b>Chưa Hoàn Thiện Chất Đạm</b>
                  <p>Ăn các loại chất đạm không hoàn chỉnh khác nhau trong ngày sẽ mang lại cho bạn những lợi ích của chất đạm hoàn chỉnh.
                  <i> Đậu, các loại hạt và hầu hết các loại ngũ cốc nguyên hạt</i></p>
                <img className='incompimg' src='./breakfast-club/img/incompproteins.png' alt='Examples of incomplete proteins'></img>
                {/* </p> */}
              </div>
            </div>
          </section>
          <h3 className='carbsheading'>Chất Bột Đường 101</h3>
          <section className='carbsdiv'>
            <div id="leftCarbs">
            <h4>Tại Sao Chất Bột Đường?</h4>
              <div className='whycarbsdiv'>
                <img className='whycarbsimg' src='./breakfast-club/img/whycarbs-vn.jpg' alt='Tiêu hóa, Nhiên liệu, Phòng chống bệnh tật, quản lý cân nặng'></img>
              </div>
              <div className='carbstextcontainer'>
                <p>
                  <b>Ba loại Chất Bột:
                  Chất Xơ</b>
                  <ul>
                  <li>Tổ hợp chất bột</li>
                  <li>Không thể tiêu hóa</li>
                  </ul>
                  <b>Tinh Bột</b>
                  <ul>
                  <li>Tổ hợp chất bột</li>
                  <li>Phân hủy thành đường và được sử dụng làm năng lượng</li>
                  </ul>
                  <b>Đường</b>
                  <ul>
                  <li>Đơn giản chất bột</li>
                  <li>Cơ thể sử dụng nhanh chóng hoặc lưu trữ</li>
                  </ul>
                </p>
              </div>
            </div>
              <img className='carbsimg' src='./breakfast-club/img/carbs-guide-vn.jpg' alt="Cơ thể bạn sử dụng carb như thế nào? ĐẠI HỌC TEXAS Trung tâm Ung thư MD Anderson Làm nên Lịch sử Ung thưⓇ Quá trình tiêu hóa carb bắt đầu khi bạn nhai. Axit trong dạ dày ngăn chặn quá trình tiêu hóa bắt đầu trong miệng. Trong ruột, carbs được biến thành glucose hoặc đường đơn để cung cấp năng lượng cho tế bào. Chất xơ không thể được tiêu hóa hoàn toàn, vì vậy nó làm chậm quá trình hấp thụ tinh bột và đường đơn. Các carbs bị phân hủy được hấp thụ vào máu của bạn và được gửi đến các cơ, cơ quan và mô. Điều này giữ cho các tế bào khỏe mạnh và cung cấp cho bạn năng lượng. Lượng carb dư thừa được lưu trữ trong gan dưới dạng glycogen, một nguồn năng lượng và trong cơ thể dưới dạng chất béo. Chọn tinh bột tốt cho sức khỏe: hạt đậu Hà Lan cà rốt khoai lang sữa ít béo đường tinh chế bí yến mạch táo ngũ cốc tinh chế chuối Tránh tinh bột không tốt cho sức khỏe: đậu. bánh ngọt và kẹo nho lê nước ngọt"></img>
          </section>

          <h3 className='fatsheading'>Mỡ 101</h3>


          <section className='fatsdiv'>
            <div className='fattextcontainer'>
              <div className='fatdescr'>
              <b id="fatTitle">Chất béo lành mạnh vs không lành mạnh</b><br></br>
              <b>chất béo lành mạnh</b>
                <div id="healthFat">
                  <p>Cá hồi, cá ngừ, ô liu, dầu ô liu, bơ, các loại hạt và hạt</p>
                  <img className='heathfats' src='./breakfast-club/img/healthyfats.png' alt='Examples of Healthy fats'></img>
                </div>
                <b>Chất béo bão hòa không lành mạnh</b>
                <div id="unhealthyFat">
                  <p>thịt đỏ, các sản phẩm từ sữa (phô mai, bơ, kem)</p>
                  <img className='satfats' src='./breakfast-club/img/unheatfats.png' alt='Examples of Unheathly saturated fats'></img>
                  </div>
                  <b>Chất béo chuyển hóa</b>
                <div id="transFat">
                  <p>Thức ăn chiên và thức ăn nhanh và thực phẩm chế biến (bánh quy giòn, khoai tây chiên và bánh quy)</p>
                  <img className='transfats' src='./breakfast-club/img/transfat.png' alt='Examples of Trans fats'></img>
                </div>
              </div>
            </div>

            <div className="fatFunction">
              <b id="badRap">Chất béo nhận được một rap xấu</b><br></br>
              <p>Chất béo nên chiếm 20-35% lượng calo hàng ngày của bạn</p><br></br>
              <p>“Chất béo trong chế độ ăn cung cấp cho bạn năng lượng, hỗ trợ chức năng tế bào và giúp cơ thể bạn hấp thụ chất dinh dưỡng từ rau, trái cây và các thực phẩm khác” -Erma Levy (chuyên gia dinh dưỡng nghiên cứu)</p>
            </div>

          </section>

          <div className='fatsindietdiv'>
              <img className='fatsindiet' src='./breakfast-club/img/fatsdiet.png' alt="Hãy thử nấu ăn với dầu hạt cải hoặc dầu ô liu thay vì bơ, bơ thực vật hoặc dầu mỡ Các cách để biến chất béo lành mạnh thành một phần trong chế độ ăn uống của bạn. Hoặc phết bơ đậu phộng lên bánh mì ngũ cốc nguyên hạt hoặc táo Ăn salad với nước xốt dầu ô liu. Tránh nước xốt có kem Ăn cá như cá hồi, cá ngừ hoặc cá trích vài lần một tuần để thay thế cho thịt đỏ"></img>
          </div>

        </div>
      </section>
    );
}