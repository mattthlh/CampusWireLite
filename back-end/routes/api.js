import express from 'express'

import Question from '/model/question'

const router = express.Router()

// fetching questions
router.get('/', async (req, res) => {
  const { questionText, answer, author } = req.body

  try {
    const user = await Question.findOne({ questionText })
    console.log(user)

    if (user) {
      res.send('user already exists')
    } else {
      req.session.username = username
      req.session.password = password
      res.send('user signed up successfully')
    }
  } catch (err) {
    console.log(err)
    res.send('user creation has problems') // preferred
    // throw new Error('user creation has problems')
  }
})


// login post
router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await Question.findOne({ username })
    console.log(user)

    if (!user) {
      res.send('user does not exist')
    } else {
      const { password: passDB } = user // const passDB = user.password

      if (password === passDB) {
        req.session.username = username
        req.session.password = password
        res.send('user logged in successfully')
      } else {
        res.send('user credentials are wrong')
      }
    }
  } catch (err) {
    console.log(err)
    res.send('user creation has problems') // preferred
    // throw new Error('user creation has problems')
  }
})

// logout
router.post('/logout', (req, res) => {
  req.session.username = null
  req.session.password = null
  res.send('user is logged out')
})

export default router
