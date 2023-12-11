import WOW from 'wowjs'

import "./applyCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ApplyCard = ({ }) => {

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="backgroundCards opacity-50 position-absolute">
                {/* <img src={require('../../design/img/shapesBG.png')} alt="" className="w-100" /> */}
                <img src={require('../../design/img/backgroundApplyCard.png')} alt="" className="w-100" />
            </div>
            <div className="mainCards d-flex justify-content-space-around align-items-center">
                <div className="TextBig">
                    <h2 className="titleText wow fadeInDown">CREATE CARD</h2>
                </div>
                <main>
                    <div className="leftZone">
                        <img src={require("../../design/cards/tetraCard.png")} alt="" className="card wow fadeInDown" />
                    </div>
                    <div className="rightZone">
                        <form className='formApply'>
                            <label>
                                <h3 className="creditText">Name</h3>
                                <input className="inputApply" name="name" type="text" placeholder='Text your name' />
                            </label>
                            <label>
                                <h3 className="creditText">Number</h3>
                                <input className="inputApply" name="number" type="number" placeholder='Text your phone number' />
                            </label>

                        </form>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default ApplyCard;