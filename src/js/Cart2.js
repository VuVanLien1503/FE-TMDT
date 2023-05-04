import '../css/Cart2.css'
import {Field, Form, Formik} from "formik";
import HeaderInfo from "./HeaderInfo";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart2() {
    const [check,setCheck] = useState(false)
    const idAccount = localStorage.getItem("idAccount")
    const navigate = useNavigate()
    const [bill, setBill] = useState([])
    const [billDetail, setBillDetail] = useState([])
    const[img, setImg] = useState("/img/logo/avatar-facebook-mac-dinh-8.jpg")
    const [name, setName] = useState("")
    const [account, setAccount] = useState({})
    const [prevCarts, setPrevCarts] = useState([])
    const [carts, setCart] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/accounts/${idAccount}`).then((response) => {
            setAccount(response.data)
            setName(response.data.name)
            if (account.pathImage===null){
                setImg(img)
            }else {
                setImg(response.data.pathImage)
            }
        })

        axios.get(`http://localhost:8081/home/carts/${idAccount}`).then((response) => {
            setPrevCarts(carts);
            setCart(response.data)
        })
    }, [check])

    return (
        <>
            <div id="main-cart">
                    <HeaderInfo name={name} img={img}/>
                    <div className="container__form-edit-user">
                        <div className="form-edit-user__header">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <h1>Giỏ hàng</h1>
                        </div>

                        <div className="form-edit-user__container-form">
                            <div className="form-edit-user__form">
                                <div className="form-edit-user__form-title">
                                    <h2>Sản phẩm đã đặt hàng</h2>
                                    <span>Danh sách sản phẩm đang chờ đặt hàng</span>
                                </div>

                                <div className="form-cart">
                                    <ul className="list-product__cart">
                                        {carts.length !== 0 && carts.map((cart) => {
                                            return (
                                                <>
                                                    <li className="product-items">
                                                        <div className="row">
                                                            <div className="col l-3">
                                                                <div className="product-items__container">
                                                                    <div className="product-items__container--center">
                                                                        <div className="product-items__container-img">
                                                                            <img src="/img/logo/avatar-facebook-mac-dinh-8.jpg"/>
                                                                            {/*<img src={cart.product.imagePath[0]} alt=""/>*/}
                                                                        </div>
                                                                    </div>

                                                                    <div className="product-items__container-price">
                                                                        Đơn giá
                                                                        <div className="product-items__price">
                                                                            <span>{cart.product.price}</span>
                                                                            đ</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col l-3">
                                                                <div className="product-items__container">
                                                                    <div className="product-items__text">
                                                                        Số lượng mua
                                                                    </div>

                                                                    <div className="detail__quantity product-cart__quantity">
                                                                        <div className="detail__quantity-btn detail__quantity-reduce" onClick={() => reduceQuantity(cart.product.id)}>
                                                                            -
                                                                        </div>
                                                                        <div className="detail__quantity-number">
                                                                            {cart.quantity}
                                                                        </div>
                                                                        <div className="detail__quantity-btn detail__quantity-increase" onClick={()=>increaseQuantity(cart.product.id)}>
                                                                            +
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col l-2">
                                                                <div className="product-items__container">
                                                                    <div className="product-items__text">
                                                                        Tổng:
                                                                    </div>

                                                                    <div className="product-items__total">
                                                                        <span>100000</span>
                                                                        đ
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col l-4 product-items--center">
                                                                <div className="product-items__container">
                                                                    <div className="product-items__container-btn">
                                                                        <div className="btn btn-cancel" onClick={() =>deleteProductInCart(cart.product.id)}>Huỷ</div>
                                                                    </div>

                                                                    <div className="product-items__container-btn">
                                                                        <div className="btn btn-pay" onClick={() =>payProduct(cart.quantity, cart.product.id, cart.product.price, cart.product)}>Thanh toán</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })}

                                        {carts.length === 0 && <img src="/img/logo/empty-cart.webp" alt=""/>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )

    //Tăng số lượng sản phẩm
    function increaseQuantity(id) {
        axios.get(`http://localhost:8081/home/products/${id}`).then((res)=>{
            axios.post(`http://localhost:8081/home/carts/${idAccount}/add/product`, res.data).then((res)=>{
                setCheck(!check)
            })
        })

    }

    //Giảm số luợng sản phẩm
    function reduceQuantity(id) {
        axios.get(`http://localhost:8081/home/products/${id}`).then((res)=>{
            axios.post(`http://localhost:8081/home/carts/${idAccount}/sub/product`,res.data).then((res)=>{
                setCheck(!check)
            })
        })
    }

    //Xoá sản phẩm khỏi giỏ hàng
    function deleteProductInCart(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'confirmButtonColor',
                cancelButton: 'cancelButtonColor'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Bạn có muốn xóa không',
            text: "Bạn sẽ không thể hoàn tác khi xóa",
            icon: 'warning',
            showCancelButton: true,
            width: 400 ,
            confirmButtonText: 'Có, tôi chắc chắn!',
            cancelButtonText: 'Không, quay lại!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`http://localhost:8081/home/products/${id}`).then((res)=>{
                    console.log(res.data)
                    axios.post(`http://localhost:8081/home/carts/delete/product-cart/${idAccount}`, res.data).then((res)=>{
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Xóa thành công!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setCheck(!check)
                    })
                })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Hủy thành công!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    //Thanh toán sản phẩm
    function payProduct(quantity ,idProduct, price, product){
        const productUpdate={
            id:product.id,
            quantity: product.quantity - quantity,
            description : product.description,
            name : product.name,
            price: product.price,
            category: {
                id: product.category.id,
            },
            shop: {
                id: product.shop.id,
            },
            imagePath : product.imagePath
        }
        const total = quantity * price
        axios.get(`http://localhost:8081/home/shops/product/${idProduct}`).then((res)=> {
            const bill = {
                account: {
                    id: idAccount,
                },
                date: Date.now(),
                shop: {
                    id: res.data.id
                },
                statusBill:{
                    id : 1
                }

            }

            axios.post(`http://localhost:8081/home/bills/create`, bill).then((res) => {
                setBill(res.data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Đặt hàng thành công!',
                    showConfirmButton: false,
                    timer: 1500
                })
                const billDetail = {
                    billDetailId: {},
                    bill: {
                        id: res.data.id
                    },
                    product: {
                        id: idProduct
                    },
                    quantity: quantity,
                    total: total
                }
                axios.post(`http://localhost:8081/home/bills/bill-detail/create`, billDetail ).then((res) => {
                    setBillDetail(res.data)
                })
                axios.post(`http://localhost:8081/home/carts/delete/product-cart/${idAccount}`,product).then((res) =>{
                    setCheck(!check)
                    navigate("/bills")
                })
            })

        })

    }
}