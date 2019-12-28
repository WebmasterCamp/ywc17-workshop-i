import React, { Component } from "react";
import './Notification.scss';
import Footer from '../components/Footer'

class Notification2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeSucess: 'success',
            disabled: 'disabled'
        }
    }

    render() {
        return (
            <div id="notification">
                <div className="container"> 
                    <h1>ยินดีด้วย การแลกเปลี่ยนสำเร็จ</h1>
                    <h3>คุณสามารถทำการจัดส่งสินค้าไปที่ ให้จัดส่งสินค้าไปที่</h3>
                    <h3> 62/5 ถ.ลาดพร้าว แขวงจอมพล เขตจุจักร กรุงเทพมหานคร 10900</h3>
                    <button className="btn  btn-secondary disabled" onClick={this.acceptProduct}>ส่งสินค้าแล้ว</button>
                    <a href="point"><button className="btn btn-success">ได้รับสินค้า</button></a>
                </div>
               
              <Footer/>
            </div>
        )
    }

}

export default Notification2