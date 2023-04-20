import '../css/Shop.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import FooterForm from "./FooterForm";
import HeaderPage from "./HeaderPage";

export default function PageShop() {
    const [account, setAccount] = useState([]);
    const [shop, setShop] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoryShop, setCategoryShop] = useState([])
    const [categories, setCategories] = useState([])
    const [user, setUser] = useState([])
    const [totalElements, setTotalElements] = useState(0)
    const param = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        if (localStorage.getItem("idAccount")) {
            axios.get(`http://localhost:8081/home/shops/information/${param.id}`).then((response) => {
                setShop(response.data)
                // truy van Acc tu ID SHop
                axios.get(`http://localhost:8081/accounts/information/${param.id}`).then((response) => {
                    setAccount(response.data)
                    axios.get(`http://localhost:8081/home/products/shop/${response.data.id}`).then((response) => {
                        setProducts(response.data.content)
                        setTotalElements(response.data.totalElements)
                    })
                    axios.get(`http://localhost:8081/home/shops/${response.data.id}/categories`).then((response) => {
                        setCategoryShop(response.data)
                    })
                    axios.get(`http://localhost:8081/accounts/${response.data.id}`).then((response) => {
                        setUser(response.data)
                        console.log(response.data)
                    })
                })
            })


        } else {
            alert("Bạn Cần Đăng Nhập Để Truy Cập")
            navigate("/login")
        }

    }, [])

    return (
        <>
            <div id="main">
                {/*Start Header*/}
                <div id="header__page-shop">
                    {/*<div className="header__primary">*/}
                    {/*    <div className="grid wide">*/}
                    {/*        <div className="header__navbar">*/}
                    {/*            <div className="header__navbar-items">*/}
                    {/*                <ul className="header__nav">*/}
                    {/*                    <li className="header__nav-items">Trang chủ FCBlue Mall</li>*/}
                    {/*                    <li className="header__nav-items">Tải ứng dụng</li>*/}
                    {/*                    <li className="header__nav-items">*/}
                    {/*                        Kết nối*/}
                    {/*                        <i className="header__nav-item-icon fa-brands fa-facebook"></i>*/}
                    {/*                        <i className="header__nav-item-icon fa-brands fa-instagram"></i>*/}
                    {/*                    </li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*            <div className="header__navbar-items">*/}
                    {/*                <ul className="header__nav">*/}
                    {/*                    <li className="header__nav-items">*/}
                    {/*                        <i className="header__nav-item-icon fa-solid fa-circle-question"></i>*/}
                    {/*                        Hỗ trợ*/}
                    {/*                    </li>*/}
                    {/*                    <li className="header__nav-items">*/}
                    {/*                        <Link to={"/login"}>*/}
                    {/*                            Xin Chào {user.name}....!*/}
                    {/*                            <i className="header__nav-icon-down fa-solid fa-caret-down"></i>*/}
                    {/*                        </Link>*/}
                    {/*                    </li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="header__container">*/}
                    {/*            <div className="row header__container--align">*/}
                    {/*                <div className="col l-4">*/}
                    {/*                    <Link to={"/"} className="header__logo-shop">*/}
                    {/*                        <i className="logo-icon-shop fa-solid fa-cloud">*/}
                    {/*                            <span className="logo-icon__text-shop">f</span>*/}
                    {/*                        </i>*/}
                    {/*                        <span className="header_logo--text-shop">FCBlue Mall</span>*/}
                    {/*                    </Link>*/}
                    {/*                </div>*/}

                    {/*                <div className="col l-5">*/}
                    {/*                    <div className="header__container-right">*/}
                    {/*                        <div className="header__search">*/}
                    {/*                            <input type="text" className="header__search-input"*/}
                    {/*                                   placeholder="Tìm kiếm trong shop"/>*/}
                    {/*                            <div className="header__search-btn">*/}
                    {/*                                <i className="header__search-icon fa-solid fa-magnifying-glass"></i>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <HeaderPage/>
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
                                                            <i className="info__icon fa-solid fa-store"></i>
                                                            Tên cửa hàng: <span
                                                            className="info__detail">{shop.name}</span>
                                                        </li>

                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-solid fa-phone"></i>
                                                            Số điện thoại: <span
                                                            className="info__detail">{user.phone}</span>
                                                        </li>

                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-solid fa-envelope"></i>
                                                            Email: <span className="info__detail">{user.email}</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col l-6">
                                                    <ul className="header__right-container">
                                                        <li className="header__right-info">

                                                            Số lượng sản phẩm: <span
                                                            className="info__detail">{totalElements}</span>
                                                        </li>

                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-sharp fa-solid fa-location-dot"></i>
                                                            Địa chỉ: <span
                                                            className="info__detail">{user.address}</span>
                                                        </li>

                                                        <li className="header__right-info">
                                                            <i className="info__icon fa-sharp fa-solid fa-bookmark"></i>
                                                            Mô tả: <span
                                                            className="info__detail">{shop.description}</span>

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
                                        {categoryShop !== '' && categoryShop.map((category) => {
                                            return (
                                                <li className="category__items"
                                                    onClick={() => showDetailCategory(category.id)}>{category.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="col l-10">
                                <div className="body__products">
                                    <div className="row">

                                        {/*Start show product*/}
                                        {products != null && products.map((product) => {
                                            return (
                                                <>
                                                    <Link to={"#"} className="col l-3">
                                                        <div className="body__container-product">
                                                            <div className="product__img">
                                                                <Link to={`/detail/${product.id}`}>
                                                                    <img src={product.imagePath[0]}/>
                                                                </Link>
                                                            </div>
                                                            <div className="product__content">
                                                                <h4 className="product__title">
                                                                    {product.name}
                                                                </h4>
                                                                <div className="product__price">
                                                                    <p>đ</p>
                                                                    <span>{product.price}</span>
                                                                </div>
                                                                <div className="product__rating">
                                                                    <h3 onClick={() => {
                                                                        showDetailCategory(product.category.id)
                                                                    }}>{product.category.name}</h3>
                                                                </div>
                                                                <div className="product__rating">
                                                                    <h3> Số Lượng :  {product.quantity}</h3>
                                                                </div>
                                                                <div>
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


    function showDetailCategory(id) {
        alert("detail category " + id)
    }

    function showDetailProduct(id) {
        alert("detail product " + id)
    }


}