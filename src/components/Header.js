import React from "react";
import './Header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            // Todo: fix responsive of header
            <div id="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <a className="navbar-brand" href="/loggedin" id="logo">
                        <img src="/logo.svg" width="150" height="30" className="d-inline-block align-top" alt="" />
                </a>
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-sm-flex  justify-content-sm-end" id="navbarSupportedContent">
                        <ul className="navbar-nav d-sm-flex flex-sm-row align-items-sm-end">
                            <li className="nav-item">
                                <a className="nav-link" href="/loggedin">บทความ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    บริการ
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">ซื้อ</a>
                                    <a className="dropdown-item" href="#">เช่า</a>
                                    <a className="dropdown-item" href="#">แลกเปลี่ยน</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/term">เข้าระบบ | สมัครใช้งาน</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;