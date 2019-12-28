import React from "react";
import './Content.scss';

import Ads from './Ads';
import Articles from './Articles';
import Video from './Video';

class Content extends React.Component {
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
            <div id="content">
                <Ads/>
                <Articles/>
                <Video/>
            </div>
        )
    }
}

export default Content;