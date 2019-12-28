import React from "react";


class HeaderWithSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }
    render() {
        return (
            // Todo: add search
            <div id="headerwithSearch">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <a className="navbar-brand" href="#" id="logo">
                        {/* Logo Image */}
                        <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        Out-Fit
                </a>
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex flex-row align-items-end">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Content</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Deal
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Buy</a>
                                    <a className="dropdown-item" href="#">Rent</a>
                                    {/* <div className="dropdown-item"></div> */}
                                    <a className="dropdown-item" href="#">Trade</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderWithSearch;