import '../css/Shop.css'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import FooterForm from "./FooterForm";
export default function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const param =useParams()

    useEffect(() => {
        axios.get(`http://localhost:8081/home/products/shop/${param.id}` ).then((response) => {
            setProducts(response.data.content)
            console.log(response.data.content)
        })

        axios.get(`http://localhost:8081/home/categories`).then((response) => {
            setCategories(response.data)
        })
    }, [])

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
                                        <li className="header__nav-items">Trang chủ FCBlue Mall</li>
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
                                    <div className="col l-4">
                                        <Link to={"/"} className="header__logo-shop">
                                            <i className="logo-icon-shop fa-solid fa-cloud">
                                                <span className="logo-icon__text-shop">f</span>
                                            </i>
                                            <span className="header_logo--text-shop">FCBlue Mall</span>
                                        </Link>
                                    </div>

                                    <div className="col l-5">
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
                                            <div className="header__cart-container">
                                                <div className="has-cart">
                                                    <h3 className="cart__title">Sản phẩm đã chọn</h3>
                                                    <ul className="has__cart-container">
                                                        <li className="has__cart-items">
                                                            <div className="row">
                                                                <div className="col l-1 has__cart-img">
                                                                    <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                </div>
                                                                <div className="col l-6">
                                                                    <div className="has__cart-head">
                                                                        <div className="has__cart-head-title">VGA ASUS Phoenix GeForce RTX 3050 8GB GDDR6 aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                                                        <div className="has__cart-head-desc">Loại hàng: Máy tính</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col l-5">
                                                                    <div className="has__cart-action">
                                                                        <div className="has__cart-calculate">
                                                                            <div className="has__cart-price">2.000.000</div>
                                                                            <div className="has__cart-quantity">x 2</div>
                                                                        </div>
                                                                        <div className="has__cart-delete">Xoá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="has__cart-items">
                                                            <div className="row">
                                                                <div className="col l-1 has__cart-img">
                                                                    <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                </div>
                                                                <div className="col l-6">
                                                                    <div className="has__cart-head">
                                                                        <div className="has__cart-head-title">VGA ASUS Phoenix GeForce RTX 3050 8GB GDDR6 aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                                                        <div className="has__cart-head-desc">Loại hàng: Máy tính</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col l-5">
                                                                    <div className="has__cart-action">
                                                                        <div className="has__cart-calculate">
                                                                            <div className="has__cart-price">2.000.000</div>
                                                                            <div className="has__cart-quantity">x 2</div>
                                                                        </div>
                                                                        <div className="has__cart-delete">Xoá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="has__cart-items">
                                                            <div className="row">
                                                                <div className="col l-1 has__cart-img">
                                                                    <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                </div>
                                                                <div className="col l-6">
                                                                    <div className="has__cart-head">
                                                                        <div className="has__cart-head-title">VGA ASUS Phoenix GeForce RTX 3050 8GB GDDR6 aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                                                        <div className="has__cart-head-desc">Loại hàng: Máy tính</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col l-5">
                                                                    <div className="has__cart-action">
                                                                        <div className="has__cart-calculate">
                                                                            <div className="has__cart-price">2.000.000</div>
                                                                            <div className="has__cart-quantity">x 2</div>
                                                                        </div>
                                                                        <div className="has__cart-delete">Xoá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="has__cart-items">
                                                            <div className="row">
                                                                <div className="col l-1 has__cart-img">
                                                                    <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                </div>
                                                                <div className="col l-6">
                                                                    <div className="has__cart-head">
                                                                        <div className="has__cart-head-title">VGA ASUS Phoenix GeForce RTX 3050 8GB GDDR6 aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                                                        <div className="has__cart-head-desc">Loại hàng: Máy tính</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col l-5">
                                                                    <div className="has__cart-action">
                                                                        <div className="has__cart-calculate">
                                                                            <div className="has__cart-price">2.000.000</div>
                                                                            <div className="has__cart-quantity">x 2</div>
                                                                        </div>
                                                                        <div className="has__cart-delete">Xoá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="has__cart-items">
                                                            <div className="row">
                                                                <div className="col l-1 has__cart-img">
                                                                    <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                </div>
                                                                <div className="col l-6">
                                                                    <div className="has__cart-head">
                                                                        <div className="has__cart-head-title">VGA ASUS Phoenix GeForce RTX 3050 8GB GDDR6 aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                                                        <div className="has__cart-head-desc">Loại hàng: Máy tính</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col l-5">
                                                                    <div className="has__cart-action">
                                                                        <div className="has__cart-calculate">
                                                                            <div className="has__cart-price">2.000.000</div>
                                                                            <div className="has__cart-quantity">x 2</div>
                                                                        </div>
                                                                        <div className="has__cart-delete">Xoá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="has__cart-items">
                                                            <div className="row">
                                                                <div className="col l-1 has__cart-img">
                                                                    <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                </div>
                                                                <div className="col l-6">
                                                                    <div className="has__cart-head">
                                                                        <div className="has__cart-head-title">VGA ASUS Phoenix GeForce RTX 3050 8GB GDDR6 aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                                                        <div className="has__cart-head-desc">Loại hàng: Máy tính</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col l-5">
                                                                    <div className="has__cart-action">
                                                                        <div className="has__cart-calculate">
                                                                            <div className="has__cart-price">2.000.000</div>
                                                                            <div className="has__cart-quantity">x 2</div>
                                                                        </div>
                                                                        <div className="has__cart-delete">Xoá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="has__cart-items">
                                                            <div className="row">
                                                                <div className="col l-1 has__cart-img">
                                                                    <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                </div>
                                                                <div className="col l-6">
                                                                    <div className="has__cart-head">
                                                                        <div className="has__cart-head-title">VGA ASUS Phoenix GeForce RTX 3050 8GB GDDR6 aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                                                        <div className="has__cart-head-desc">Loại hàng: Máy tính</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col l-5">
                                                                    <div className="has__cart-action">
                                                                        <div className="has__cart-calculate">
                                                                            <div className="has__cart-price">2.000.000</div>
                                                                            <div className="has__cart-quantity">x 2</div>
                                                                        </div>
                                                                        <div className="has__cart-delete">Xoá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="has__cart-items">
                                                            <div className="row">
                                                                <div className="col l-1 has__cart-img">
                                                                    <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                </div>
                                                                <div className="col l-6">
                                                                    <div className="has__cart-head">
                                                                        <div className="has__cart-head-title">VGA ASUS Phoenix GeForce RTX 3050 8GB GDDR6 aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                                                        <div className="has__cart-head-desc">Loại hàng: Máy tính</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col l-5">
                                                                    <div className="has__cart-action">
                                                                        <div className="has__cart-calculate">
                                                                            <div className="has__cart-price">2.000.000</div>
                                                                            <div className="has__cart-quantity">x 2</div>
                                                                        </div>
                                                                        <div className="has__cart-delete">Xoá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                    <div className="has__cart-container-btn">
                                                        <div className="btn btn-cart">Xem giỏ hàng</div>
                                                    </div>
                                                </div>
                                            </div>
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
                                        {categories.map((category) => {
                                            return (
                                                <li className="category__items">{category.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="col l-10">
                                <div className="body__action">
                                    <div className="btn">Thêm sản phẩm</div>
                                </div>
                                <div className="body__products">
                                    <div className="row">

                                        {/*Start show product*/}
                                        {products.map((product) => {
                                            return (
                                                <>
                                                    <Link to={"#"} className="col l-3">
                                                        <div className="body__container-product">
                                                            <div className="product__img">
                                                                <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"
                                                                     alt=""/>
                                                            </div>
                                                            <div className="product__content">
                                                                <h4 className="product__title">
                                                                    {product.name}
                                                                </h4>
                                                                <span className="product__tag-shop">#{product.description}</span>
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
                                                    </Link>
                                                </>
                                            )
                                        })}
                                        {/*End show product*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Body*/}

                {/*Start Footer*/}
                <FooterForm/>
                {/*End Footer*/}
            </div>
        </>
    )
}