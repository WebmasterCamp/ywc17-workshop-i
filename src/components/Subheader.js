import React from "react";
import './Subheader.scss'

class Subheader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="subheader">
                <img src="./logo.svg" width="300"/>
                <p className = "catch-phrase">อินเทรนด์แบบไม่ต้องทำร้ายโลก ง่าย ๆ เพียงปลายนิ้วคลิก</p>
            </div>
        )
    }
}

export default Subheader;