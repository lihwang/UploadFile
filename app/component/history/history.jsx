
import React from 'react';
import '../../public/css/history.less';
import { Button,Modal,List} from 'antd-mobile';
const alert = Modal.alert;

class History extends React.Component {
    constructor() {
        super();
        this.state = {
            modal1:false
        }
    }
    onClose(key){
        this.setState({
        [key]: false,
        });
    }
    render() {
        return (<div className="x-history">
              <h2 className='title'>保存资料目录（按时间顺序）</h2>
              <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                <List.Item
                extra={<Button type="warning" size="small" inline onClick={()=>{
                    alert('提示', '是否确认删除该数据？', [
                        { text: '取消', onPress: () => console.log('cancel') },
                        { text: '确认', onPress: () => console.log('ok') },
                      ])
                }}>删除</Button>}
                multipleLine
                >
                <Button style={{verticalAlign: 'middle',marginRight:'10px'}} onClick={()=>{
                    window.location.href='recive.html'
                }} className='x-left' type="ghost" size="small" inline>查看</Button>
                Regional manager
                </List.Item>

                <List.Item
                extra={<Button type="warning" size="small" inline>删除</Button>}
                multipleLine
                >
                <Button style={{verticalAlign: 'middle',marginRight:'10px'}} className='x-left' type="ghost" size="small" inline>查看</Button>
                Regional manager
                </List.Item>
            </List>
            {/* <Modal
                visible={this.state.modal1}
                transparent
                maskClosable={false}
                onClose={()=>{this.onClose('modal1')}}
                title="提示"
                footer={[{ text: 'Ok', onPress: () => { this.onClose('modal1')} }]}
                >
                <div>
                您的资料已接收<br/>
                时间：**年**月**日**点**分<br/>
                将按照您设定的时间发送
                </div>
            </Modal> */}
            </div>
       );
    }
}

export default History;