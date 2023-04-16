import '../css/Home.css'
import HeaderPage from "./HeaderPage";
import FooterForm from "./FooterForm";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
export default function PageHome() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/home/categories`).then((response) => {
            setCategories(response.data)
        })

        axios.get(`http://localhost:8081/home/products`).then((response) => {
            setProducts(response.data.content)
        })
    }, [])
    return (
        <>
            <div id="main" className="main-home">
                <HeaderPage/>

                <div id="body__home">
                    <div className="body__home-top">
                        <div className="grid wide">
                            <div className="row sm-gutter">
                                <div className="col l-8">
                                    <div className="body__home-top-img">
                                        <img src="/img/logo/vn-50009109-d842090bb8a2e1d44cf9652604d8e300_xxhdpi.jfif"/>
                                    </div>
                                </div>

                                <div className="col l-4">
                                    <div className="body__home-top-right-img margin-bottom">
                                        <img src="/img/logo/vn-50009109-13ec323a46f0cec8bac22be085d3d674_xhdpi.jfif"/>
                                    </div>

                                    <div className="body__home-top-right-img">
                                        <img src="/img/logo/vn-50009109-13ec323a46f0cec8bac22be085d3d674_xhdpi.jfif"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid wide">
                        <div className="body__home-container">
                            <div className="body__home-container-category">
                                <h2 className="body__home-container-title">Danh Mục</h2>
                                <ul className="row body__home-container-nav">
                                    <li className="col l-2">
                                        <div className="body__home-container-nav-items">Đồ dùng điện tử</div>
                                    </li>
                                    {categories.map((category) => {
                                        return (
                                            <>
                                                <li className="col l-2">
                                                    <div className="body__home-container-nav-items">{category.name}</div>
                                                </li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="body__home-container-products">
                                <div className="body__home-container-products-title">
                                    <h2>Sản phẩm</h2>
                                </div>

                                <div className="row">

                                    {/*Phần hiện sản phẩm*/}
                                    <div className="col l-2">
                                        <Link to={"#"} className="body__container-product">
                                            <div className="product__img">
                                                <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"
                                                     alt=""/>
                                            </div>
                                            <div className="product__content">
                                                <h4 className="product__title">
                                                    SAMSUNG GALAXY123333333333333 2333333333333333333333333333333333333333333333
                                                </h4>
                                                <span className="product__tag-shop">#Hàng bán chạy</span>
                                                <div className="product__price">
                                                    <p>đ</p>
                                                    <span>10.000.000</span>
                                                </div>
                                                <div className="product__rating">
                                                    ######
                                                </div>
                                                <div className="product__address">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <span>Thái Nguyên</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {products.map((product) => {
                                        return (
                                            <>
                                                <div className="col l-2">
                                                    <Link to={"#"} className="body__container-product">
                                                        <div className="product__img">
                                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"
                                                                 alt=""/>
                                                        </div>
                                                        <div className="product__content">
                                                            <h4 className="product__title">
                                                                {product.name}
                                                            </h4>
                                                            <span className="product__tag-shop">#{product.category.name}</span>
                                                            <div className="product__price">
                                                                <p>đ</p>
                                                                <span>{product.price}</span>
                                                            </div>
                                                            <div className="product__rating">
                                                                ######
                                                            </div>
                                                            <div className="product__address">
                                                                <i className="fa-solid fa-location-dot"></i>
                                                                <span>{product.shop.account.users.address}</span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    })}
                                    {/**/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterForm/>
            </div>
        </>
    )
}