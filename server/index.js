import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
const app = express();


app.use(bodyParser.json({limit : "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}))
app.use(cors())
app.use('/posts', postRoutes);

// mongo db

const CONNECTION_URL = 'mongodb+srv://wendikardian:qwerty12345@wendicluster.k2zun.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)) )
.catch((error) => console.error(error.message) )

// mongoose.set('useFindAndModify', false)
// await mongoose.connect('mongodb://localhost:27017/test', {
//   useNewUrlParser: true, // <-- no longer necessary
//   useUnifiedTopology: true // <-- no longer necessary
// });
