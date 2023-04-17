import '../css/Shop.css'
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import FooterForm from "./FooterForm";
import {ErrorMessage, Field, Form, Formik} from "formik";
import storage from './FirebaseConfig';
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import * as Yup from "yup";


export default function PageShop() {

    // validation modal open
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Vui lòng nhập tên sản phẩm'),

        description: Yup.string()
            .required('Vui lòng nhập mô tả'),

        quantity: Yup.number()
            .required('Vui lòng nhập số lượng sản phẩm')
            .positive('Số lượng sản phẩm phải lớn hơn 0'),

        price: Yup.number()
            .required('Vui lòng nhập giá sản phẩm')
            .positive('Giá sản phẩm phải lớn hơn 0'),

        category: Yup.object()
            .required('Vui lòng chọn danh mục sản phẩm'),
    });
    // validation close


    const [progressPercent, setProgressPercent] = useState(0)
    const [image, setImage] = useState("")
    const [imagePath, setImagePath] = useState([])


    const [shop, setShop] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoryShop, setCategoryShop] = useState([])
    const [categories, setCategories] = useState([])
    const [user, setUser] = useState([])
    const [totalElements, setTotalElements] = useState(0)
    const param = useParams()
    const [check, setCheck] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8081/home/products/shop/${param.id}`).then((response) => {
            setProducts(response.data.content)
            setTotalElements(response.data.totalElements)
        })
        axios.get(`http://localhost:8081/home/categories`).then((response) => {
            setCategories(response.data)
        })
        axios.get(`http://localhost:8081/home/shops/${param.id}/categories`).then((response) => {
            setCategoryShop(response.data)
        })
        axios.get(`http://localhost:8081/accounts/${param.id}`).then((response) => {
            setUser(response.data)
            console.log(response.data)
        })
        axios.get(`http://localhost:8081/home/shops/${param.id}`).then((response) => {
            setShop(response.data)
        })
    }, [])

    return (
        <>
            <div id="main">
                {/*Start Header*/}
                <div id="header__page-shop">
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
                                        <li className="header__nav-items">
                                            <Link to={"/login"}>
                                            Xin Chào {user.name}....!
                                            <i className="header__nav-icon-down fa-solid fa-caret-down"></i>
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header__container">
                                <div className="row header__container--align">
                                    <div className="col l-4">
                                        <Link to={"/"} className="header__logo-shop">
                                            <i className="logo-icon-shop fa-solid fa-cloud">
                                                <span className="logo-icon__text-shop">f</span>
                                            </i>
                                            <span className="header_logo--text-shop">FCBlue Mall</span>
                                        </Link>
                                    </div>

                                    <div className="col l-5">
                                        <div className="header__container-right">
                                            <div className="header__search">
                                                <input type="text" className="header__search-input"
                                                       placeholder="Tìm kiếm trong shop"/>
                                                <div className="header__search-btn">
                                                    <i className="header__search-icon fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                <div className="body__action">
                                    <div className="btn" onClick={addProduct}>Thêm sản phẩm</div>
                                </div>
                                <div className="body__products">
                                    <div className="row">

                                        {/*Start show product*/}
                                        {products != null && products.map((product) => {
                                            return (
                                                <>
                                                    <Link to={"#"} className="col l-3">
                                                        <div className="body__container-product">
                                                            <div className="product__img">
                                                                {/*<img*/}
                                                                {/*    src="/img/logo/vn-11134207-7qukw-lf5kh01qrr7u09_tn.jfif"*/}
                                                                {/*    alt=""/>*/}
                                                                <img onClick={() => {
                                                                    showDetailProduct(product.id)
                                                                }} src={product.imagePath[0]}/>
                                                            </div>
                                                            <div className="product__content">
                                                                <h4 className="product__title">
                                                                    {product.name}
                                                                </h4>
                                                                <span
                                                                    className="product__tag-shop">#{product.description}</span>
                                                                <div className="product__price">
                                                                    <p>đ</p>
                                                                    <span>{product.price}</span>
                                                                </div>
                                                                <div className="product__rating">
                                                                    <h3 onClick={() => {
                                                                        showDetailCategory(product.category.id)
                                                                    }}>{product.category.name}</h3>
                                                                </div>
                                                                <div className="product__address">
                                                                    <i className="fa-solid fa-location-dot"></i>
                                                                    <span>{user.address}</span>
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
            {/*Start Modal*/}
            <div id="modal">
                <div className="modal__background" onClick={closeModal}></div>
                <div className="modal__container">
                        <span className="modal__close" onClick={closeModal}>
                            <i className="modal__close-icon fa-solid fa-xmark"></i>
                        </span>
                    <h1 className="modal__container-title" style={{marginLeft: 100}}>CREATE-PRODUCT</h1>

                    {/*formik open*/}
                    <Formik
                        initialValues={{
                            name: '',
                            quantity: '',
                            price: '',
                            description: '',
                            imagePath: '',
                            category: {
                                id: ''
                            }
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            save(values)
                        }}
                    >
                        {(formik) => (
                            <Form>
                                <div>
                                    <div>
                                        <ErrorMessage name="name"/>
                                    </div>
                                    <div className="form__field">
                                        <div className="form__field-container">
                                            <Field name={'name'} type="text"
                                                   placeholder="Tên Sản Phẩm(*)"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div><ErrorMessage name="price"/></div>
                                    <div className="form__field">
                                        <div className="form__field-container">
                                            <Field name={'price'} type="text"
                                                   placeholder="Đơn giá sản phẩm(*)"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <ErrorMessage name="quantity"/>
                                    </div>
                                    <div className="form__field">
                                        <div className="form__field-container">
                                            <Field name={'quantity'} type="text"
                                                   placeholder="Số lượng sản phẩm(*)"/>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <ErrorMessage name="description"/>
                                    </div>
                                    <div className="form__field">
                                        <div className="form__field-container">
                                            <Field name={'description'} type="text"
                                                   placeholder="Mô tả sản Phẩm(*)"/>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <ErrorMessage name="category"/>
                                    </div>
                                    <div>
                                        <Field id="category" name="category.id" as="select"
                                               style={{width: 400, height: 35}}>
                                            <option value={''}>Vui lòng chọn category</option>
                                            {categories != null && categories.map((item, id) => (
                                                <option key={id} value={item.id}>{item.name}</option>
                                            ))}
                                        </Field>
                                    </div>
                                </div>
                                <div style={{marginTop: 10, marginBottom: 10}}>
                                    <h3>IMAGE</h3>
                                </div>
                                <div className="form__field">
                                    <input
                                        name="image"
                                        type="file"
                                        multiple
                                        onChange={(e) => uploadFile(e)}/>
                                </div>
                                <div>
                                    {
                                        !image &&
                                        <h3 className='inner-bar'
                                            style={{width: `${progressPercent} % `}}>{progressPercent}%</h3>
                                    }
                                    {
                                        image &&
                                        <img src={image} alt='uploaded file' style={{width: 100, height: 100}}/>
                                    }
                                </div>
                                <div className="container__btn"
                                     style={{marginLeft: 100, marginBottom: 20, marginTop: 10}}>
                                    <div className="row">
                                        <div className="col l-8">
                                            <div className="container__btn">
                                            </div>
                                            <button type={"submit"} className={'btn btn-primary'}
                                                    aria-disabled={check}>Xác Nhận
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    {/*formik close*/}

                </div>
            </div>
            {/*End Modal*/}
        </>
    )


    function showDetailCategory(id) {
        alert("detail category " + id)
    }

    function showDetailProduct(id) {
        alert("detail product " + id)
    }

    function addProduct() {
        document.getElementById("modal").style.display = "flex"
    }

    function save(values) {
        values.imagePath = imagePath
        axios.post(` http://localhost:8081/home/products/shop/${param.id}`, values).then((response) => {
            axios.get(`http://localhost:8081/home/categories`).then((response) => {
                setCategories(response.data)
            })
            axios.get(`http://localhost:8081/home/shops/${param.id}/categories`).then((response) => {
                setCategoryShop(response.data)
            })
            axios.get(`http://localhost:8081/home/products/shop/${param.id}`).then((response) => {
                setProducts(response.data.content)
                setTotalElements(response.data.totalElements)
            })
            closeModal()
        })


    }

    function closeModal() {
        document.getElementById("modal").style.display = "none"
    }

    function uploadFile(e) {
        let a = []
        setCheck(true)
        const files = e.currentTarget.files;
        console.log(files)
        for (let i = 0; i < files.length; i++) {
            if (e.target.files) {
                const time = new Date().getTime()
                const storageRef = ref(storage, `image/${time}_${e.target.files[i].name}`);
                const uploadTask = uploadBytesResumable(storageRef, e.target.files[i]);

                uploadTask.on("state_changed",
                    (snapshot) => {
                        const progress =
                            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        setProgressPercent(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            a = [downloadURL, ...a]
                            setImage(downloadURL)
                            setImagePath([...a])
                            setCheck(false)
                        });
                    }
                );
            }
        }
        e.currentTarget.value = null;

    }


}