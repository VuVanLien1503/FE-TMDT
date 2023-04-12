import {ErrorMessage, Field, Form, Formik} from "formik";
import HeaderForm from "./HeaderForm";
import ContentForm from "./ContentForm";
import FooterForm from "./FooterForm";
import * as Yup from 'yup'
import '../css/Login.css'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function FormLogin() {
    const navigate = useNavigate()
    const [status,setStatus] = useState("password")
    const Validation = Yup.object().shape({
        password: Yup.string().required("Bạn chưa nhập mật khẩu!").min(6, "Mật khẩu từ 6 đến 8 ký tự!").max(15, "Mật khẩu từ 6 đến 8 ký tự!"),
        email: Yup.string().required("Bạn cần nhập thông tin!"),
    })
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
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
                                            <div className="body__right-container-login">
                                                <h1 className="body__right-title">
                                                    Đăng Nhập
                                                </h1>
                                                <div className="form">
                                                    <div className="form__field">
                                                        <div className="form__field-container">
                                                            <Field name={'email'} type="email" placeholder="Email(*)"/>
                                                            <div className={'error__message'}><ErrorMessage name={'email'}/></div>
                                                        </div>

                                                    </div>

                                                    <div className="form__field">
                                                        <div className="form__field-container">
                                                            <Field name={'password'} id="password" type={status} placeholder="Mật khẩu(*)"/>
                                                            <div id="event" className="form__field-items-icon-login"
                                                                 onClick={setStatusPassword}>
                                                                <i id="eye-open" className="fa-solid fa-eye"></i>
                                                                <i id="eye-close" className="fa-solid fa-eye-slash"></i>
                                                            </div>
                                                            <div className={'error__message'}><ErrorMessage name={'password'}/></div>
                                                        </div>
                                                    </div>

                                                    <div className="container__btn">
                                                        <div className="row">
                                                            <div className="col l-6">
                                                                <div className="container__btn">
                                                                    <button type={"submit"} className="btn">Đăng nhập</button>
                                                                </div>
                                                            </div>

                                                            <div className="col l-6">
                                                                <div className="container__btn">
                                                                    <div className="btn" onClick={backHome}>Quay lại</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="container__btn-desc-login">
                                                            <span>HOẶC</span>
                                                        </div>
                                                    </div>

                                                    <div className="footer__form">
                                                        <span className="footer__form-text">Bạn mới biết đến FCBlue?</span>
                                                        <Link to={"/register"}>Đăng ký</Link>
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
                </Form>
            </Formik>
        </>
    )

    // Ẩn - hiện mật khẩu
    function setStatusPassword (){
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

    function sendData(values) {

    }

    function backHome() {
        navigate("/")
    }
}