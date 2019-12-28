import React, { Component } from "react";
import './TradeDetail.scss'
<<<<<<< HEAD
import ProductCard from '../components/ProductCard'
=======
import './TradeList.scss'
>>>>>>> 286145c5c0c1554857efbded243f7a455aab4d11
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
<<<<<<< HEAD
                <div className="product">
                    <div className = "item-img">
                        <img className ="item" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" />
                    </div>

                    <div className='description'>
                        <p className="productTitle"> เสื้อยืดสกรีนลายภาษาอังกฤษ </p>
                        <p className="productRank"> คุณภาพ: A </p>
                        <p className="productRank"> รับประกันสูงสุด: 800 บาท</p>
                        <div className = "button-choose">
                            <a href="/selecttotrade"><button>สนใจแลกเปลี่ยน</button></a>
                            <button>พูดคุยกับผู้แลกเปลี่ยน</button>
=======
                <div className="row container">
                    <div className="col-6">
                            <img src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" />
                            <div className='description'>
                                        <p className="productTitle">
                                            Title: test
                                </p>
                                        <p className="productRank">
                                            Rank: A
                                </p>
                                        <p className="productWarranty">
                                            Warranty: 5 Years
                                </p>
>>>>>>> 286145c5c0c1554857efbded243f7a455aab4d11
                        </div>

                        <div className='owner'>
                            <p className = "owner-detail">เจ้าของเสื้อผ้า</p>
                            <img src="" />
                            <p className = "productRank">Supakorn</p>
                            <p className = "productRank">Score *****</p>
                        </div>
                    </div>
                </div>
                {/* <div className='Comment'>
                    <p>Comment Review</p>
                </div> */}

                <Footer />
            </div>
        )
    }

}

export default TradeDetail

