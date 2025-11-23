import express from 'express';

import { clerkMiddleware, requireAuth } from '@clerk/express'

const app = express()

app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res)=>res.send('Server is Running!'))


app.use(requireAuth())
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})