import React from 'react';
import { ImagePicker } from 'antd-mobile';

const data = [];

export default class ImagePickerExample extends React.Component {
    constructor(){
        super();
        this.state={
            files: data
        }
        this.onChange=this.onChange.bind(this);
    }
    
  onChange(files, type, index){
    console.log(files, type, index);
    this.setState({
      files
    });
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 1}
          accept="image/gif,image/jpeg,image/jpg,image/png"
        />
      </div>
    );
  }
}
