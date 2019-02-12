const fs = require("fs");
const rimraf = require('rimraf');
const webpackFile = require("./webpack.file.conf");
const entryBuild = require('../entry/entry');
const webpackComConf = require('./webpack.com.conf');

/*删除开发目录*/
rimraf.sync(webpackFile.devDirectory);
/*创建开发目录*/
fs.mkdirSync(webpackFile.devDirectory);
/*生成HTML*/
let htmlCont = fs.readFileSync("index.html", "utf-8");
let headScript=`
    <script>
    (function () {
        var phoneScale = parseInt(window.screen.width) / 750;
        document.write('<meta name="viewport"  content="width=750, minimum-scale=' + phoneScale + ', maximum-scale=' +
        phoneScale + ', user-scalable=no ,target-densitydpi=device-dpi,viewprot-fit=cover">');
        })();
    </script>
    `;
let scriptInsert = `

    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript"></script>
    <script src="js/manifest.js" type="text/javascript"></script>
    <script src="js/vendor.js" type="text/javascript"></script>
    <script src="js/common.js" type="text/javascript"></script>
    <script src="js/key.js" type="text/javascript"></script>
`;
htmlCont = htmlCont.replace('</body>', scriptInsert + '</body>');
htmlCont = htmlCont.replace('</head>', headScript + '</head>');


entryBuild.map((data) => {
    fs.writeFile(webpackFile.devDirectory + '/' + data.name + '.html',
        htmlCont.replace('js/key.js', 'js/' + data.name + '.js').replace('<%= htmlWebpackPlugin.options.title %>', webpackComConf.titleFun(data.name, data.title)),
        'utf8',
        function(err) {
            if (err) {
                return console.log(err);
            }
        });
});