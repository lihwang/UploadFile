import React from 'react';
import '../../public/css/login';
import { Button, WhiteSpace,InputItem,List,Toast} from 'antd-mobile';

class Login extends React.Component {
    constructor(){
        super();
        this.state={
            msg:'发送验证码',
            noClick:false,
            tel:''
        }
    }

    calSecond=()=>{
    if(!this.state.tel){
        Toast.fail('手机号码不能为空！');
        return false;
    }
     let second=60;
     let timer=setInterval(()=>{
            second--;
            if(second){
                this.setState({
                    msg: second+' S',
                    noClick:true
                })
            }else{
                this.setState({
                    msg: '发送验证码',
                    noClick:false
                }) 
                clearInterval(timer);
            }
        },1000)
    }
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
                <InputItem type="phone" onChange={tel => this.setState({tel})} clear placeholder="1** **** ****">手机号：</InputItem>
            </List.Item>
            <WhiteSpace size='lg'/>
            <List.Item
            extra={<Button type="ghost" disabled={this.state.noClick} size="small" onClick={this.calSecond} inline>{this.state.msg}</Button>}
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