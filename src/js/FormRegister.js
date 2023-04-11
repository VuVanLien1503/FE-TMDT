import '../css/Register.css'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from "formik";
import HeaderForm from "./HeaderForm";
import FooterForm from "./FooterForm";
import ContentForm from "./ContentForm";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function FormRegister() {
    const [status,setStatus] = useState("password")
    const Validation = Yup.object().shape({
        phone: Yup.string().min(0, "Số điện thoại không hợp lệ!").max(11, "Số điện thoại không hợp lệ!").required("Bạn chưa nhập thông tin!"),
        password: Yup.string().required("Bạn chưa nhập mật khẩu!").min(6, "Mật khẩu từ 6 đến 8 ký tự!").max(15, "Mật khẩu từ 6 đến 8 ký tự!"),
        name: Yup.string().required("Bạn cần nhập thông tin!"),
        email: Yup.string().required("Bạn cần nhập thông tin!"),
        address: Yup.string().required("Bạn cần nhập thông tin!")
    })
    return (
        <>
            <Formik
                initialValues={{
                    phone: "",
                    password: "",
                    name: "",
                    email: "",
                    address: ""
                }}
                onSubmit={(values) => {
                    sendData(values)
                }}
                validationSchema={Validation}>

                <Form>
                    <div id="main">
                        <HeaderForm/>

                        {/*Start Body & Form*/}
                        <div id="body">
                            <div className="grid wide">
                                <div className="row body__container">
                                    <ContentForm/>

                                    <div className="col l-6">
                                        <div className="body__right">
                                            <div className="body__right-container">
                                                <h1 className="body__right-title">Đăng Ký Tài Khoản</h1>
                                                <div className="form">
                                                    <div className="form__field">
                                                        <div className="row">
                                                            <div className="col l-6">
                                                                <div className="form__field-container">
                                                                    <div className="form__field-items">
                                                                        <Field name={'phone'} className="input--no-wrap" type="text"
                                                                               placeholder="Số điện thoại(*)"/>
                                                                    </div>
                                                                    <div className={'error__message'}><ErrorMessage name={'phone'}/></div>
                                                                </div>
                                                            </div>

                                                            <div className="col l-6">
                                                                <div className="form__field-container">
                                                                    <div className="form__field-items">
                                                                        <Field name={'password'} id="password" className="input--no-wrap"
                                                                               type={status} placeholder="Mật khẩu(*)"/>
                                                                        <div id="event" className="form__field-items-icon"
                                                                             onClick={setStatusPassword}>
                                                                            <i id="eye-open" className="fa-solid fa-eye"></i>
                                                                            <i id="eye-close" className="fa-solid fa-eye-slash"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className={'error__message'}><ErrorMessage name={'password'}/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form__field">
                                                        <div className="form__field-container">
                                                            <Field name={'name'} type="text" placeholder="Tên(*)"/>
                                                            <div className={'error__message'}><ErrorMessage name={'name'}/></div>
                                                        </div>
                                                    </div>

                                                    <div className="form__field">
                                                        <div className="form__field-container">
                                                            <Field name={'email'} type="email" placeholder="Email(*)"/>
                                                            <div className={'error__message'}><ErrorMessage name={'email'}/></div>
                                                        </div>
                                                    </div>

                                                    <div className="form__field">
                                                        <div className="form__field-container">
                                                            <Field name={'address'} type="text" placeholder="Địa chỉ(*)"/>
                                                            <div className={'error__message'}><ErrorMessage name={'address'}/></div>
                                                        </div>
                                                    </div>

                                                    <div className="container__btn">
                                                        <div className="container__btn-desc">
                                                            <span> Bạn đăng kí là: </span>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col l-6">
                                                                <div className="container__btn">
                                                                    <div className="btn">Người cung cấp</div>
                                                                </div>
                                                            </div>

                                                            <div className="col l-6">
                                                                <div className="container__btn">
                                                                    <div className="btn" onClick={openModal}>Người dùng</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="footer__form">
                                                        <span className="footer__form-text">Bạn đã có tài khoản FCBlue?</span>
                                                        <Link to={"/login"}>Đăng nhập</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Body & Form*/}
                        <FooterForm/>
                    </div>
                    {/*Start Modal*/}
                    <div id="modal">
                        <div className="modal__background" onClick={closeModal}></div>
                        <div className="modal__container">
            <span className="modal__close" onClick={closeModal}>
                <i className="modal__close-icon fa-solid fa-xmark"></i>
            </span>
                            <h1 className="modal__container-title">Nhập mã xác nhận</h1>
                            <div className="modal__container-input">
                                <input type="text" placeholder="Mời nhập mã xác nhận..."/>
                            </div>

                            <div className="modal__container-desc">
                                <span>Mã xác nhận đã được gửi vào mail của bạn. Vui lòng kiểm tra mail để lấy mã!</span>
                            </div>

                            <div className="btn">Xác nhận</div>
                        </div>
                    </div>
                    {/*End Modal*/}
                </Form>
            </Formik>
        </>
    )

    // Ẩn - hiện mật khẩu
    function setStatusPassword(){
        if (status === "password"){
            setStatus("text");
            document.getElementById("eye-open").style.display = "block";
            document.getElementById("eye-close").style.display = "none";

        }else {
            setStatus("password");
            document.getElementById("eye-open").style.display = "none";
            document.getElementById("eye-close").style.display = "block";
        }
    }

    // Mở modal nhập mã xác nhận
    function openModal() {
        document.getElementById("modal").style.display = "flex"
    }

    // Đóng modal nhập mã xác nhận
    function closeModal() {
        document.getElementById("modal").style.display = "none"
    }

    function sendData(values) {

    }
}