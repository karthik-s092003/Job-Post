require("dotenv").config()
const express = require("express")
const app = express()
const companyRouter = require("./routes/companyRoutes")
const empRouter = require("./routes/empRouter")
const connectDB = require("./db/connect")
const cors = require("cors");

app.use(cors());

app.use(express.json())
app.use("/api/v1/company",companyRouter)
app.use("/api/v1/emp",empRouter)


const port = process.env.PORT || 3060

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`app listening at port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()