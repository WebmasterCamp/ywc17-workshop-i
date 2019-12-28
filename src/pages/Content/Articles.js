import React from "react";
import './Articles.scss'
import Card from '../../components/Card'
class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div id="articles">
                <h1>Latest Articles</h1>
                <div className="cards ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        )
    }
}

export default Articles;