import WOW from 'wowjs'

import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {

    function componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="background opacity-25 position-absolute">
                <img src={require('../../../design/img/backgroundTitle.png')} alt="" className="w-100" />
            </div>
            <div className="header wow fadeInDown d-flex justify-content-space-around align-items-center">
                <div className="logoDiv">
                    <img src={require('../../../design/img/logoTitle.png')} alt="" className="logoTitle" />
                    <h4 className="logoText">TRI<strong>DENT</strong></h4>
                </div>
                <div className="modesDiv">
                    <h4 className="modesTextActive">Docs</h4>
                    <h4 className="modesText">Blog</h4>
                    <h4 className="modesText">Podcast</h4>
                    <h4 className="modesText">Twitter</h4>
                    <h4 className="modesText">FAQ</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;