import '../css/Home.css'
import HeaderPage from "./HeaderPage";
import FooterForm from "./FooterForm";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Slide} from "react-slideshow-image";
import Loading from "./Loading";
import ShowAllProduct from "./ShowAllProduct";
import Swal from "sweetalert2";

export default function PageHome() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [flag, setFlag] = useState(true)
    const [user, setUser] = useState([])
    const param = useParams()
    const [search ,setSearch]=useState([
        {
            name:"",
            idCategory:0,
            priceMin:0,
            priceMax:100000000
        }
    ])

    useEffect(() => {
        axios.get(`http://localhost:8081/home/categories`).then((response) => {
            setCategories(response.data)
            axios.get(`http://localhost:8081/home/products`).then((response) => {
                setProducts(response.data.content)
                setSearch(response.data.search)
                console.log(response.data)
                setFlag(false)
            }).catch(() => {
                setFlag(false)
            }).finally(() => {
                setFlag(false)
            })
        }).catch(() => {
            setFlag(false)
        }).finally(() => {
            setFlag(false)
        })


    }, [])

    function searchByName(search) {
        alert(search)
        // axios.get(`/${search}`).then((response) => {
        //     setProducts(response.data.content)
        // })
    }
    return (
        <>
            <div id="main" className="main-home">
                <HeaderPage  onClick={searchByName}/>
                <div id="body__home">
                    <div className="body__home-top">
                        <div className="grid wide">
                            <div className="row sm-gutter">
                                <div className="col l-8 body__home-slider">
                                    <Slide autoplay={true} indicators={true}>
                                        <div className="body__home-top-img">
                                            <img src="/img/logo/vn-50009109-d842090bb8a2e1d44cf9652604d8e300_xxhdpi.jfif"/>
                                        </div>

                                        <div className="body__home-top-img">
                                            <img src="/img/logo/vn-50009109-870d0ac705aede51ebba573147345f62_xxhdpi.jfif"/>
                                        </div>

                                        <div className="body__home-top-img">
                                            <img src="/img/logo/vn-50009109-ce4512e83a9d299b5a43f612f719a443_xxhdpi.jfif"/>
                                        </div>

                                        <div className="body__home-top-img">
                                            <img src="/img/logo/vn-50009109-d94c4b91414ec0e0a53fad6d6e9ca77f_xxhdpi.jfif"/>
                                        </div>

                                        <div className="body__home-top-img">
                                            <img src="/img/logo/vn-50009109-fa79715264f5c973648d8096a8aa9773_xxhdpi.jfif"/>
                                        </div>
                                    </Slide>
                                </div>

                                <div className="col l-4">
                                    <div className="body__home-top-right-img margin-bottom">
                                        <img src="/img/logo/vn-50009109-13ec323a46f0cec8bac22be085d3d674_xhdpi.jfif"/>
                                    </div>

                                    <div className="body__home-top-right-img">
                                        <img src="/img/logo/vn-50009109-a57459766d7ee95c6d71da0db9ff2e74_xhdpi.jfif"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid wide">
                        <div className="body__home-container">
                            <div className="row">
                                <div className="col l-2">
                                    <div className="body__home-container-category">
                                        <div className="body__home-container-title">
                                            <i className="fa-solid fa-bars"></i>
                                            <span>Danh Mục</span>
                                        </div>
                                        <ul className="body__home-container-nav">
                                            <li className="">
                                                <div className="body__home-container-nav-items">Tất cả</div>
                                            </li>

                                            <li className="">
                                                <div className="body__home-container-nav-items">Đồ dùng điện tử</div>
                                            </li>
                                            {categories.map((category) => {
                                                return (
                                                    <>
                                                        <li className="">
                                                            <div className="body__home-container-nav-items">{category.name}</div>
                                                        </li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>

                                    <div className="body__home-container-filter">
                                        <div className="body__home-container-title">
                                            <i className="fa-solid fa-filter"></i>
                                            <span>Bộ lọc tìm kiếm</span>
                                        </div>
                                        <div className="body__home-container-filter-items">
                                            <span>Nơi bán</span>
                                            <ul className="body__home-container-filter-items-nav">
                                                <li className="body__home-container-filter-items-wrap">
                                                    <input type={"checkbox"} id="hanoi"/>
                                                    <label htmlFor={"hanoi"}>Hà Nội</label>
                                                </li>

                                                <li className="body__home-container-filter-items-wrap">
                                                    <input type={"checkbox"} id="hcm"/>
                                                    <label htmlFor={"hcm"}>Hồ Chí Minh</label>
                                                </li>

                                                <li className="body__home-container-filter-items-wrap">
                                                    <input type={"checkbox"} id="tn"/>
                                                    <label htmlFor={"tn"}>Thái Nguyên</label>
                                                </li>

                                                <li className="body__home-container-filter-items-wrap">
                                                    <input type={"checkbox"} id="tb"/>
                                                    <label htmlFor={"tb"}>Thái Bình</label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="body__home-container-filter-items">
                                            <span>Khoảng Giá</span>
                                            <div className="filter-container__input">
                                                <div className="filter__input">
                                                    <input placeholder={"đ Từ"}/>
                                                </div>

                                                <div className="filter__input">
                                                    <input placeholder={"đ Đến"}/>
                                                </div>

                                                <div className="filter__container-btn">
                                                    <div className="btn btn-filter">Áp Dụng</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col l-10">
                                    <div className="body__home-container-btn-sort">

                                    </div>
                                    <div className="body__home-container-products">
                                        <div className="body__home-container-products-title">
                                            <h2>Sản phẩm</h2>
                                        </div>

                                <div className="row">
                                    {products!=null&&products.map((product) => {
                                        return (
                                            <>
                                                <div className="col l-3">
                                                    <Link to={"#"} className="body__container-product">
                                                        <div className="product__img">
                                                            <Link to={`detail/${product.id}`} >
                                                                <img src={product.imagePath[0]} />
                                                            </Link>
                                                        </div>

                                                        <div className="product__content">
                                                            <h2 className="product__title">{product.name}</h2 >

                                                            <div className="product__name-shop">
                                                                <i className="fa-solid fa-store"></i>
                                                                <Link to={`/shop/${product.shop.id}`}>{product.shop.name}</Link>
                                                            </div>

                                                            <span className="product__tag-shop"> # {product.category.name}</span>
                                                            <div className="product__price">
                                                                <span>{product.price}</span>
                                                                <p>đ</p>
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

                                        </div>

                                        <div className="body__home-nav-page">
                                            <div className="nav-page__container">
                                                <div className="nav-page__container-btn">
                                                    <div className="btn btn-prev">
                                                        <i className="fa-solid fa-chevron-left"></i>
                                                    </div>
                                                </div>

                                                <ul className="nav-page__container-number-page">
                                                    <li className="btn btn-page"> 1</li>
                                                    <li className="btn btn-page"> 2</li>
                                                    <li className="btn btn-page"> 3</li>
                                                    <li className="btn btn-page"> 4</li>
                                                    <li className="btn btn-page"> 5</li>
                                                </ul>

                                                <div className="nav-page__container-btn">
                                                    <div className="btn btn-next">
                                                        <i className="fa-solid fa-chevron-right"></i>
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
                </div>
            {flag && <Loading/>}
            </div>
        </>
    )

    function showDetailProduct(id) {
        alert("ShowProduct " + id)
    }

    function showShop(id) {
        alert("Shop: " + id)
    }
}