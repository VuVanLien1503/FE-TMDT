import '../css/404.css'
import {Link} from "react-router-dom";
export default function Error() {
    return (
        <>
            <div className="container-error">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12 ">
                            <div className="">
                                <div className="four_zero_four_bg">
                                    <div className="error__title">
                                        <h1 className="text-center ">404</h1>
                                    </div>

                                    <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"/>

                                    <div className="contant_box_404">
                                        <div className="h2">
                                            Look like you're lost
                                        </div>

                                        <div>the page you are looking for not avaible!</div>

                                        <Link to={"#"} className="link_404">Go to Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}