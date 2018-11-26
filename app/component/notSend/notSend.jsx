import React from 'react';
import '../../public/css/save';
import { Button, WhiteSpace, DatePicker, List, Checkbox, Flex } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
class NotSend extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            time: new Date(),
        }

    }

    onChange(val){
        console.log(val)
    }

    render() {
        const data = [
            { value: 0, label: 'Ph.D.' },
            { value: 1, label: 'Bachelor' },
            { value: 2, label: 'College diploma' },
        ];
        return (<div className='index'>
            {/* <Header/> */}
            <div className="tips">取消发送选择 按时间</div>
            <WhiteSpace size='lg' />
            <div className="timeSet">
                <DatePicker
                    // minuteStep={4}
                    value={this.state.date}
                    onChange={date => this.setState({ date })}>
                    <List.Item arrow="horizontal">设定取消时间</List.Item>
                </DatePicker>
            </div>
            <List renderHeader={() => 'CheckboxItem demo'}>
                {data.map(i => (
                    <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                        {i.label}
                    </CheckboxItem>
                ))}
                {/* <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
                    Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
                </CheckboxItem> */}
            </List>
        </div>
        );
    }
}

export default NotSend;