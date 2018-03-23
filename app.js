/**
 * Created by dell on 2018/2/28.
 */
const  express  = require('express');

const app = express()

const userRouter  = require ('./user');

app.use('/user',userRouter)



app.listen('9003',function(){
    console.log('listen in 9003')
})