import React, { Component } from "react";
import './TradeList.scss'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'


class TradeList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="trade">
                <HeaderLoggedIn />
                <h1 className="head">แลกเปลี่ยน</h1>
                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
                <div class="md-form mt-0">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
                <div className="cards">
                    <ProductCard
                        imgLink="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                        name="Great shirt 1"
                        star={5}
                        href="/tradedetail"
                    />
                    <ProductCard
                        imgLink="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                        name="Great shirt 2"
                        star={4}
                        href="/tradedetail"
                    />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="page">
                    <button>ย้อนกลับ</button>
                    <button>ถัดไป</button>
                </div>
                <Footer />
            </div>
        )
    }

}

export default TradeList

