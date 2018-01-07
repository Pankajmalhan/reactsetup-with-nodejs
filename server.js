var express=require('express');
var path=require('path');
var app=express();
var webpack= require('webpack');
var config= require('./webpack.config');
const compiler = webpack(config);

var port=5000;
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/api',function(req,res){
    res.send('<p>This is a api Data</p>');
});
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.listen(port,function(error){
    if(error) {
        console.log(error);
    } else {
        console.log("Application running on port: "+port);
    }
})


