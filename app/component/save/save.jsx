import React from 'react';
import '../../public/css/save';
import { WingBlank, Button, WhiteSpace, DatePicker, List } from 'antd-mobile';

class Save extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            time: new Date(),
        }
    }
    render() {
        return (<div className='index'>
                <div className="tips">您所需要保存的资料已确定，请设置保存时限</div>
                <WhiteSpace size='lg' />
                <div className="timeSet">
                    <DatePicker
                        // minuteStep={4}
                        value={this.state.date}
                        onChange={date => this.setState({ date })}>
                        <List.Item arrow="horizontal">设定保存时间</List.Item>
                    </DatePicker>
                </div>
                <WhiteSpace size='lg' />
                <div className="confirmTips">
                    您所需要保存的资料abc，保存时长XX小时XX分，需要支付XX元
                    </div>
                <WhiteSpace size='lg' />
                <div className="payBox">
                    <Button className="payButton" inline size="large" type="primary">微信支付</Button>
                </div>
                <WhiteSpace size='lg' />
                <div className="callTips">
                    <a href="">如有疑问拨打400XXXXXX</a>
                </div>
            {/* <div className="timeBox"> */}

            {/* </div> */}
        </div>

        );
    }
}

export default Save;