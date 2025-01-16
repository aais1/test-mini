const express = require('express')
const cors=require('cors')
const productsRoute = require('./routes/productsRoute')


const app = express();
app.use(cors());

app.use('/api',productsRoute)

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})