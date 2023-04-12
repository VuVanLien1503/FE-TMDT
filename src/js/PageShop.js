import '../css/Shop.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
export default function PageShop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/home/products/shop`).then((response) => {
            setProducts(response.data.content)
        })
    })
    return (
        <>
            <div id="main">
                {/*Start Header*/}
                <div id="header__page-shop">
                    <div className="header__primary">
                        <div className="grid wide">
                            <div className="header__navbar">
                                <div className="header__navbar-items">
                                    <ul className="header__nav">
                                        <li className="header__nav-items">Trang chủ FCBlue</li>
                                        <li className="header__nav-items">Tải ứng dụng</li>
                                        <li className="header__nav-items">
                                            Kết nối
                                            <i className="header__nav-item-icon fa-brands fa-facebook"></i>
                                            <i className="header__nav-item-icon fa-brands fa-instagram"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header__navbar-items">
                                    <ul className="header__nav">
                                        <li className="header__nav-items">
                                            <i className="header__nav-item-icon fa-solid fa-circle-question"></i>
                                            Hỗ trợ
                                        </li>
                                        <li className="header__nav-items"><Link to={"/register"}>Đăng ký</Link></li>
                                        <li className="header__nav-items"><Link to={"/login"}>Đăng nhập</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header__container">
                                <div className="row header__container--align">
                                    <div className="col l-3">
                                        <div className="header__logo-shop">
                                            <i className="logo-icon-shop fa-solid fa-cloud">
                                                <span className="logo-icon__text-shop">f</span>
                                            </i>
                                            <span className="header_logo--text-shop">FCBlue</span>
                                        </div>
                                    </div>

                                    <div className="col l-6">
                                        <div className="header__container-right">
                                            <div className="header__search">
                                                <input type="text" className="header__search-input"
                                                       placeholder="Tìm kiếm trong shop"/>
                                                    <div className="header__search-btn">
                                                        <i className="header__search-icon fa-solid fa-magnifying-glass"></i>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col l-3">
                                        <div className="header__cart">
                                            <i className="header__cart-icon fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header__shop">
                        <div className="grid wide">
                            <div className="header__shop-container">
                                <div className="row">
                                    <div className="col l-4">
                                        <div className="header__shop-left">
                                            <img className="header__shop-left-img"
                                                 src="/img/logo/62901191827247fbb12c20d02d8bc1f6_tn.jfif"
                                                 alt=""/>
                                                <div className="header__shop-left-content">
                                                    <div className="row">
                                                        <div className="header__shop-img col l-4">
                                                            <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"
                                                                 alt=""/>
                                                        </div>
                                                        <div className="header__shop-info col l-8">
                                                            <div className="header__shop-tittle">
                                                                SAMSUNG OFFICIAL store
                                                            </div>

                                                            <div className="header__shop-address">
                                                                <i className="fa-solid fa-location-dot"></i>
                                                                <span className="header__shop-text">Thái Nguyên</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="col l-8">
                                        <div className="header__right">
                                            <div className="row">
                                                <div className="col l-6">
                                                    <ul className="header__right-container">
                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-solid fa-user"></i>
                                                            Chủ shop: <span className="info__detail">Mạnh Thắng</span>
                                                        </li>

                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-solid fa-phone"></i>
                                                            Số điện thoại: <span
                                                            className="info__detail">0329479090</span>
                                                        </li>

                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-solid fa-envelope"></i>
                                                            Email: <span className="info__detail">0329479090</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col l-6">
                                                    <ul className="header__right-container">
                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-solid fa-store"></i>
                                                            Sản phẩm: <span className="info__detail">62</span>
                                                        </li>

                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-sharp fa-solid fa-location-dot"></i>
                                                            Địa chỉ: <span className="info__detail">62</span>
                                                        </li>

                                                        <li className="header__right-info">

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header*/}

                {/*Start Body*/}
                <div id="body-shop">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-2">
                                <div className="body__category">
                                    <div className="body__category-header">
                                        <i className="category-icon fa-solid fa-bars"></i>
                                        <h2 className="category-title">Danh mục</h2>
                                    </div>
                                    <ul className="category__container">
                                        <li className="category__items">Tất cả</li>
                                        <li className="category__items">Tất cả</li>
                                        <li className="category__items">Tất cả</li>
                                        <li className="category__items">Tất cả</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col l-10">
                                <div className="body__products">
                                    <div className="row">

                                        {/*Start show product*/}
                                        {products.map((product) => {
                                            return (
                                                <>
                                                    <div className="col l-3">
                                                        <div className="body__container-product">
                                                            <div className="product__img">
                                                                <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"
                                                                     alt=""/>
                                                            </div>
                                                            <div className="product__content">
                                                                <div className="product__title">
                                                                    <span>{product.name}</span>
                                                                </div>
                                                                <span className="product__tag-shop">
                                                #SAMSUNG
                                            </span>
                                                                <div className="product__price">
                                                                    <p>đ</p>
                                                                    <span>{product.price}</span>
                                                                </div>
                                                                <div className="product__rating">
                                                                    ######
                                                                </div>
                                                                <div className="product__address">
                                                                    <i className="fa-solid fa-location-dot"></i>
                                                                    <span>Thái Nguyên</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                        <div className="col l-3">
                                            <div className="body__container-product">
                                                <div className="product__img">
                                                    <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"
                                                         alt=""/>
                                                </div>
                                                <div className="product__content">
                                                    <div className="product__title">
                                                        <span>[Nhập ELSA04ET4 Giảm 10% Tối Đa 2TR5] Điện Thoại Samsung Galaxy A04e (3GB/64GB)- Hàng Chính Hãng</span>
                                                    </div>
                                                    <span className="product__tag-shop">
                                                #SAMSUNG
                                            </span>
                                                    <div className="product__price">
                                                        <p>đ</p>
                                                        <span>2.000.000</span>
                                                    </div>
                                                    <div className="product__rating">
                                                        ######
                                                    </div>
                                                    <div className="product__address">
                                                        <i className="fa-solid fa-location-dot"></i>
                                                        <span>Thái Nguyên</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    {/*End show product*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Body*/}

                {/*Start Footer*/}
                <div id="footer__page-shop">
                    <div className="footer__top">
                        <div className="grid wide">
                            <div className="row">
                                <div className="col l-4">
                                    <div className="footer__top-items">
                                        <div className="footer__top-items--algin">
                                            <div className="footer__top-items-img">
                                                <img src="/img/logo/6c502a2641457578b0d5f5153b53dd5d.png" alt=""/>
                                            </div>
                                            <div className="footer__top-items-content">
                                                <div className="footer__top-items-text">
                                                    <div>7 ngày miễn phí trả hàng</div>
                                                    <div>Trả hàng miễn phí trong 7 ngày</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col l-4">
                                    <div className="footer__top-items">
                                        <div className="footer__top-items--algin footer__top-items--center">
                                            <div className="footer__top-items-img">
                                                <img src="/img/logo/511aca04cc3ba9234ab0e4fcf20768a2.png" alt=""/>
                                            </div>
                                            <div className="footer__top-items-content">
                                                <div className="footer__top-items-text">
                                                    <div>Hàng chính hãng 100%</div>
                                                    <div>Đảm bảo hàng chính hãng hoặc hoàn tiền gấp đôi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col l-4">
                                    <div className="footer__top-items">
                                        <div className="footer__top-items--algin footer__top-items--right">
                                            <div className="footer__top-items-img">
                                                <img src="/img/logo/16ead7e0a68c3cff9f32910e4be08122.png" alt=""/>
                                            </div>
                                            <div className="footer__top-items-content">
                                                <div className="footer__top-items-text">
                                                    <div>Miễn phí vận chuyển</div>
                                                    <div>Giao hàng miễn phí toàn quốc</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*End Footer*/}
            </div>
        </>
    )
}