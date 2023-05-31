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
        <div className='dgadiv'>
            <img className='dgaimg' src='./breakfast-club/img/dgaguidelines-vn.jpg' alt='dga guidelines'></img>
            <div className='dgatextcontainer'>
              <p className='dgadescr'>Đây là một infographic được lấy từ "Dietary Guidelines for Americans 2020-2025"</p>
            </div>
        </div>

        <h2 className='nutrheading'>Hãy tìm hiểu về các loại chất dinh dưỡng khác nhau</h2>
        <h3 className='protheading'>Chất Đạm 101</h3>
        <div className='nutrientsdiv'>

          <div className='protdiv'>

            <img className='protimg' src='./breakfast-club/img/protein-guide-vn.jpg' alt='protein guide'></img>

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
              </div>


          <h3 className='carbsheading'>Chất Bột Đường 101</h3>
          <div className='carbsdiv'>
            <div id="leftCarbs">
            <h4>Tại Sao Chất Bột Đường?</h4>
              <div className='whycarbsdiv'>
                <img className='whycarbsimg' src='./breakfast-club/img/whycarbs-vn.jpg' alt='why carbs?'></img>
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
              <img className='carbsimg' src='./breakfast-club/img/carbs-guide-vn.jpg' alt='carbs infographic'></img>
          </div>

          <h3 className='fatsheading'>Mỡ 101</h3>

          <div className='fatsdiv'>
            <div className='fattextcontainer'>
              <div className='fatdescr'>
              <b id="fatTitle">Mỡ Lành Mạnh vs Không Lành Mạnh</b><br></br>
                <div id="healthFat">
                  <b>Khỏe mạnh mỡ</b>
                  <br></br>
                  <p>Cá hồi, cá ngừ, ô liu, dầu ô liu, bơ, các loại hạt và hạt</p>
                  <img className='heathfats' src='./breakfast-club/img/healthyfats.png' alt='Examples of Healthy fats'></img>
                </div>
                <div id="unhealthyFat">
                  <b>Mỡ bão hòa không lành mạnh</b>
                  <p>red meat, dairy products (cheese, butter, ice cream)</p>
                  <img className='satfats' src='./breakfast-club/img/unheatfats.png' alt='Examples of Unheathly saturated fats'></img>
                  </div>
                <div id="transFat">
                  <b>Mỡ chuyển hóa</b>
                  <p>Thức ăn chiên và thức ăn nhanh và thực phẩm chế biến (bánh quy giòn, khoai tây chiên và bánh quy)</p>
                  <img className='transfats' src='./breakfast-club/img/transfat.png' alt='Examples of Trans fats'></img>
                </div>
              </div>
            </div>

            <div>
              <img className='fatblurb' src='./breakfast-club/img/fatblurb-vn.png' alt="fat information"></img>
            </div>

          </div>

          <div className='fatsindietdiv'>
              <img className='fatsindiet' src='./breakfast-club/img/fatsdiet-vn.png' alt="fats recommendations"></img>
          </div>

        </div>
      </section>
    );
}