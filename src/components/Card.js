import React from "react";
import firebase from '../firebase';
import './Card.scss'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="card">
                <div className="container">
                    {/* Normal Demo*/}
                    <div className="column">
                        {/* Post*/}
                        <div className="post-module">
                            {/* Thumbnail*/}
                            <div className="thumbnail">
                                <img src={this.props.imgLink} />
                            </div>
                            {/* Post Content*/}
                            <div className="post-content">
                                <div className="category">{this.props.category}</div>
                                <h1 className="title">{this.props.title}</h1>
                                <h2 className="sub_title">{this.props.subTitle}</h2>
                                <p className="description">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Card;