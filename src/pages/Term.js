import React, { Component } from "react";

class Term extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Term">
                <h1 className="d-flex flex-row justify-content-center">Term and Condition</h1>
                <div  className="d-flex flex-row justify-content-center">
                    <h1>Hello</h1>
                </div>
                <div className="checkbox d-flex flex-row justify-content-center">
                     <label>
                         <input type="radio" value="checked" checked={false}/>
                         ฉันตกลงและยอมรับเงื่อนไขการใช้งาน
                     </label>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <button className="btn btn-success">ไปต่อ</button>
                </div>     
            </div>
        )
    }

}

export default Term

