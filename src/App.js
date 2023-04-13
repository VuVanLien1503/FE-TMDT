import './font/css/all.css'
import {Link, Route, Routes} from "react-router-dom";
import FormRegister from "./js/FormRegister";
import FormLogin from "./js/FormLogin";
import PageShop from "./js/PageShop";
import CreateShop from "./js/CreateShop";

function App() {
    return (
        <>
            {/*<FormLogin/>*/}
            {/*<FormRegister/>*/}
            {/*<Link to={"/register"}>Đăng ký</Link>*/}
            {/*<PageShop/>*/}
            <Routes>
                <Route path="/register" element={<FormRegister/>}/>
                <Route path={"/login"} element={<FormLogin/>}/>
                <Route path={"/"} element={<PageShop/>}/>
                <Route path={"/createShop/:id"} element={<CreateShop/>}/>
            </Routes>
        </>
    );
}

export default App;
