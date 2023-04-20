import '../css/Detail.css'
import HeaderPage from "./HeaderPage";
import FooterForm from "./FooterForm";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Detail() {
    const [quantity, setQuantity] = useState(0)
    const [product, setProduct] = useState([])
    const [shop, setShop] = useState([])
    const [image, setImage] = useState([])
    const param = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8081/home/products/${param.id}`).then((response) => {
            setProduct(response.data)
            setImage(response.data.imagePath)
            axios.get(`http://localhost:8081/home/shops/product/${response.data.id}`).then((response) => {
                setShop(response.data)
            })
        })

    }, [])
    console.log(shop)
    return (
        <>
            <HeaderPage/>
            <div className="body__detail">
                <div className="grid wide">
                    <div className="body__detail-container">
                        <div className="row">
                            <div className="col l-5">
                                <div className="body__detail-container-left">
                                    <div className="container__img-primary">
                                        {/*<img src={image[0]} />*/}
                                        <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                    </div>

                                    <ul className="container__img-second">
                                        <li className="container__img-second-items">
                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                        </li>

                                        <li className="container__img-second-items">
                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                        </li>

                                        <li className="container__img-second-items">
                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col l-7">
                                <div className="body__detail-container-right">
                                    <h2 className="detail__title">
                                        {product.name}
                                    </h2>
                                    <div className="detail__container-price">
                                        đ
                                        <div className="detail__price">
                                            {product.price}
                                        </div>
                                    </div>

                                    <div className="detail__info">
                                        <div className="row detail__info-shared detail__info-address">
                                            <span className="col l-3 detail__info-shared-title">
                                               <i className="info__icon fa-solid fa-store"></i>
                                            </span>
                                            <div className="col l-9 detail__info-shared-content">

                                                <span onClick={()=>showShop(shop.id)} style={{color:"yellowgreen"}}>{shop.name}</span>
                                            </div>
                                        </div>

                                        <div className="row detail__info-shared detail__info-desc">
                                            <span className="col l-3 detail__info-shared-title">Mô tả</span>
                                            <div className="col l-9 detail__info-shared-content">
                                                <div className="detail__desc">
                                                    {product.description}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row detail__info-shared detail__info-quantity">
                                            <span className="col l-3 detail__info-shared-title">Số lượng</span>
                                            <div className="col l-9 detail__info-shared-content">
                                                <div className="detail__quantity">
                                                    <div className="detail__quantity-btn detail__quantity-reduce"
                                                         onClick={reduceQuantity}>
                                                        -
                                                    </div>
                                                    <div className="detail__quantity-number">
                                                        {quantity}
                                                    </div>
                                                    <div className="detail__quantity-btn detail__quantity-increase"
                                                         onClick={increaseQuantity}>
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row detail__info-support">
                                        <div className="col l-6">
                                            <div className="detail__info-support-items">
                                                <i className="fa-solid fa-tag"></i>
                                                <span>Hàng chính hãng</span>
                                            </div>

                                            <div className="detail__info-support-items">
                                                <i className="fa-sharp fa-solid fa-truck-fast"></i>
                                                <span>Giao hàng miễn phí trong 90 phút</span>
                                            </div>

                                            <div className="detail__info-support-items">
                                                <i className="fa-solid fa-retweet"></i>
                                                <span>Chính sách đổi trả</span>
                                            </div>
                                        </div>

                                        <div className="col l-6">
                                            <div className="detail__info-support-items">
                                                <i className="fas fa-shield"></i>
                                                <span>Bảo hành 24 tháng</span>
                                            </div>

                                            <div className="detail__info-support-items">
                                                <i className="fa-solid fa-gears"></i>
                                                <span>Chính sách trả góp</span>
                                            </div>

                                            <div className="detail__info-support-items">
                                                <i className="fa-solid fa-piggy-bank"></i>
                                                <span>Hàng chính hãng</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn btn-add-cart">Đặt hàng</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterForm/>
        </>
    )
// vào trang cửa hàng theo id
    function showShop(id){
        alert("Cửa Hàng Có ID : "+ id)
    }
    // Tăng số lượng
    function increaseQuantity() {
        setQuantity(quantity + 1)
    }

    // Giảm số lượng
    function reduceQuantity() {
        if (quantity === 0) {
            setQuantity(0)
        } else {
            setQuantity(quantity - 1)
        }
    }
}