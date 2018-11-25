import React from 'react';
import '../../public/css/index';
import { Button, WhiteSpace, WingBlank} from 'antd-mobile';
class Index extends React.Component {
    render() {
        return (<div className='index'>
            {/* <Header/> */}
            <h2 className='title'>微贷网微贷网微贷网微贷网</h2>
            <div className="cont">
                    <WingBlank>
                        <Button onClick={()=>{
                            window.location.href='./demo.html';
                        }} type="primary">我要发送</Button><WhiteSpace size='lg'/>
                        <Button type="ghost" className='am-button-borderfix'>我要接收</Button><WhiteSpace size='lg'/>
                        <Button>我要了解</Button><WhiteSpace size='lg'/>
                        <Button onClick={()=>{
                            window.location.href='./history.html';
                        }}>我要查询历史保存资料</Button><WhiteSpace size='lg'/>
                        <Button type="warning">删除数据</Button><WhiteSpace size='lg'/>
                        <div className='qrcode'></div>
                    </WingBlank>
            </div>
        </div>
       );
    }
}

export default Index;