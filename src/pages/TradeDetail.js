import React, { Component } from "react";
import './TradeDetail.scss'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import Footer from '../components/Footer'

class TradeDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="tradeDetail">
                <HeaderLoggedIn />
                <div className="product">
                    <div className = "item-img">
                        <img className ="item" src="/rent/rent2.jpg" />
                    </div>

                    <div className='description'>
                        <p className="productTitle"> เสื้อยืดสกรีนลายภาษาอังกฤษ </p>
                        <p className="productRank"> คุณภาพ: A </p>
                        <p className="productRank"> รับประกันสูงสุด: 800 บาท</p>
                        <div className = "button-choose">
                            <a href="/selecttotrade"><button>สนใจแลกเปลี่ยน</button></a>
                            <button>พูดคุยกับผู้แลกเปลี่ยน</button>
                        </div>

                        <div className='owner'>
                            <p className = "owner-detail">เจ้าของเสื้อผ้า</p>
                            <img src="" />
                            <p className = "productRank">Supakorn</p>
                            <p className = "productRank">
                            <span>
                                <img src="/star.svg"></img>
                                <img src="/star.svg"></img>
                                <img src="/star.svg"></img>
                                <img src="/star.svg"></img>
                                <img src="/star.svg"></img>
                            </span></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}

export default TradeDetail

