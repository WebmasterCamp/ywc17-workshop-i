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
                <div className="d-flex flex-row justify-content-around">
                    <button className="btn btn-success">Buy</button>
                    <button className="btn btn-success">Rent</button>
                    <button className="btn btn-success">Trade</button>
                </div>
            </div>
        )
    }
}

export default SellingMenu;