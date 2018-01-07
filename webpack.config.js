var webpack=require('webpack');
var path=require("path");  
var srcPath=path.resolve(__dirname,"client");  
var distPath=path.resolve(__dirname,"public"); 
var config={
    devtool:'source-map',
    entry:[
        srcPath+"/app.js"
    ],
    output:{  
        path:distPath,  
        publicPath: '/',
        filename:"bundle.js"  
    },  
    resolve: { 
        extensions: [ '.js', '.jsx','.ts','.tsx']    
    },
   module:{
       loaders:[
        {  
            test:/\.js?$/,  
            exclude: /node_modules/,  
            include: /client/,  
            loader:"babel-loader",  
            query: {  
           presets: ['es2015']  
            }           
        },
        {  
            test:/\.jsx?$/,  
            exclude: /node_modules/,  
            include: /client/,  
            loader:"babel-loader",  
            query: {  
           presets: ['es2015','stage-2','react']  
            }   
        },
        {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
        }
       ]
   },
   devServer:{
       hot:true,
       port:4800
   }
}

module.exports=config;