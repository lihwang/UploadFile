import React from 'react';
import '../../public/css/recive';
import { Button, Badge, Tabs,TextareaItem,List,WhiteSpace, DatePicker,WingBlank} from 'antd-mobile';
import ImagePickerExample from '../send/ImagePickerExample'

class Recive extends React.Component {
    constructor() {
        super();
        this.state={
            isSave:false,
            sendDate:''
        }
    }

    //下载数据
    downLoad=()=>{

    }

    render() {
        const tabs = [
            { title: <Badge>文字</Badge> },
            { title: <Badge>图片</Badge> },
        ];
        
        return (<div className='x-recive index' >
            <div className="cont" hidden={this.state.isSave}>
                <Tabs tabs={tabs}
                    initialPage={0}
                    animated={false}
                    // onChange={(tab, index) => { console.log('onChange', index, tab); this.changeTab(tab,index)}}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab);this.changeTab(tab,index)}}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    <List>
                        <TextareaItem
                            placeholder='请输入内容'
                            rows={15}
                            count={300}
                            onChange={(areaValue)=>{
                                this.setState({
                                    areaValue
                             })
                        }}/>
                    </List>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    <List>
                        <ImagePickerExample/>
                    </List>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        {/* <textarea name="" id="" cols="30" rows="10" className="tabWord"></textarea> */}
                    </div>
                </Tabs>
                    <div className="actionBtn">
                        <Button type="primary" inline size="small" style={{ marginRight: '40px' }}  onClick={()=>{this.downLoad}}>下载</Button>
                        <Button type="primary" size="small" inline style={{ marginRight: '40px' }} onClick={()=>{this.setState({isSave:true})}}>保存</Button>
                        <Button type="primary" size="small" inline style={{ marginRight: '40px' }} >删除</Button>
                    </div>
            </div>
            {/* <Footer/> */}
            <div className='savePage' hidden={!this.state.isSave}>
                <WingBlank>
                    <div className='tips'>
                        您所需要保存的资料已确定，请设置保存时限
                    </div>
                    <WhiteSpace size='lg'/>
                        <DatePicker
                            minuteStep={5}
                            value={this.state.sendDate}
                            onChange={sendDate => this.setState({sendDate})}>
                            <List.Item arrow="horizontal">保存至</List.Item>
                        </DatePicker>
                    <WhiteSpace size='lg'/>
                    <div className='payTips'>
                        您所需要保存的资料**M,保存时长**时**分<br/>需要支付**元
                    </div>
                    <WhiteSpace size='lg'/>
                    <Button type="primary" onClick={()=>{
                        
                    }}>微信支付</Button>
                </WingBlank>
            </div>
        </div >
        );
    }
}

export default Recive;