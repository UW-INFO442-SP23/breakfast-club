import React from 'react';
import { Link } from "react-router-dom";

export default function AboutUsVN(props) {
    return (
        <section>
        <div className="translate">
            <p>
                <Link to="/about" className=""><strong>English</strong></Link> |&nbsp;
                <Link to="/about-vn" className=""><strong>Tiếng Việt</strong></Link>
            </p>
        </div>
            <h1>Về Chúng Tôi</h1>
            <br></br>
        <div className="paragraphDiv">
            <p>Chúng tôi là Breakfast Club! Đối với dự án INFO 442 vào mùa xuân năm 2023 của chúng tôi tại Đại học Washington, chúng tôi đã quyết định thực hiện mục tiêu phát triển bền vững thứ hai của Liên Hợp Quốc: Không Còn Nạn Đói.</p>
        </div>

        <div className="paragraphDiv">
            <p>Chúng tôi quyết định thực hiện mục tiêu này ở cấp địa phương. Vì vậy, chúng tôi đã hỏi: <strong>Làm cách nào chúng ta có thể kết nối các nhà hàng với ngân hàng thực phẩm để cung cấp cho cộng đồng có thu nhập thấp ở King County quyền tiếp cận thực phẩm miễn phí, chất lượng cao và tốt cho sức khỏe?</strong></p>
        </div>

        <div className="paragraphDiv">
            <p>Trang web này là câu trả lời của chúng tôi cho câu hỏi đó.</p>
        </div>

        <div className="pt-3 pb-4">
        <div className="container">
            <div className="row mt-4">
                <div className="col text-center">
                <h3>
                    Gặp đội của chúng tôi!
                </h3>
                </div>
            <br></br>
            <br></br>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/kenny.png" alt="Kenny Pham"></img>
                <h5>
                    {/* position */}
                </h5>
                <p>
                    Kenny Pham
                </p>
        
                </div>
                <div className="col-md-4 text-center">
                <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/aman.png" alt="Aman Brar"></img>
                <h5>
                    {/* position */}
                </h5>
                <p>
                    Aman Brar
                </p>
        
                </div>
                <div className="col-md-4 text-center">
                    
                    <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/cheryl.png" alt="Cheryl Feng"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Cheryl Feng
                    </p>
                </div>
            </div>
        
            <div className="row mb-md-3">
                <div className="col-md-4 text-center">
                    <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/jenny.png" alt="Yawen (Jenny) Guo"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Yawen (Jenny) Guo
                    </p>
                </div>
                <div className="col-md-4 text-center">
                    <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/travon.png" alt="Travon Dao"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Travon Dao
                    </p>
                </div>
                <div className="col-md-4 text-center">
                    <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/aboutfiller.png" alt="Team Logo"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    {/* name */}
                    </p>
                </div>
            </div>
        </div>
        </div>
        
        </section>
    );

}