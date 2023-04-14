import {Link} from "react-router-dom";

export default function HeaderPage() {
    return (
        <>
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
                            <div className="col l-3">
                                <Link to={"/"} className="header__logo-shop">
                                    <i className="logo-icon-shop fa-solid fa-cloud">
                                        <span className="logo-icon__text-shop">f</span>
                                    </i>
                                    <span className="header_logo--text-shop">FCBlue Mall</span>
                                </Link>
                            </div>

                            <div className="col l-7">
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

                            <div className="col l-2">
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
        </>
    )
}