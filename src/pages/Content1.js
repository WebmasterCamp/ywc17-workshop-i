import React from "react";
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import './Content.scss';
import InstagramEmbed from 'react-instagram-embed';

class Content1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="content">
                <HeaderLoggedIn />
                <img src="/content-logo-1.jpg"></img>
                <h1>กระแส Eco-Fashion ผ่านมาแล้ว โปรดอย่าผ่านไป</h1>
                <div className="contentBody">
                    <p>
                        นาทีนี้ต้องยอมให้เทรนด์รักษ์โลกที่กำลังมาจริง ๆ เพราะแม้กระทั่งแฟชั่นก็ยังขอเกาะเทรนด์นี้ไปกับเขาด้วย จนขนาด Zara แบรนด์เสื้อผ้ายักษ์ใหญ่ที่จัดว่าเป็นแบรนด์  Fast-fashion ยังออกมาประกาศว่าขอผันตัวมาเป็นมิตรกับสิ่งแวดล้อม โดยจะผลิตเสื้อผ้าจากเส้นใยธรรมชาติ รวมถึงเปลี่ยนไปใช้พลังงานทดแทนถึง 80 เปอร์เซ็นต์ ทั้งในสำนักงานใหญ่ การขนส่ง และร้านค้าต่าง ๆ เพื่อมุ่งสู่เป้าหมายการเป็นแบรนด์ Zero Waste
                    </p>

                    <InstagramEmbed
                        url='https://www.instagram.com/p/Bz-I-B_CCz5/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                    <p>
                        โดยก่อนหน้านี้ก็มีหลายแบรนด์ที่หันมาชูจุดยืนเรื่องสิ่งแวดล้อมกันมากขึ้น เช่น Uniqlo ที่ตั้งเป้าว่าจะลดการใช้พลาสติกให้ได้ 7,800 ตันภายในปี 2020 หรือ H&M ที่ปล่อยเสื้อผ้าคอลเล็กชั่นพิเศษซึ่งเน้นเรื่องเส้นใยที่ไม่ทำลายสิ่งแวดล้อม และสามารถนำกลับมาใช้ใหม่ได้  แม้กระทั่งแบรนด์ไฮเอนด์อย่าง Burberry เองก็ตั้งใจจะลดการปล่อยคาร์บอนในขั้นตอนการผลิตต่างๆ ภายในปี 2022 อีกด้วย
                    </p>
                    <InstagramEmbed
                        url='https://www.instagram.com/p/B5JGlPWCyQ2'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                    <p>
                    น่าดีใจที่ได้เห็นหลาย ๆ แบรนด์แฟชั่นหันมาแก้ไขปัญหาขยะ และมลพิษที่เกิดจากอุตสาหกรรมเสื้อผ้ากันมากขึ้น ก็ได้แต่หวังว่ากระแส eco-friendly ที่กำลังบูมในตอนนี้จะไม่เป็นเพียงคลื่นกระทบหาดทรายที่ผ่านมาแล้วจากไป แต่ภาวนาให้ผ่านมาเพื่อก่อตัวกลายเป็นจิตสำนึกที่หยั่งรากลึกในใจของทุกคน เพราะไม่ใช่แค่อุตสาหรรมขนาดใหญ่เท่านั้นที่ต้องลุกขึ้นมาแก้ไข ทว่าทุกคนสามารถแก้ไขปัญหาดังกล่าวโดยเริ่มจากตนเองได้ เช่น การนำเสื้อผ้าใช้แล้วมาแลกเปลี่ยนกับคนอื่นๆ ผ่านเว็บ OUT-FIT เพื่อยืดระยะการใช้งานเสื้อผ้า เพียงเท่านี้ก็สามารถเป็นส่วนหนึ่งในการลดปัญหา Fast-fashion ได้แล้ว รักษ์โลกได้ง่ายเพียงปลายนิ้วมือคลิก
                    </p>
                </div>
            </div>
        )
    }
}

export default Content1;