import {ErrorMessage, Field, Form, Formik} from "formik";
import HeaderForm from "./HeaderForm";
import ContentForm from "./ContentForm";
import FooterForm from "./FooterForm";
import * as Yup from 'yup'
import '../css/Login.css'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function FormLogin() {

    const [text, setText] = useState("");
    const [user, setUser] = useState([])
    const [userInput, setUserInput] = useState([])
    const [shop,setShop]=useState({});
    const [nameShop,setNameShop]=useState("")
    const [description,setDescription]=useState("")
    const [account,setAccount]=useState([])

    const navigate = useNavigate()
    const [status, setStatus] = useState("password")
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
                }
                }
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
                                                            <div className={'error__message'}><ErrorMessage
                                                                name={'email'}/></div>
                                                        </div>

                                                    </div>

                                                    <div className="form__field">
                                                        <div className="form__field-container">
                                                            <Field name={'password'} id="password" type={status}
                                                                   placeholder="Mật khẩu(*)"/>
                                                            <div id="event" className="form__field-items-icon-login"
                                                                 onClick={setStatusPassword}>
                                                                <i id="eye-open" className="fa-solid fa-eye"></i>
                                                                <i id="eye-close" className="fa-solid fa-eye-slash"></i>
                                                            </div>
                                                            <div className={'error__message'}><ErrorMessage
                                                                name={'password'}/></div>
                                                        </div>
                                                    </div>

                                                    <div className="container__btn">
                                                        <div className="row">
                                                            <div className="col l-6">
                                                                <div className="container__btn">
                                                                    <button type={"submit"} className="btn">Đăng nhập
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="col l-6">
                                                                <div className="container__btn">
                                                                    <div className="btn" onClick={backHome}>Quay lại
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="container__btn-desc-login">
                                                            <span>HOẶC</span>
                                                        </div>
                                                    </div>

                                                    <div className="footer__form">
                                                        <span
                                                            className="footer__form-text">Bạn mới biết đến FCBlue?</span>
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
    function setStatusPassword() {
        if (status === "password") {
            setStatus("text");
            document.getElementById("eye-open").style.display = "block";
            document.getElementById("eye-close").style.display = "none";

        } else {
            setStatus("password");
            document.getElementById("eye-open").style.display = "none";
            document.getElementById("eye-close").style.display = "block";
        }
    }

    function sendData(values) {
        console.log(values)
        axios.post(`http://localhost:8080/accounts/login`, values).then((response) => {
            setUser(response.data.account.users)
            setAccount(response.data.account)
            console.log(response.data.account)
            setText(response.data.text)
            console.log(response.data.text)
            if (response.data.text === "Đăng Nhập Thành Công") {
                    switch (response.data.account.role.id){
                        case 1:
                            alert("ADMIN")
                            navigate("/")
                            break
                        case 2:
                            if (response.data.shop){
                                alert(response.data.shop.name)
                                navigate(`/shop/${response.data.account.id}`)
                            }else {
                                navigate(`/createShop/${response.data.account.id}`)
                            }
                            break
                        case 3:
                            alert("User")
                            navigate(`/`)
                    }
                alert(response.data.text)

            } else {
                alert(response.data.text)
            }

        })

    }

    function backHome() {
        navigate("/")
    }

}