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
                <h1>รายการ</h1>
                <div className = "split">
                <div className = "split-left"></div>
                    <div className="video">
                        <iframe width="600" height="338" src="https://www.youtube.com/embed/t2E_uuEeyRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                <div className = "split-right">
                    <h1 className="title">OUT-FIT Mix & Match in 1 Minute</h1>
                    <p>มิกซ์แอนด์แมทช์ลุคใหม่ให้สดใสทุกวันด้วยเสื้อผ้าจาก OUT-FIT</p>
                    <button className = "btn">ดูวิดีโออื่น ๆ</button>
                </div>
                </div>

                </div>
        )
    }
}

export default Videos;