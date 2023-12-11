import WOW from 'wowjs'
import axios from 'axios';
import { Component } from 'react';

import "./exchange.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usd: 0,
            eur: 0,
            xau: 0,
            xag: 0,
            rub: 0,
            cur: 0,
            get: 0
        };
    }
    componentDidMount = () => {
        this.findBase();
        new WOW.WOW({
            live: false
        }).init();
    }

    // chooseSetValue = (e) => {
    //     this.setState((state) => {
    //         return {
    //             sell: this.state.sell,
    //             cur: e.target.value
    //         }
    //     });
    // }
    fanny = (e) => {
        if (e.target.name === 'choose') {
            this.setState((state) => {
                return {
                    cur: e.target.value
                }
            });
        }
        if (e.target.value !== 0) {
            let result = e.target.value * this.state.cur
            this.setState((state) => {
                return {
                    sell: e.target.value,
                    get: result
                }
            });
        }
    }
    findBase = () => {
        axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    usd: response.data[24].rate,
                    eur: response.data[31].rate,
                    xau: response.data[57].rate,
                    xag: response.data[58].rate,
                    rub: response.data[17].rate,
                    sell: 0,
                    get: 0,
                    cur: response.data[24].rate,
                });
            })
            .catch((error) => {
                console.error('Ошибка при получении курса обмена:', error);
            });
    }
    render() {
        return (
            <div className="exchangeContainer w-100 d-flex justify-content-center">
                <div className="background opacity-25 position-absolute">
                    <img src={require('../../design/img/backgroundExchange.png')} alt="" className="w-100 wow fadeIn" />
                </div>
                <h2 className="titleText wow fadeInUp">EXCHANGE</h2>
                <div className="containers">
                    <div className="leftContainer wow fadeInLeft">
                        <div className="currencyTitle">
                            <h4 className="currencyName">USD</h4>
                            <h4 className="currencyValue">{this.state.usd}</h4>
                        </div>
                        <div className="currencyTitle">
                            <h4 className="currencyName">EUR</h4>
                            <h4 className="currencyValue">{this.state.eur}</h4>
                        </div>
                        <div className="currencyTitle">
                            <h4 className="currencyName">XAU</h4>
                            <h4 className="currencyValue">{this.state.xau}</h4>
                        </div>
                        <div className="currencyTitle">
                            <h4 className="currencyName">XAG</h4>
                            <h4 className="currencyValue">{this.state.xag}</h4>
                        </div>
                        <div className="currencyTitle">
                            <h4 className="currencyName">RUB</h4>
                            <h4 className="currencyValue">{this.state.rub}</h4>
                        </div>
                    </div>
                    <div className="rightContainer wow fadeInRight">
                        <div className="inputExchange">
                            <h3 className="creditText">Продать</h3>
                            <div className="inputExchangeContainer">
                                <form className='formA' onChange={this.fanny}>
                                    <input className="inputExchangeNum" name="num" type="number" min="0" max="10000" placeholder='Введите сумму от 0 до 10000' value={this.state.sell} />
                                    <select className="inputExchangeChoose" name="choose">
                                        <option value={this.state.usd} className='bgExc' selected>USD</option>
                                        <option value={this.state.eur} className='bgExc'>EUR</option>
                                        <option value={this.state.xau} className='bgExc'>XAU</option>
                                        <option value={this.state.xag} className='bgExc'>XAG</option>
                                        <option value={this.state.rub} className='bgExc'>RUB</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="inputExchange">
                            <h3 className="creditText">Получить</h3>
                            <div className="inputExchangeContainer">
                                <input className="inputExchangeNum" type="number" min="0" max="10000" placeholder='Введите сумму от 0 до 10000' value={this.state.get} />
                                <select className="inputExchangeChoose">
                                    <option value="usd" className='bgExc' selected>UAH</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Exchange;