import React, { Component } from "react";
import './TradeDetail.scss'
import ProductCard from '../components/ProductCard'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
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
                        <img className ="item" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" />
                    </div>

                    <div className='description'>
                        <p className="productTitle"> เสื้อยืดสกรีนลายภาษาอังกฤษ </p>
                        <p className="productRank"> Rank: A </p>
                        <p className="productWarranty"> Warranty: 5 Years</p>
                        <a href="/selecttotrade"><button>สนใจ Trade</button></a>
                    <button>Chat</button>
                    </div>
                </div>
                <div className='owner'>
                    <img src="" />
                    <p>Supakorn</p>
                    <p>Score *****</p>
                </div>
                <div className='Comment'>
                    <p>Comment Review</p>
                </div>
            </div>
        )
    }

}

export default TradeDetail

