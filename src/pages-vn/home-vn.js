import React from 'react';
import { Link } from "react-router-dom";


export default function HomeVN(props) {
    return(

  <section id="top-home-section" className="">
    {/* <img src="/breakfast-club/img/homebackground.png" className="img-fluid" alt="Responsive image"></img> */}
    <div id="top-home-container" className="container">
    <div className="">
    <div className="container">
    <div className="translate">
        <p>
        <Link to="/breakfast-club" className=""><strong>English</strong></Link> |&nbsp;
        <Link to="/breakfast-club-vn" className=""><strong>Tiếng Việt</strong></Link>
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1 className="h1HomeHeaderLeft"><strong>Thông tin Dinh dưỡng cho Kho Thực phẩm của King County</strong></h1>
          <h2 className="pHomeLeft">Những nhóm dân số dễ bị tổn thương nhất của chúng ta ở King County cần nhiều bữa ăn bổ dưỡng hơn. Chúng tôi ở đây để
          giúp kho thực phẩm của bạn cung cấp thực phẩm và bữa ăn giúp cộng đồng của bạn khỏe mạnh.</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="/breakfast-club/img/homepagecans.png" className="img-fluid animated" alt="cans"></img>
        </div>
      </div>
    </div>

      {/* <div class="h1HomeHeader">
        <h1>Nutritional Information for King County Food Pantries</h1>
      </div>

      <div class="pHomeHeader">
        <p>
        Our most vulnerable populations in King County need more nutritious meals.
        We’re here to help your food pantry provide food and meals that will keep our communities healthy.
        </p>
      </div> */}
        
      <div className="h1Home">
        <p><strong>Hãy nói về dinh dưỡng.</strong></p>
      </div>

      <div className="pHome">
        <p>
        Đối với nhiều người ở King County, kho lương thực là nguồn cung cấp thực phẩm ổn định duy nhất. Ngoài ra, còn thiếu sự liên kết trong cách hệ thống thực phẩm từ thiện xác định và theo dõi chất lượng dinh dưỡng của thực phẩm.
        </p>
      </div>

      <div className="h1Home">
        <p><strong>Chúng tôi ở đây để giúp thu hẹp khoảng cách.</strong>
        </p>
      </div>

      <div className="pHome">
        <p>
        Với trang web của chúng tôi, tủ đựng thức ăn của bạn có thể...
        </p>
      </div>

<br></br>
<br></br>

    <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="/breakfast-club/img/homecard1.png" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title pHomeCenter">Xem Dinh Dưỡng</h5>
      <p className="card-text">Xem thông tin dinh dưỡng của các mặt hàng thực phẩm thông thường của King County.</p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" src="/breakfast-club/img/homecard2.png" alt="Card image cap"></img>    <div className="card-body">
      <h5 className="card-title pHomeCenter">Lấy Cảm Hứng Cho Bữa Ăn</h5>
      <p className="card-text">Hãy nghĩ về bữa ăn lành mạnh tiếp theo mà bạn sẽ cung cấp tại tủ đựng thức ăn của mình, được chế biến từ những vật dụng thông thường.</p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" src="/breakfast-club/img/homecard3.png" alt="Card image cap"></img>    <div className="card-body">
      <h5 className="card-title pHomeCenter">Tìm Hiểu Thêm</h5>
      <p className="card-text">Tìm hiểu về lượng calo, chất dinh dưỡng đa lượng, thông tin dinh dưỡng và hơn thế nữa từ FDA!</p>
    </div>
  </div>
</div>

<div className="h1HomeFinal">
    <p>
    <Link to="/catalog-vn" className="home-final-sentence"><strong>Hãy nuôi King County.</strong></Link>
    </p>
</div>

<div className="h1Home">
    <p>
    </p>
</div>
      <div className="col d-flex justify-content-center">
      </div>
    </div>
    </div>
  </section>

    );
}