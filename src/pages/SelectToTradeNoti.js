import React, { Component } from "react";
import './TradeList.scss'
import HeaderLoggedInNoti from '../components/HeaderLoggedInNoti'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

class SelectToTrade extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="trade">
                <HeaderLoggedInNoti />
                <h1 className="head">เลือกชุดที่จะแลกเปลี่ยน</h1>
                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
                <div class="md-form mt-0">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
                <div className="cards">
                <ProductCard
                        imgLink="/shirt/outfit-buy-1.png"
                        name="Great shirt 1"
                        star={5}
                        href="/selecttotradenoti"
                    />
                    <ProductCard
                        imgLink="/shirt/outfit-buy-2.png"
                        name="Great shirt 2"
                        star={4}
                        href="/selecttotradenoti"
                    />
                    <ProductCard
                        imgLink="/shirt/outfit-buy-3.png"
                        name="Great shirt 2"
                        star={3}
                        href="/selecttotradenoti"
                    />
                
                </div>
                <div className="page">
                    <button className = "btn">ย้อนกลับ</button>
                    <button className = "btn">ถัดไป</button>
                </div>
                <Footer />
            </div>
        )
    }

}

export default SelectToTrade

