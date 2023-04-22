import '../css/Crud.css'
import HeaderPage from "./HeaderPage";
import FooterForm from "./FooterForm";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "./FirebaseConfig";
import Swal from "sweetalert2";

export default function Crud() {
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
    const [id,setId] = useState(0)
    const [product,setProduct] = useState([])
    const navigate = useNavigate()

    const [checkUser,setCheckUser]=useState(false)

    useEffect(() => {
        if (localStorage.getItem("idAccount")){

            axios.get(`http://localhost:8081/home/shops/${param.id}`).then((response) => {
                setShop(response.data)
                console.log(localStorage.getItem("idAccount"))
                console.log(response.data.account.id)
                if (localStorage.getItem("idAccount")==response.data.account.id){
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
                    })
                }else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Bạn Không Có Quyền Truy Cập',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(r => {
                        navigate("/")
                    })
                }
            })
        }else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Bạn Cần Đăng Nhập',
                showConfirmButton: false,
                timer: 1500
            }).then(r => {
                navigate("/login")
            })
        }

    }, [])
    let index=0
    return (
        <>
            <HeaderPage/>
            <div id="main" className="main-home">
                <div id="main__crud">
                    <div className="grid wide container__form-edit">
                        <div className="row container-btn">
                            <div className="col l-2 container-btn-create">
                                <div className="btn" onClick={() => formSave(-1)}>Thêm sản phẩm</div>
                            </div>

                            <div className="col l-2 container-btn-create">
                                <div className="btn btn-create">Thêm mã giảm giá</div>
                            </div>
                        </div>
                        <div>
                            <div className="row table__head">
                                <h3 className="col l-1">STT</h3>
                                <h3 className="col l-1">Ảnh</h3>
                                <h3 className="col l-3">Tên sản phẩm</h3>
                                <h3 className="col l-3">Mô tả</h3>
                                <h3 className="col l-1">Số lượng</h3>
                                <h3 className="col l-1">Giá</h3>
                                <h3 className="col l-2">Chỉnh sửa</h3>
                            </div>
                            {products != null && products.map((product) => {
                                return (
                                    <>
                                        <div className="row table__content">
                                            <div className="col l-1">{++index}</div>
                                            <div className="col l-1" >
                                                <img src={product.imagePath[0]}/>
                                            </div>
                                            <div className="col l-3">{product.name}</div>
                                            <div className="col l-3">{product.description}</div>
                                            <div className="col l-1">{product.quantity}</div>
                                            <div className="col l-1">{product.price}</div>
                                            <div className="col l-2">
                                                <div className="row">
                                                    <div className="col l-6">
                                                        <div className="btn btn-edit" onClick={() => formSave(product.id)}>Sửa</div>
                                                    </div>
                                                    <div className="col l-6">
                                                        <div className="btn btn-delete" onClick={()=>deleteProduct(product.id)}>Xoá</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
            <FooterForm/>
            <div id="modal">
                <div className="modal__background" onClick={closeModal}></div>
                <div className="modal__container">
                        <span className="modal__close" onClick={closeModal}>
                            <i className="modal__close-icon fa-solid fa-xmark"></i>
                        </span>
                    <h1 className="modal__container-title" style={{marginLeft: 100}}>
                        {id===-1&&<span>Thêm Sản Phẩm</span>}
                        {id!==-1&&<span>Chỉnh Sửa Sản Phẩm</span>}
                    </h1>

                    {/*formik open*/}
                    <Formik
                        initialValues={{
                            id: id,
                            name: product.name ? product.name:'',
                            quantity: product.quantity ? product.quantity:'',
                            price: product.price ? product.price:'',
                            description: product.description ? product.description:'',
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
                        enableReinitialize={true}
                    >
                        {(formik) => (
                            <Form id={"demo"}>
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
                                    <Field
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

        </>

    )
    function showDetailProduct(id) {
        alert("detail product " + id)
    }
    function deleteProduct(id){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn sẽ không thể hoàn tác điều này!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có',
            cancelButtonText: 'không',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8081/home/shops/delete/${id}`).then((response) => {
                    swalWithBootstrapButtons.fire(
                        'Xóa Sản Phẩm',
                        'Tập tin của bạn xóa thành công',
                        'success'
                    )

                })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Đã hủy',
                    'Tập tin của bạn an toàn)',
                    'error'
                )
            }
        })
    }

    function formSave(id) {
        setId(id)
        if (id!==-1){
            axios.get(`http://localhost:8081/home/products/${id}`).then((response) => {
                setProduct(response.data)
            })
        }
        document.getElementById("modal").style.display = "flex"
    }

    function save(values) {
        if (id!==-1){
            values.id=id
        }
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
            document.getElementById("demo").reset()
            setImage('')
            setProgressPercent(0)
        })
    }

    function closeModal() {
        document.getElementById("demo").reset()
        setImage('')
        setProgressPercent(0)
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