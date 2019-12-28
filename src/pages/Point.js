import React from 'react';
import Footer from '../components/Footer'
import BeautyStars from 'beauty-stars';
class Point extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value:0
        }
    }

    render() {
        return (
            <div>
                <h2>คุณได้รับ 2 Points</h2>
                <h3>ให้ดาวกับผู้แลกเปลี่ยน:</h3>
                <BeautyStars
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
                <h3>แสดงความคิดเห็นเกี่ยวกับการแลกปลี่ยนครั้งนี้</h3>
                <div class="form-group">
                    <label for="comment">Comment:</label>
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <div className="row">
                        <button className="btn btn-success">ย้อนกลับ</button>
                        <button className="btn btn-success">กลับ่สู่หน้าหลัก</button>
                    </div>
                    <Footer />   
            </div>

                    

        )
    }
}

export default Point