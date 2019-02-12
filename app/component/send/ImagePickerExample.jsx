import React from 'react';
import { ImagePicker,Modal } from 'antd-mobile';
const data = [];
export default class ImagePickerExample extends React.Component {
    constructor(){
        super();
        this.state={
            files: data,
            modal1:false,
            currentPic:''
        }
        this.onChange=this.onChange.bind(this);
    }
    
  onChange(files, type, index){
    console.log(files, type, index);
    this.setState({
      files
    });
  }

  onClose(key){
    this.setState({
      [key]: false,
    });
  }




  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) =>{
            console.log(fs)
            this.setState({
              currentPic:fs[0].url,modal1:true
            })
          }
          }
          selectable={files.length < 10}
          accept="image/gif,image/jpeg,image/jpg,image/png"
        />
         <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={true}
          onClose={()=>{this.onClose('modal1')}}
        >
          <img src={this.state.currentPic} alt=""/>
        </Modal>
      </div>
    );
  }
}


