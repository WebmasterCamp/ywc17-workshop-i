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
                    <button className="option-btn">Buy</button>
                    <button className="option-btn">Rent</button>
                    <a href="/tradelist">
                        <button className="option-btn">Trade</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default SellingMenu;