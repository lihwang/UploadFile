const entryBuild =require('../entry/entry');
const path = require("path");
let entry = {};
entryBuild.map((data) => {
    entry[data.name] = [path.resolve('./entryBuild/' + data.name +'.js') , data.title];
});
module.exports = entry;
