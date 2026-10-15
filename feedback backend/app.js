const express =require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000; 

const feedbackRoutes = require('./routes/feedbackRoutes');
const db = require('./confiq/db');


app.use(express.json());
app.use('/feedback',feedbackRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
