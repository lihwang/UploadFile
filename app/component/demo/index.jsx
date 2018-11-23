import React from 'react';
import ImagePickerExample from './ImagePickerExample'
import '../../public/css/demo';

import {
    Tabs,
    WingBlank,
    Badge,
    List,
    DatePicker,
    Flex,
    Button,
    InputItem,
    WhiteSpace,TextareaItem
} from 'antd-mobile';

// const data = [{     url:
// 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',     id:
// '2121',   }, {     url:
// 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',     id:
// '2122',   }];

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            showTextarea:false,
            sendDate: '',
            cancelDate: '',
            firstpw:'',
            secondpw:''
        }
    }
    render() {
        const tabs = [
            {
                title: <Badge>First Tab</Badge>
            }, {
                title: <Badge>Second Tab</Badge>
            }
        ];
        return (
            <div className="x-receive">
                <h2 className='title'>选择发送对象 微信好友</h2>
                <WhiteSpace/>
                <InputItem type="phone" clear placeholder="1** **** ****">手机号码</InputItem>
                <WhiteSpace size='lg'/>
                <Flex>
                    <Flex.Item>
                        <Button
                            type="primary"
                            style={{
                            marginLeft: 10
                        }}
                            inline>输入文字</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button
                            type="primary"
                            style={{
                            marginLeft: 10
                        }}
                            inline>导入照片</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button
                            disabled
                            type="primary"
                            style={{
                            marginLeft: 10
                        }}
                            inline>导入视频</Button>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size='lg'/>
                <DatePicker
                    minuteStep={5}
                    value={this.state.sendDate}
                    onChange={sendDate => this.setState({sendDate})}>
                    <List.Item arrow="horizontal">设定发送时间</List.Item>
                </DatePicker>
                <WhiteSpace size='lg'/>
                <DatePicker
                    minuteStep={5}
                    value={this.state.sendDate}
                    onChange={sendDate => this.setState({sendDate})}>
                    <List.Item arrow="horizontal">设定取消提醒</List.Item>
                </DatePicker>
                <WhiteSpace size='lg'/>
                <InputItem maxLength='6' value={this.state.firstpw}  onChange={firstpw => this.setState({firstpw})} type="password" placeholder="****">密码</InputItem>
                <WhiteSpace size='lg'/>
                <InputItem maxLength='6' value={this.state.secondpw} onChange={secondpw => this.setState({secondpw})} type="password" placeholder="****">再次输入密码</InputItem>
                <WhiteSpace size='lg'/>
                <div>密码输错一次视为立即发送</div>
                <WhiteSpace size='lg'/>
                <List renderHeader={() => 'Count'}>
                    <TextareaItem
                    initialValue='计数功能,我的意见是...'
                    rows={5}
                    count={100}
                />
                </List>
            </div>
        );
    }
}

export default Index;