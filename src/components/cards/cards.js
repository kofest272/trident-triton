import WOW from 'wowjs'

import "./cards.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Cards = ({ data }) => {

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="backgroundCards opacity-50 position-absolute">
                {/* <img src={require('../../design/img/shapesBG.png')} alt="" className="w-100" /> */}
                <img src={require('../../design/img/backgroundCards.png')} alt="" className="w-100" />
            </div>
            <div className="mainCards d-flex justify-content-space-around align-items-center">
                <div className="TextBig">
                    <h2 className="titleText wow fadeInDown">BIG CHOOSE</h2>
                </div>
                <div className="cards">
                    <img src={require("../../design/cards/pentaCard.png")} alt="" className="pentaCard wow fadeInLeft" />
                    <img src={require("../../design/cards/tetraCard.png")} alt="" className="tetraCard wow fadeInDown" />
                    <img src={require("../../design/cards/hexCard.png")} alt="" className="hexCard wow fadeInRight" />
                </div>
                <div className="cardsInfo">
                    <div className="cardsInfoN">
                        <h1 className="cardsInfoBig">Сумма покупки:</h1>
                        <li className="strText">
                            <h4>{data[0].cost[0]}грн</h4>
                            <h4>{data[0].cost[1]}грн</h4>
                            <h4>{data[0].cost[2]}грн</h4>
                        </li>
                    </div>
                    <div className="cardsInfoN">
                        <h1 className="cardsInfoBig">Строк розстрочки:</h1>
                        <li className="strText">
                            <h4>до {data[1].period[0]} месяцев</h4>
                            <h4>до {data[1].period[1]} месяцев</h4>
                            <h4>до {data[1].period[2]} месяцев</h4>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;