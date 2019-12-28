import React, { Component } from "react";
import './TradeList.scss'
import HeaderWithSearch from '../components/HeaderWithSearch'
import ProductCard from '../components/ProductCard'
class TradeList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="trade">
                <HeaderWithSearch />
                <h1 className="head">แลกเปลี่ยน</h1>
                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
                <form class="search">
                    <input type="text" placeholder="Search.." name="search" className="searchBox" />
                    {/* <button type="submit"><i class="fa fa-search">Search</i></button> */}
                </form>
                <div className="cards">
                    <ProductCard
                        imgLink="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                        name="Great shirt 1"
                        star={5}
                    />
                    <ProductCard
                        imgLink="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                        name="Great shirt 2"
                        star={4}
                    />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="page">
                    <button>ย้อนกลับ</button>
                    <button>ถัดไป</button>
                </div>

            </div>
        )
    }

}

export default TradeList

