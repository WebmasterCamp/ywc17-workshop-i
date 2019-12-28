import React from "react";
import firebase from '../firebase';

import './ProductCard.scss';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    star(number) {
        if (number === 1) {
            return <div>
                <img src="star.svg"></img>
            </div>
        }
        if (number === 2) {
            return <div>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
            </div>
        }
        if (number === 3) {
            return <div>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
            </div>
        }
        if (number === 4) {
            return <div>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
            </div>
        }
        if (number === 5) {
            return <div>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
                <img src="star.svg"></img>
            </div>
        }
    }
    
    render() {
        return (

            <div id="productCard">
                <div class="container page-wrapper">
                    <div class="page-inner">
                        <div class="row">
                            <div class="el-wrapper">
                                <div class="box-up">

                                    <img class="img" src={this.props.imgLink} alt="" />
                                    <div class="img-info">
                                        <div class="info-inner">

                                        </div>
                                        <div class="a-size">{this.props.name}</div>
                                    </div>
                                </div>

                                <div class="box-down">
                                    <div class="h-bg">
                                        <div class="h-bg-inner"></div>
                                    </div>

                                    <a class="cart" href={this.props.href}>
                                        <span class="price">
                                            {this.star(this.props.star)}
                                        </span>
                                        <span class="add-to-cart">
                                            <span class="txt">ดูรายละเอียดเพิ่มเติม</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;