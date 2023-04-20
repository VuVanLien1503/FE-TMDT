import '../css/Cart.css'
import HeaderPage from "./HeaderPage";
import FooterForm from "./FooterForm";
import React, {useState} from "react";
export default function Cart() {
    const[quantityCart, setQuantityCart] = useState(0)
    return (
        <>
            <div id="main-cart">
                <HeaderPage/>

                <div className="body__cart">
                    <div className="body__cart-head">
                        <div className="grid wide">
                            <div className="body__cart-title">
                                <i className="fa-solid fa-cart-shopping"></i>
                                Giỏ hàng
                            </div>
                        </div>
                    </div>

                    <div className="grid wide">
                        <div className="body__cart-content">
                            {/*hiển thị sản phẩm trong giỏ hàng*/}
                            <div className="body__cart-content-container">
                                <div className="body__cart-name-shop">
                                    <i className="fa-solid fa-store"></i>
                                    ZteeBoss
                                </div>
                                <div className="body__cart-product">
                                    <div className="row">
                                        <div className="col l-3">
                                            <div className="body__cart-product-left">
                                                <div className="row">
                                                    <div className="col l-3">
                                                        <div className="cart__product-img">
                                                            <img src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"/>
                                                        </div>
                                                    </div>

                                                    <div className="col l-9">
                                                        <div className="cart__product-name">
                                                            Điện thoại lp 13 promax lướt bản 256gb giá rẻ, hệ điều hành lOS 16.2, tặng phụ kiện
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col l-9">
                                            <div className="cart__product-action">
                                                <div className="row">
                                                    <div className="col l-2">
                                                        <div className="product-action__wrap">
                                                            <div className="product__text">Đơn giá: </div>
                                                            <div className="product__unit-price product-money">
                                                                125.000đ
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col l-3">
                                                        <div className="detail__quantity product-cart__quantity">
                                                            <div className="detail__quantity-btn detail__quantity-reduce" onClick={reduceQuantity}>
                                                                -
                                                            </div>
                                                            <div className="detail__quantity-number">
                                                                {quantityCart}
                                                            </div>
                                                            <div className="detail__quantity-btn detail__quantity-increase" onClick={increaseQuantity}>
                                                                +
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col l-3">
                                                        <div className="product-action__wrap">
                                                            <div className="product__text">Tổng: </div>
                                                            <div className="product__total product-money">
                                                                125.000đ
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col l-2">
                                                        <div className="btn btn-delete">Xoá</div>
                                                    </div>
                                                    <div className="col l-2">
                                                        <div className="btn btn-pay">Thanh toán</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*    */}
                        </div>
                    </div>
                </div>

                <FooterForm/>
            </div>
        </>
    )

    //Tăng số lượng sản phẩm
    function increaseQuantity() {
        setQuantityCart(quantityCart + 1)
    }

    //Giảm số luợng sản phẩm
    function reduceQuantity() {
        if (quantityCart === 0) {
            setQuantityCart(0)
        } else {
            setQuantityCart(quantityCart - 1)
        }
    }
}