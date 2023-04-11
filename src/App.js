import './font/css/all.css'
import {Link, Route, Routes} from "react-router-dom";
import FormRegister from "./js/FormRegister";
import FormLogin from "./js/FormLogin";

function App() {
    return (
        <>
            {/*<FormLogin/>*/}
            {/*<FormRegister/>*/}
            <Link to={"/register"}>Đăng ký</Link>
            <Routes>
                <Route path="/register" element={<FormRegister/>}/>
                <Route path={"/login"} element={<FormLogin/>}/>
            </Routes>
        </>
    );
}

export default App;
