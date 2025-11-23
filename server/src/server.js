import 'dotenv/config';
import express from 'express';
import connectCloudinary from './config/cloudinary.js';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';

const app = express()

await connectCloudinary()


app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res)=>res.send('Server is Running!'))


app.use(requireAuth())

app.use("/api/ai" , aiRouter)
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})