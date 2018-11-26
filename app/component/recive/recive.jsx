import React from 'react';
import '../../public/css/recive';
import { Button, WingBlank, Badge, Tabs } from 'antd-mobile';
class Recive extends React.Component {
    render() {
        const tabs = [
            { title: <Badge>文字</Badge> },
            { title: <Badge>图片</Badge> },
            { title: <Badge>视频</Badge> },
        ];
        return (<div className='index' >
            {/* <Header/> */}
            <div className="cont">
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>

                        <textarea name="" id="" cols="30" rows="10" className="tabWord"></textarea>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <textarea name="" id="" cols="30" rows="10" className="tabWord"></textarea>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <textarea name="" id="" cols="30" rows="10" className="tabWord"></textarea>
                    </div>
                </Tabs>
                <WingBlank>
                    <div className="actionBtn">
                        <Button type="primary" inline size="small" style={{ marginRight: '4px',width:"100px" }} >下载</Button>
                        <Button type="primary" size="small" inline style={{ marginRight: '4px',width:"100px" }} >保存</Button>
                        <Button type="primary" size="small" inline style={{ marginRight: '4px' ,width:"100px"}} >删除</Button>
                    </div>
                </WingBlank>
            </div>
            {/* <Footer/> */}
        </div >
        );
    }
}

export default Recive;