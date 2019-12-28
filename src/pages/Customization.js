import React from "react";
import './Customization.scss';

class Customization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        const selections = [
            "seal",
            "eggs",
            "humor",
            "prefer",
            "good",
        ]
        return (
            <div id="Customization">
                <h1 className="head">Customization</h1>
                <div className="h-divider" />
                <div id="Selector">
                    {selections.map(selection => {
                        return <div className="selection"><a href="#" >{selection}</a>{'\u00A0'}</div>
                    })}
                </div>
                <div id='next'>
                    <button>เริ่มกันเลย</button>
                </div>
            </div>
        )
    }
}

export default Customization;