import React from 'react';
import '../../public/css/save';
import { Button, WingBlank } from 'antd-mobile';
class Save extends React.Component {

    render() {

        return (<div className='index'>
            {/* <Header/> */}
            <div className="cont">
                <WingBlank>
                    <div className="tips">您所需要保存的资料已确定，请设置保存时限</div>
                    <div></div>
                    <div className="confirmTips">
                        您所需要保存的资料abc，保存时长XX小时XX分，需要支付XX元
                    </div>
                    <div className="payBox">
                        <Button className="payButton" inline size="large" type="primary">微信支付</Button>
                    </div>
                    <div className="callTips">
                       <a href="">如有疑问拨打400XXXXXX</a> 
                    </div>
                </WingBlank>
            </div>
        </div>

        );
    }
}

export default Save;