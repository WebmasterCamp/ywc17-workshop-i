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
                <div className="cards">
                    <Card
                        category={"Fasion"}
                        title={"อัพเดทเทรน์แฟชั่นสุดปังปี 2020"}
                        subTitle={"สายแฟตัวจริงต้องไม่พลาด! อัพเดทเทรน์แฟชั่นสุดปังปี 2020 สไตล์ไหนอิน ชิ้นไหนเอาท์ "}
                        description={"descriptiontetetetetete"}
                        imgLink={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"}
                    />
                    <Card
                        category={"Fasion"}
                        title={"อัพเดทเทรน์แฟชั่นสุดปังปี 2020"}
                        subTitle={"สายแฟตัวจริงต้องไม่พลาด! อัพเดทเทรน์แฟชั่นสุดปังปี 2020 สไตล์ไหนอิน ชิ้นไหนเอาท์ "}
                        description={"descriptiontetetetetete"}
                        imgLink={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"}
                    />
                    <Card
                        category={"Fasion"}
                        title={"อัพเดทเทรน์แฟชั่นสุดปังปี 2020"}
                        subTitle={"สายแฟตัวจริงต้องไม่พลาด! อัพเดทเทรน์แฟชั่นสุดปังปี 2020 สไตล์ไหนอิน ชิ้นไหนเอาท์ "}
                        description={"descriptiontetetetetete"}
                        imgLink={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"}
                    />
                    <Card
                        category={"Fasion"}
                        title={"อัพเดทเทรน์แฟชั่นสุดปังปี 2020"}
                        subTitle={"สายแฟตัวจริงต้องไม่พลาด! อัพเดทเทรน์แฟชั่นสุดปังปี 2020 สไตล์ไหนอิน ชิ้นไหนเอาท์ "}
                        description={"descriptiontetetetetete"}
                        imgLink={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"}
                    />
                </div>

            </div>
        )
    }
}

export default Articles;