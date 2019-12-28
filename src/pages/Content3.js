import React from "react";
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import './Content.scss';
import InstagramEmbed from 'react-instagram-embed';

class Content3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="content">
                <HeaderLoggedIn />
                <img src="/content-logo-3.jpg"></img>
                <h1>ต้อนรับปี 2020 ด้วยแฟชั่นสี Classic Blue ที่ Pantone เลือกให้เป็นสีแห่งปี</h1>
                <h2>เข้าใกล้ปี 2020 เข้าไปทุกที เราก็ขอต้อนรับเทรนใหม่ด้วยสีประจำปีอย่างสี Classic Blue 19-4052 ที่สื่อถึงความสงบ และเชื่อมั่น แต่ถึงจะมีความหมายที่สื่อถึงความเรียบง่าย แต่สี Classic Blue มีอีกความหมายหนึ่งคือ ไร้ซึ่งกาลเวลา (Timeless) สามารถนำมา Mix & Match ได้เทสุด ๆ ไม่มีเอ้าท์ แถมแต่งได้หลาหลายสไตล์ ใครที่รู้ตัวว่าป็นสายแฟชั่นนิสต้าต้องมีติดตู้ไว้สักตัวสองตัวแล้ว ไม่อย่างงั้นจะให้ว่าไมเตือนไม่ได้นะ!</h2>
                <div className="contentBody">
                    <p>
                        
                    </p>
                </div>
            </div>
        )
    }
}

export default Content3;