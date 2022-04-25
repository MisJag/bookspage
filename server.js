let express =require('express')
let cors =require('cors')
const app =express()
app.use(express.json());
app.use(express.urlencoded);
app.use(cors());
app.use('*',cors());

const port =process.env.port||4000
const server =app.listen(port,()=>{
    console.log('connected to port'+port)
})