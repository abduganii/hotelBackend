import express from "express" 
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"

//import routes
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import hotelsRoutes from "./routes/hotel.js"
import roomRoutes from "./routes/rooms.js"

dotenv.config();

const MongoUrl = process.env.MONGODB_UR || "mongodb+srv://Abduganiy:rmFMzmMajqOVdFSC@cluster0.18iey.mongodb.net/hotel?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);
mongoose
    .connect(MongoUrl)
    .then(console.log("MB connected"))
    .catch((err)=>console.log(err)) 

    

const app = express()
const PORT = process.env.PORT || 5555

app.use(express.json())
app.use(cors())

// meddlewares
app.use('/auth',authRoutes)
app.use('/users',usersRoutes)
app.use('/hotels',hotelsRoutes)
app.use('/rooms',roomRoutes)

// server port
app.listen(PORT, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log(`Server is running in http://localhost:${PORT}`)
})
