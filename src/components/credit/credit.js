import React, { Component } from 'react';
import WOW from 'wowjs'

import "./credit.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Credit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credit: '100 000',
            creditNum: 100000,
            creditTerm: '4 года',
            creditTermNum: 48
        };
    }

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    onUpdateCredit = (e) => {
        let cred = e.target.value;
        this.setState((state) => {
            return { creditNum: e.target.value }
        });
        function convertNumberWithSpaces(number) {
            // Преобразовываем число в строку
            const numberString = number.toString();

            // Используем регулярное выражение для вставки пробела после каждых трех цифр
            const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return formattedNumber;
        }
        cred = convertNumberWithSpaces(cred);
        this.setState((state) => {
            return { credit: cred }
        });
        if (this.props.onUpdateCredit) {
            this.props.onUpdateCredit(cred);
        }
    }

    onUpdateTerm = (e) => {
        let term = e.target.value;
        this.setState((state) => {
            return { creditTermNum: e.target.value }
        });
        function formatMonths(months) {
            if (months < 0) {
                return "Отрицательное значение месяцев не поддерживается";
            }

            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;

            let result = "";

            if (years > 0) {
                result += years + " " + getYearsWord(years) + " ";
            }

            if (remainingMonths > 0) {
                result += remainingMonths + " " + getMonthsWord(remainingMonths);
            }

            if (years === 0 && remainingMonths === 0) {
                result = "0 месяцев";
            }

            return result.trim();
        }

        function getYearsWord(years) {
            if (years === 1) {
                return "год";
            } else if (years >= 2 && years <= 4) {
                return "года";
            } else {
                return "лет";
            }
        }

        function getMonthsWord(months) {
            if (months === 1) {
                return "месяц";
            } else if (months >= 2 && months <= 4) {
                return "месяца";
            } else {
                return "месяцев";
            }
        }
        term = formatMonths(term);
        this.setState((state) => {
            return {
                creditTerm: term
            }
        });
        if (this.props.onUpdateTerm) {
            this.props.onUpdateTerm(term);
        }
    }
    render() {
        return (
            <div className="mt d-flex justify-content-center align-items-center flex-column">
                <div className="backgroundCredit opacity-50 position-absolute">
                    <img src={require('../../design/img/backgroundCredit.png')} alt="" className="w-100" />
                </div>
                <h2 className="titleText wow fadeInUp">COUNT <br></br> YOUR DEPOSIT</h2>
                <div className="cardCredit wow fadeInUp d-flex">
                    <div className="inputs">
                        <div className="creditCard">
                            <h3 className="creditText">Мне нужно</h3>
                            <input className="inputCredit" type="text" min="0" max="10000000" value={this.state.credit} />
                            <input className="inputCreditRange" type="range" min="0" max="10000000" placeholder="100 000" onChange={this.onUpdateCredit} />
                        </div>
                        <div className="creditCard">
                            <h3 className="creditText">На срок</h3>
                            <input className="inputCredit" type="text" min="12" max="240" value={this.state.creditTerm} />
                            <input className="inputCreditRange" type="range" min="12" max="240" placeholder="100 000" onChange={this.onUpdateTerm} />
                        </div>
                    </div>
                    <div className="resultDiv">
                        <div className="resultStr">
                            <h3 className="creditResultText">Ставка:</h3>
                            <h3 className="creditResult">{Math.trunc((this.state.creditTermNum / 12) * 100) / 100}%</h3>
                        </div>
                        <div className="resultStr">
                            <h3 className="creditResultText">Вы получите:</h3>
                            <h3 className="creditResult">{(Math.trunc(parseFloat(this.state.creditNum))) + (Math.trunc(parseFloat(this.state.creditNum) * (parseFloat(this.state.creditTermNum) / 100 / 12)))}$</h3>
                        </div>
                        <div className="resultStr">
                            <h3 className="creditResultText">Бонусы:</h3>
                            <h3 className="creditResult">{(Math.trunc(parseFloat(this.state.creditNum) * (parseFloat(this.state.creditTermNum) / 100 / 12)))}$</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Credit;