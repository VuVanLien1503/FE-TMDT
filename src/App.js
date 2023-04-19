import './font/css/all.css'
import {Link, Route, Routes} from "react-router-dom";
import FormRegister from "./js/FormRegister";
import FormLogin from "./js/FormLogin";
import PageShop from "./js/PageShop";
import CreateShop from "./js/CreateShop";
import PageHome from "./js/PageHome";
import Detail from "./js/Detail";
import Crud from "./js/Crud";

function App() {
    return (
        <>
            {/*<FormLogin/>*/}
            {/*<FormRegister/>*/}
            {/*<Link to={"/register"}>Đăng ký</Link>*/}
            {/*<PageShop/>*/}
            {/*<Loading/>*/}
            {/*<Detail/>*/}
            {/*<Crud/>*/}
            <Routes>
                <Route path="/register" element={<FormRegister/>}/>
                <Route path={"/login"} element={<FormLogin/>}/>
                <Route path={"/shop/:id"} element={<PageShop/>}/>
                <Route path={"/createShop/:id"} element={<CreateShop/>}/>
                <Route path={"/"} element={<PageHome/>}/>
                <Route path={"detail/:id"} element={<Detail/>}/>
                <Route path={"/option/:id"} element={<Crud/>}/>
            </Routes>
        </>
    );
}

export default App;
