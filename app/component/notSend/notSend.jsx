import React from 'react';
import '../../public/css/save';
import { Button, } from 'antd-mobile';
// import { List, InputItem, WhiteSpace } from 'antd-mobile';
// import { createForm } from 'rc-form';
import { List, Checkbox, Flex } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;


class notSend extends React.Component {
    onChange = (val) => {
        console.log(val);
      }
     
    render() {
        // const { getFieldProps } = this.props.form;
        return (<div className='index'>
            {/* <Header/> */}
            <div className="cont">
                <div className="tips">取消发送选择 按时间</div>
                {/* <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="****"
                >密码</InputItem> */}
            </div>
        </div>

        );
    }
}

export default notSend;