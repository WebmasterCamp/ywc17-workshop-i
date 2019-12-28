import React from "react";

class SellingMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="Header">
                <p className = "what-looking">คุณกำลังมองหาอะไร</p>
                <div className="choice-btn">
                    <button className="option-btn">ซื้อ</button>
                    <button className="option-btn">เช่า</button>
                    <a href="/tradelist">
                        <button className="option-btn">แลกเปลี่ยน</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default SellingMenu;