import '../css/Cart.css'
import HeaderPage from "./HeaderPage";
import FooterForm from "./FooterForm";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function Cart() {
    let idAccount = localStorage.getItem("idAccount")
    const [carts, setCart] = useState([])
    const [productUpdate, setProductUpdate] = useState([])
    const [bill, setBill] = useState([])
    const [billDetail, setBillDetail] = useState([])
    const param = useParams()
    const [check,setCheck]=useState(false)
    const [prevCarts, setPrevCarts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8081/home/carts/${idAccount}`).then((response) => {
            setPrevCarts(carts);
            setCart(response.data)
        })
    }, [check]);
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
                                    {carts !== ''&& carts.map((element)=>{
                                        const prevElement = prevCarts
                                        return(
                                            <div className="row" key={element.product.id}>
                                                <div className="col l-3">
                                                    <div className="body__cart-product-left">
                                                        <div className="row">
                                                            <div className="col l-3">
                                                                <div className="cart__product-img">
                                                                    <img src={element.product.imagePath[0]}/>
                                                                </div>
                                                            </div>
                                                            <div className="col l-9">
                                                                <div className="cart__product-name">
                                                                    {element.product.name}
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
                                                                        {element.product.price}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col l-3">
                                                                <div className="detail__quantity product-cart__quantity">
                                                                    <div className="detail__quantity-btn detail__quantity-reduce" onClick={() => reduceQuantity(element.product.id)}>
                                                                        -
                                                                    </div>
                                                                    <div className="detail__quantity-number">
                                                                        {element.quantity}
                                                                    </div>
                                                                    <div className="detail__quantity-btn detail__quantity-increase" onClick={()=>increaseQuantity(element.product.id)}>
                                                                        +
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col l-3">
                                                                <div className="product-action__wrap">
                                                                    <div className="product__text">Tổng: </div>
                                                                    <div className="product__total product-money">
                                                                        {element.product.price*element.quantity}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col l-2">
                                                                <div className="btn btn-delete" onClick={() =>deleteProductInCart(element.product.id)}>Xoá</div>
                                                            </div>
                                                            <div className="col l-2">
                                                                <div className="btn btn-pay" onClick={() => payProduct(element.quantity, element.product.id, element.product.price, element.product)}>Thanh toán</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
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
                    axios.post(`http://localhost:8081/home/products/update`,productUpdate).then((res) =>{
                        axios.post(`http://localhost:8081/home/carts/delete/product-cart/${idAccount}`,product).then((res) =>{
                            setCheck(!check)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Đặt hàng thành công!',
                                showConfirmButton: false,
                                timer: 1500
                        })
                    })
                })
            })

        })

    }

    console.log("Hoang lao ta")
}