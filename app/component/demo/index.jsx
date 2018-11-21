import React from 'react';
import ImagePickerExample from './ImagePickerExample'
import '../../public/css/demo';
import { WingBlank} from 'antd-mobile';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  }, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  }];

class Index extends React.Component {
    render() {
        const tabs = [
            { title: <Badge>First Tab</Badge> },
            { title: <Badge>Second Tab</Badge> },
          ];
        return (<div className="x-receive">
                <WingBlank>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <ImagePickerExample/>
                    </div>
                </Tabs>
                    

                </WingBlank>
            </div>
       );
   }
}

export default Index;