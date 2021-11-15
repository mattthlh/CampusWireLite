import express from 'express'
import session from 'cookie-session'
import mongoose from 'mongoose'

// import projectRouter from './projectRouter'
// import searchRouter from './searchRouter'
// import loginRouter from './loginRouter'

const app = express()
const port = process.env.PORT || 3000

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())

app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 3600 //in ms
}))

app.get('/', (req, res) => {
  return res.send('hello world!')
})

app.use('/project', projectRouter)
app.use('/search', searchRouter)
app.use('/login', loginRouter)

app.use((err, req, res, next) => {
  res.status(500).send('There was an error!')
})

// Start listening for requests
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
