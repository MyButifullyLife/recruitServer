// 链接数据库  使用 imooc 这个数据集合
const  mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success !!!');
})
// // 创建数据结构
// const User = mongoose.model('user',new mongoose.Schema({
//     name:{type:String,require:true},
//     age:{type:Number,require:true}
// }))