import React from "react";
import './Videos.scss'

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div id="videos">
                <h1>videos</h1>
                <div className="video">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/8OuDiz3fzuA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="detailBox">
                <div className="detail">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et magna non enim egestas pretium at eu erat. Duis quis mollis mauris. Duis ac aliquet lectus. Donec rhoncus ante volutpat diam luctus tristique. Phasellus tincidunt erat est, ac ultrices tortor maximus a. Morbi pulvinar magna porttitor nunc suscipit mollis. Aenean tortor libero, sagittis elementum posuere at, tincidunt ut turpis. Proin semper cursus diam, eget mollis orci mollis sit amet.
                    </p>
                </div>
                <div className="seeAll">
                    <button>ดูของWeekก่อนๆ</button>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Videos;