import '../css/Detail.css'
import HeaderPage from "./HeaderPage";
import FooterForm from "./FooterForm";
import {useState} from "react";
export default function Detail() {
    const [quantity, setQuantity] = useState(0)

    return (
        <>
            <HeaderPage/>

            <div className="body__detail">
                <div className="grid wide">
                    <div className="body__detail-container">
                        <div className="row">
                            <div className="col l-5">
                                <div className="body__detail-container-left">
                                    <div className="container__img-primary">
                                        <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                    </div>

                                    <ul className="container__img-second">
                                       <li className="container__img-second-items">
                                           <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                       </li>

                                        <li className="container__img-second-items">
                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                        </li>

                                        <li className="container__img-second-items">
                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                        </li>

                                        <li className="container__img-second-items">
                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                        </li>

                                        <li className="container__img-second-items">
                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                        </li>

                                        <li className="container__img-second-items">
                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col l-7">
                                <div className="body__detail-container-right">
                                    <h2 className="detail__title">Dép Nam, Dép Nữ Nam Quai Ngang bền đẹp đi không nóng chân đủ size</h2>
                                    <div className="detail__container-price">
                                        đ
                                        <div className="detail__price">1.000</div>
                                    </div>

                                    <div className="detail__info">
                                        <div className="row detail__info-shared detail__info-address">
                                            <span className="col l-3 detail__info-shared-title">Vận chuyển</span>
                                            <div className="col l-9 detail__info-shared-content">
                                                <i className="fa-solid fa-truck-fast"></i>
                                                <span>Vận chuyển tới</span>
                                                <div className="detail__address">Sơn Cẩm, TP.Thái Nguyên, Thái Nguyên</div>
                                            </div>
                                        </div>

                                        <div className="row detail__info-shared detail__info-desc">
                                            <span className="col l-3 detail__info-shared-title">Mô tả</span>
                                            <div className="col l-9 detail__info-shared-content">
                                                <div className="detail__desc"> Trọng lượng nhẹ, bạn sẽ không cảm thấy mệt mỏi khi đeo cả ngày dài, Tròng kính và gọng kính chất lượng cao, Bảo vệ chống bức xạ, Bảo vệ mắt của bạn khỏi bức xạ từ máy tính và điện thoại di động, Thiết kế thời trang hợp thời trang, Được thiết kế bởi các nhà thiết kế giàu kinh nghiệm và theo xu hướng mới nhất, Đây là một món quà phù hợp cho những người làm việc tại máy tính, Để bạn nổi bật giữa đám đông và thời trang</div>
                                            </div>
                                        </div>

                                        <div className="row detail__info-shared detail__info-quantity">
                                            <span className="col l-3 detail__info-shared-title">Số lượng</span>
                                            <div className="col l-9 detail__info-shared-content">
                                                <div className="detail__quantity">
                                                    <div className="detail__quantity-btn detail__quantity-reduce" onClick={reduceQuantity}>
                                                        -
                                                    </div>
                                                    <div className="detail__quantity-number">
                                                        {quantity}
                                                    </div>
                                                    <div className="detail__quantity-btn detail__quantity-increase" onClick={increaseQuantity}>
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterForm/>
        </>
    )

    // Tăng số lượng
    function increaseQuantity() {
        setQuantity(quantity + 1)
    }

    // Giảm số lượng
    function reduceQuantity() {
        if (quantity === 0) {
            setQuantity(0)
        } else {
            setQuantity(quantity - 1)
        }
    }
}