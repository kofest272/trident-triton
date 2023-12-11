import WOW from 'wowjs'

import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {

    function componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="main d-flex justify-content-space-around align-items-center">
                <div className="TextBig">
                    <h2 className="titleText wow fadeInUp">CREDIT CARD WITH FREE SERVICE</h2>
                    <h1 className="miniText wow fadeInUp">Create TRIDENT TETRA before 1 january and get free service</h1>
                </div>
                <div className="btnsTitle">
                    <button className="cyanButton wow fadeInLeft">
                        Create CARD
                    </button>
                    <button className="transparentButton wow fadeInRight">
                        FAQ
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Main;