import React from 'react';
import '../../public/css/introduce.less';
import { Button, WhiteSpace, WingBlank} from 'antd-mobile';

class Introduce extends React.Component {
    
    render() {
        return (<div className="x-introduce">
              <h2 className='title'>产品介绍</h2>
                <div className="cont">
                        <WingBlank>
                            <Button onClick={()=>{
                                
                            }} type="primary">本公众号用途</Button><WhiteSpace size='lg'/>
                            <Button type="ghost" className='am-button-borderfix'>公司框架 本软件框架</Button><WhiteSpace size='lg'/>
                            <Button>服务协议</Button><WhiteSpace size='lg'/>
                            <Button>操作指南</Button><WhiteSpace size='lg'/>
                            <Button>关于发票</Button><WhiteSpace size='lg'/>
                            <div>在线联系</div>
                        </WingBlank>
                </div>
            </div>
       );
    }
}

export default Introduce;