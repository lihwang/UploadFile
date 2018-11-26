const fs = require("fs");

const path = require("path");

const entry = require('./entry');

const nodeCommon = require('../common/nodeCommon');

const entryBuildPath = path.resolve(__dirname, '../../entryBuild');

nodeCommon.deleteFile(entryBuildPath);

fs.mkdirSync(entryBuildPath);

const entryContent = (data) => {
    let cont =`${titleCase(data.path.split('/')[0]) }`;
    console.log(data.path)
return `import React from 'react';
import ReactDOM from 'react-dom';
import ${cont} from '../app/component/${data.path}';
ReactDOM.render(<${cont}/>,document.getElementById('app'));`
};

/*生成webpack entry 入口文件*/

entry.map((data) => {
    fs.writeFile(entryBuildPath + '/' + data.name + '.js', entryContent(data), 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
        });
});


function titleCase(str){
    var array = str.toLowerCase().split(" ");
    for (var i = 0; i < array.length; i++){
      array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
    }
    var string = array.join(" ");
    return string;
  }