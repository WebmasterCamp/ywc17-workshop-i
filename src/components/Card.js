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
                                <div className="date">
                                    <div className="day">{this.props.day}</div>
                                    <div className="month">{this.props.month}</div>
                                </div><img src={this.props.imgLink} />
                            </div>
                            {/* Post Content*/}
                            <div className="post-content">
                                <div className="category">{this.props.category}</div>
                                <h1 className="title">{this.props.title}</h1>
                                <h2 className="sub_title">{this.props.subTitle}</h2>
                                <p className="description">{this.props.description}</p>
                                <div className="post-meta">
                                    <span className="timestamp">
                                        <i className="fa fa-clock-">o</i>
                                        6 mins ago
                                        </span>
                                    <span className="comments">
                                        <i className="fa fa-comments" /><a href="#">
                                            39 comments
                                            </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Card;