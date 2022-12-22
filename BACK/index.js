const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const authRouter = require('./Routes/authRouter')
const linkRouter = require('./Routes/link.routes')
const redirectRouter = require('./Routes/redirect')
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth", authRouter)
app.use("/auth/link", linkRouter)
app.use("/t/", redirectRouter)


const start = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://nazar:nazar228@cluster0.lcfc3q4.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on ${PORT} port`) )
    }catch (e) {
        console.log(e)
    }
}

start()
