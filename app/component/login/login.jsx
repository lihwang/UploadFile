import React from 'react';
import '../../public/css/login';
import { Button, WhiteSpace,InputItem,List} from 'antd-mobile';
class Login extends React.Component {
    render() {
        return (<div className='x-login'>
            <h2 className='title'>欢迎来到时光胶囊</h2>
            <WhiteSpace size='lg'/>
            <div style={{textAlign:'center'}}>
                <Button type='ghost' inline>首次登录请授权微信号关联手机认证</Button>
            </div>
            <WhiteSpace size='lg'/>
            <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
            <List.Item>
                <InputItem type="phone" clear placeholder="1** **** ****">手机号：</InputItem>
            </List.Item>
            <WhiteSpace size='lg'/>
            <List.Item
            extra={<Button type="ghost" size="small" inline>发送验证码</Button>}
            multipleLine>
               <InputItem maxLength='4'>验证码：</InputItem>
            </List.Item>
            </List>
            <WhiteSpace size='lg'/>
            <Button type="primary">确认</Button>
        </div>

        );
    }
}

export default Login;