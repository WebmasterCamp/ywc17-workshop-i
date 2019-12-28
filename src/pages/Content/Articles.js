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
            <div className = "articles" id="articles">
                <h1>บทความล่าสุด</h1>
                <div className="cards">
                        <Card
                            category={"Fasion"}
                            title={"กระแส Eco-Fashion ผ่านมาแล้ว โปรดอย่าผ่านไป"}
                            subTitle={""}
                            description={""}
                            imgLink={"/content-logo-1.jpg"}
                            href={'/content1'}
                        />
                        <Card
                            category={"Fasion"}
                            title={"สายแฟตัวจริงต้องไม่พลาด! อัพเดทเทรน์แฟชั่นสุดปังปี 2020 สไตล์ไหนอิน ชิ้นไหนเอาท์"}
                            description={""}
                            imgLink={"/content-logo-2.jpg"}
                            href={'/content2'}
                        />
                        <Card
                            category={"Fasion"}
                            title={"สายแฟตัวจริงต้องไม่พลาด! อัพเดทเทรน์แฟชั่นสุดปังปี 2020 สไตล์ไหนอิน ชิ้นไหนเอาท์"}
                            description={""}
                            imgLink={"/content-logo-3.jpg"}
                            href={'/content3'}
                        />
                        <Card
                            category={"Fasion"}
                            title={"สายแฟตัวจริงต้องไม่พลาด! อัพเดทเทรน์แฟชั่นสุดปังปี 2020 สไตล์ไหนอิน ชิ้นไหนเอาท์"}
                            description={""}
                            imgLink={"/content-logo-4.jpg"}
                            href={'/content4'}
                        />
                </div>
            </div>
        )
    }
}

export default Articles;


