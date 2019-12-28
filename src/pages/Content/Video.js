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
                <h1>Programs</h1>
                <div className="row">
                    <div className="col-6">
                        <div className="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/t2E_uuEeyRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>
                    </div>
                    <div className="col-6">
                            <h1 className="title">Header</h1>
                            <p>Lorem ahhahahahahhah</p>
                            <button>More +</button>
                        </div>  
                    </div>
                </div>
        )
    }
}

export default Videos;