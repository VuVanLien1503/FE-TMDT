import {ErrorMessage, Field, Form, Formik} from "formik";
import HeaderForm from "./HeaderForm";
import ContentForm from "./ContentForm";
import FooterForm from "./FooterForm";
import * as Yup from 'yup'
import '../css/Login.css'
import {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function CreateShop() {


    const navigate = useNavigate()
    const param = useParams()

    const [status, setStatus] = useState("password")
    const Validation = Yup.object().shape({
        name: Yup.string().required("Bạn cần nhập thông tin!"),
        description: Yup.string().required("Bạn cần nhập thông tin!")
            .min(6, "Tối thiểu từ 6 ký tự!")
            .max(255, "Tối đa  255 ký tự!"),
    })


    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    description: ""
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
                                                    Tạo Mới Cửa Hàng
                                                </h1>
                                                <div className="form">
                                                    <div className="form__field">
                                                        <div className="form__field-container">
                                                            <Field name={'name'} type="name"
                                                                   placeholder="Tên Cửa Hàng (*)"/>
                                                            <div className={'error__message'}><ErrorMessage
                                                                name={'name'}/></div>
                                                        </div>
                                                    </div>
                                                    <div className="form__field">
                                                        <div className="form__field-container">
                                                            <Field name={'description'} type="name"
                                                                   placeholder="Mô Tả Cửa Hàng (*)"/>
                                                            <div className={'error__message'}><ErrorMessage
                                                                name={'description'}/></div>
                                                        </div>
                                                    </div>

                                                    <div className="container__btn" style={{marginLeft:100,marginBottom:30}}>
                                                        <div className="row">
                                                            <div className="col l-8">
                                                                <div className="container__btn">
                                                                    <button type={"submit"} className="btn">Xác Nhận
                                                                    </button>
                                                                </div>
                                                            </div>

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
                    </div>
                </Form>
            </Formik>
        </>
    )

    function sendData(values) {
        alert(param.id)
    }


}