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
import {paste} from "@testing-library/user-event/dist/paste";

export default function PageHome() {
    const [pageNumber, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)


    const [categories, setCategories] = useState([])
    const [city, setCity] = useState([])
    const [products, setProducts] = useState([])
    const [flag, setFlag] = useState(true)
    const [user, setUser] = useState([])
    const param = useParams()
    const [value, setValue] = useState("")
    const [search, setSearch] = useState({})
    const [priceMin, setPriceMin] = useState("0")
    const [nameProduct, setNameProduct] = useState("")
    const [priceMax, setPriceMax] = useState("100000000")
    const [idCategory, setIdCategory] = useState("0")
    const [checkSort, setCheckSort] = useState(true)
    const [renderHome, serRenderHome] = useState(false)


    function sortPrice() {
        setCheckSort(!checkSort)
        if (checkSort) {
            products.sort((a, b) => {
                return a.price - b.price
            })
            setProducts([...products])
        } else {
            products.sort((a, b) => {
                return b.price - a.price
            })
            setProducts([...products])
        }

    }

    function searchByName(input) {
        if (input !== undefined) {
            setNameProduct(input)
        }
        if (priceMin === '' && priceMax === '') {
            const a = {
                name: nameProduct,
                idCategory: idCategory,
                priceMin: "0",
                priceMax: "100000000"
            }
            axios.post(`http://localhost:8081/home/products/search?page=${pageNumber}`, a).then((response) => {
                setProducts(response.data.products.content)
                setSearch(response.data.search)
                setTotalPages(response.data.products.content.totalPages)
            })
        } else {
            if (priceMin === '') {
                const a = {
                    name: nameProduct,
                    idCategory: idCategory,
                    priceMin: "0",
                    priceMax: priceMax
                }
                axios.post(`http://localhost:8081/home/products/search?page=${pageNumber}`, a).then((response) => {
                    setProducts(response.data.products.content)
                    setSearch(response.data.search)
                    setTotalPages(response.data.products.content.totalPages)

                })
            } else {
                const a = {
                    name: nameProduct,
                    idCategory: idCategory,
                    priceMin: priceMin,
                    priceMax: priceMax
                }
                axios.post(`http://localhost:8081/home/products/search?page=${pageNumber}`, a).then((response) => {
                    setProducts(response.data.products.content)
                    setSearch(response.data.search)
                    setTotalPages(response.data.products.content.totalPages)
                })
            }
            if (priceMax === '') {
                const a = {
                    name: nameProduct,
                    idCategory: idCategory,
                    priceMin: priceMin,
                    priceMax: "100000000"
                }
                axios.post(`http://localhost:8081/home/products/search?page=${pageNumber}`, a).then((response) => {
                    setProducts(response.data.products.content)
                    setSearch(response.data.search)
                    setTotalPages(response.data.products.content.totalPages)
                })
            } else {
                const a = {
                    name: nameProduct,
                    idCategory: idCategory,
                    priceMin: priceMin,
                    priceMax: priceMax
                }
                axios.post(`http://localhost:8081/home/products/search?page=${pageNumber}`, a).then((response) => {
                    setProducts(response.data.products.content)
                    setSearch(response.data.search)
                    setTotalPages(response.data.products.content.totalPages)
                })
            }

        }
    }
    function isPrevious() {
        setPage(pageNumber - 1)
        console.log(pageNumber)
        axios.get(`http://localhost:8081/home/product?page=${pageNumber-1}`).then((response) => {
            setProducts(response.data.products.content)
            setSearch(response.data.search)

        })

    }
    function isNext() {
        setPage(pageNumber + 1)
        console.log(pageNumber)
        axios.get(`http://localhost:8081/home/products?page=${pageNumber + 1}`).then((response) => {
            setProducts(response.data.products.content)
            setSearch(response.data.search)
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:8081/home/city`).then((repose) => {
            setCity(repose.data)
        })
        axios.get(`http://localhost:8081/home/categories`).then((response) => {
            setCategories(response.data)
            axios.get(`http://localhost:8081/home/products?page=${pageNumber}`).then((response) => {
                setProducts(response.data.content)
                setTotalPages(response.data.totalPages)
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
    }, [pageNumber,renderHome])
    useEffect(searchByName, [idCategory, priceMin, priceMax,nameProduct])

    function backToHome() {
        serRenderHome(!renderHome)
        resetValue()
    }

    function resetValue() {
        document.getElementById("priceMin").value = ""
        document.getElementById("priceMax").value = ""
    }

    return (
        <>
            <div id="main" className="main-home">
                <HeaderPage onClick={searchByName} home={backToHome}/>
                <div id="body__home">
                    <div className="body__home-top">
                        <div className="grid wide">
                            <div className="row sm-gutter">
                                <div className="col l-8 body__home-slider">
                                    <Slide autoplay={true} indicators={true}>
                                        <div className="body__home-top-img">
                                            <img
                                                src="/img/logo/vn-50009109-d842090bb8a2e1d44cf9652604d8e300_xxhdpi.jfif"/>
                                        </div>

                                        <div className="body__home-top-img">
                                            <img
                                                src="/img/logo/vn-50009109-870d0ac705aede51ebba573147345f62_xxhdpi.jfif"/>
                                        </div>

                                        <div className="body__home-top-img">
                                            <img
                                                src="/img/logo/vn-50009109-ce4512e83a9d299b5a43f612f719a443_xxhdpi.jfif"/>
                                        </div>

                                        <div className="body__home-top-img">
                                            <img
                                                src="/img/logo/vn-50009109-d94c4b91414ec0e0a53fad6d6e9ca77f_xxhdpi.jfif"/>
                                        </div>

                                        <div className="body__home-top-img">
                                            <img
                                                src="/img/logo/vn-50009109-fa79715264f5c973648d8096a8aa9773_xxhdpi.jfif"/>
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
                                                <div className="body__home-container-nav-items"
                                                     onClick={() => {
                                                         backToHome()
                                                     }}
                                                >Tất cả
                                                </div>
                                            </li>

                                            {categories.map((category) => {
                                                return (
                                                    <>
                                                        <li className="">
                                                            <div className="body__home-container-nav-items"
                                                                 onClick={() => {
                                                                     setIdCategory(category.id)
                                                                     setPage(0)
                                                                 }}>
                                                                {category.name}
                                                            </div>
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
                                                {city.map((city) => {
                                                    return (
                                                        <>
                                                            <li className="body__home-container-filter-items-wrap">
                                                                <input type={"checkbox"} id={city.name}/>
                                                                <label htmlFor={city.name}>{city.name}</label>
                                                            </li>
                                                        </>
                                                    )
                                                })}

                                            </ul>
                                        </div>

                                        <div className="body__home-container-filter-items">
                                            <span>Khoảng Giá</span>
                                            <div className="filter-container__input">
                                                <div className="filter__input">
                                                    <input type={"number"} id={"priceMin"} placeholder={"đ Từ"}
                                                           onChange={(e) => {
                                                               setPriceMin(e.target.value)
                                                               setPage(0)
                                                           }}/>
                                                </div>

                                                <div className="filter__input">
                                                    <input type={"number"} id={"priceMax"} placeholder={"đ Đến"}
                                                           onChange={(e) => {
                                                               setPriceMax(e.target.value)
                                                               setPage(0)
                                                           }}/>
                                                </div>

                                                {/*<div className="filter__container-btn">*/}
                                                {/*    <div className="btn btn-filter"*/}
                                                {/*    onClick={()=>{searchByName(nameProduct)}}>*/}
                                                {/*        Áp Dụng*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col l-10">
                                    <div className="body__home-container-products">
                                        <div className="body__home-container-products-title">
                                            <h2>Sản phẩm</h2>
                                        </div>

                                        <div className="body__home-container-btn-sort">
                                            <div className="row">
                                                <div className="col l-2">
                                                    <div className="btn"
                                                         onClick={() =>
                                                             sortPrice()}>
                                                        {checkSort && "Giá Tăng"}
                                                        {!checkSort && "Giá Giảm"}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row body__home-container-products-all">
                                            {products != null && products.map((product) => {
                                                return (
                                                    <>
                                                        <div className="col l-3">
                                                            <Link to={"#"} className="body__container-product">
                                                                <div className="product__img">
                                                                    <Link to={`detail/${product.id}`}>
                                                                        {/*<img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>*/}
                                                                        <img src={product.imagePath[0]} />
                                                                    </Link>
                                                                </div>

                                                                <div className="product__content">
                                                                    <h2 className="product__title">{product.name}</h2>

                                                                    <div className="product__name-shop">
                                                                        <i className="fa-solid fa-store"></i>
                                                                        <Link
                                                                            to={`/shop/${product.shop.id}`}>{product.shop.name}</Link>
                                                                    </div>

                                                                    <span
                                                                        className="product__tag-shop"> # {product.category.name}</span>
                                                                    <div className="product__price">
                                                                        <span>{product.price}</span>
                                                                        <p>đ</p>
                                                                    </div>
                                                                    <div className="product__address">
                                                                        <i className="fa-solid fa-location-dot"></i>
                                                                        {/*<span>{product.shop.account.users.address}</span>*/}
                                                                        <span>{product.shop.city.name}</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )
                                            })}

                                        </div>
                                        {/*page*/}
                                        {/*{pageNumber > 0 && <button className="btn btn-primary" id="backup" onClick={isPrevious}>Previous</button>}*/}
                                        {/*<span>{pageNumber + 1} | {totalPages}</span>*/}
                                        {/*{pageNumber + 1 < totalPages && <button className="btn btn-primary" id="next" onClick={isNext}>Next</button>}*/}

                                        <div className="body__home-nav-page">
                                            <div className="nav-page__container">
                                                <div className="nav-page__container-btn" onClick={isPrevious}>
                                                    {pageNumber > 0 &&
                                                        <div className="btn btn-prev">
                                                            <i className="fa-solid fa-chevron-left" ></i>
                                                        </div>}

                                                </div>

                                                <ul className="nav-page__container-number-page">
                                                    <li className="btn btn-page">{pageNumber + 1} | {totalPages}</li>
                                                </ul>

                                                <div className="nav-page__container-btn" onClick={isNext}>
                                                    {pageNumber + 1 < totalPages &&
                                                        <div className="btn btn-next">
                                                            <i className="fa-solid fa-chevron-right" ></i>
                                                        </div>}

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
