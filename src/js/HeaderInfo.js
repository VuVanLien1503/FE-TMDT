import '../css/HeaderInfo.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function HeaderInfo(props) {
    const [user, setUser] = useState([])
    const idAccount = localStorage.getItem("idAccount")
    const roleAccount = localStorage.getItem("role")

    return (
        <>
            <div className="header-info">
                <div className="header-info__container-primary">
                    <div>
                            <img src={props.img}/>
                    </div>
                    <h2 className="header-info__title">{props.name}</h2>
                </div>

                <ul className="header-info__container-navbar">
                    <li className="navbar-items">
                        <i className="fa-solid fa-caret-right"></i>
                        <Link to={"/edit_user"}>Tài Khoản</Link>
                    </li>

                    {roleAccount === "3" &&
                        <>
                            <li className="navbar-items"> <Link to={"/bills"}>Lịch sử mua hàng</Link></li>
                            <li className="navbar-items">
                                <Link to={"/cart"}>Giỏ hàng</Link>
                            </li>
                        </>
                    }

                    {roleAccount === "2" &&
                        <li className="navbar-items">
                            <div>
                                Cửa hàng của tôi
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                            <ul className="navbar-items__second">
                                <li className="navbar-items__second-items">
                                    <Link to={`/shop-admin/${idAccount}`}>
                                          Sản phẩm
                                    </Link>
                                </li>
                                <li className="navbar-items__second-items">Khuyến mãi</li>
                                <li className="navbar-items__second-items">Đơn hàng</li>
                                <li className="navbar-items__second-items">Thống kê</li>
                            </ul>
                        </li>}
                </ul>

                <Link to={"/"} className="nav__back-home">
                    <i className="fa-solid fa-arrow-left"></i>
                    <span className="navbar-items"> Quay lại trang chủ </span>
                </Link>
            </div>
        </>
    )
}