import '../css/HeaderInfo.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function HeaderInfo(props) {
    const [user, setUser] = useState([])
    const idAccount = localStorage.getItem("idAccount")


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
                        Tài Khoản
                    </li>
                    <li className="navbar-items">Lịch sử mua hàng</li>
                    <li className="navbar-items">Giỏ hàng</li>
                    <li className="navbar-items">Cửa hàng của tôi</li>
                </ul>

                <Link to={"/"} className="nav__back-home">
                    <i className="fa-solid fa-arrow-left"></i>
                    <span className="navbar-items"> Quay lại trang chủ </span>
                </Link>
            </div>
        </>
    )
}