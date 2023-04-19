import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PageHome from "./PageHome";

export default function HeaderPage(props) {
    console.log(props)
    let idAccount = localStorage.getItem("idAccount")
    console.log(idAccount)
    const [user, setUser] = useState([])
    const [nameLogin, setNameLogin] = useState("")
    const navigate = useNavigate()
    const [carts, setCart] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/accounts/${idAccount}`).then((response) => {
            setUser(response.data)
            setNameLogin(response.data.name)
        })

        axios.get(`http://localhost:8081/home/carts/${idAccount}`).then((response) => {
            setCart(response.data)
        })

    }, [])
    console.log(user)
    console.log(carts)

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
                                {nameLogin===''&&   <li className="header__nav-items"><Link to={"/register"}>Đăng ký</Link></li>}
                                {nameLogin!==''&&   <li className="header__nav-items" onClick={logout}>Đăng xuất</li>}
                                {nameLogin===''&&  <li className="header__nav-items"><Link to={"/login"}>Đăng nhập</Link></li>}
                                {nameLogin!==''&&  <li className="header__nav-items"><Link to={"/login"}>{nameLogin}</Link></li>}
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
                                        <div className="btn header__search-btn">
                                            <i className="header__search-icon fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-2">
                                {nameLogin!=="lien"&& <div className="header__cart">
                                    <i className="header__cart-icon fa-solid fa-cart-shopping"></i>
                                    <div className="header__cart-container">
                                        <div className="has-cart">
                                            <h3 className="cart__title">Sản phẩm đã chọn</h3>
                                            <ul className="has__cart-container">
                                                {carts!==''&& carts.map((element)=>{
                                                    return(
                                                        <>
                                                            <li className="has__cart-items">
                                                                <div className="row">
                                                                    <div className="col l-1 has__cart-img">
                                                                        <img src={element.imagePath[0]}/>
                                                                    </div>
                                                                    <div className="col l-6">
                                                                        <div className="has__cart-head">
                                                                            <div className="has__cart-head-title">{element.name}</div>
                                                                            <div className="has__cart-head-desc">{element.category.name}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col l-5">
                                                                        <div className="has__cart-action">
                                                                            <div className="has__cart-calculate">
                                                                                <div className="has__cart-price">{element.price}</div>
                                                                                {/*<div className="has__cart-quantity">x 2</div>*/}
                                                                            </div>
                                                                            <div className="has__cart-delete">Xoá</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                            <div className="has__cart-container-btn">
                                                <div className="btn btn-cart">Xem giỏ hàng</div>
                                            </div>
                                        </div>

                                        <div className="no-cart">
                                            <img src="/img/logo/empty-cart.webp"/>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    function logout() {
        localStorage.setItem("idAccount","")
        navigate("/login")
    }
}