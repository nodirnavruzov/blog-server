const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const config = require('./sql.config')
const DBCon = require('./sql/index')
// const {authenticateJWT} = require('./jwt')
const host = '127.0.0.1'
const port = 8080
 
app.use(cors())
app.use(express.json())


// app.get('/api/block', authenticateJWT, async (req, res) => {
//   try {
//     res.status(200).json('rows')
//   } catch (error) {
//     res.status(401).json('Unauthorization')
//     //console.error(error.message);
//   }
// })

app.get('/api/posts/allPosts', async (req, res) => {
  try {
    let conn = new DBCon(config)
    let rows = await conn.getAllPosts()
    res.status(200).json(rows)
    res.end()
  } catch (error) {
    console.error(error.message);
  }
})

app.get('/api/posts/userPosts/:id', async (req, res) => {
  // /api/posts/userPosts/60
  try {
    let conn = new DBCon(config)
    let rows = await conn.getUserPosts(req.params.id)
    res.status(200).json(rows)
    res.end()
  } catch (error) {
    console.error(error.message);
  }
})

app.get('/api/comments/allComments', async (req, res) => {
  try {
    let conn = new DBCon(config)
    let rows = await conn.getAllComments()
    res.status(200).json(rows)
    res.end()
  } catch (error) {
    console.error(error.message);
  }
})

app.get('/api/comments/commentsOnPost/:id', async (req, res) => {
  // console.log(req.params.id)
  try {
    let conn = new DBCon(config)
    let rows = await conn.getCommentsOnPost(req.params.id)
    // console.log('rows',rows)
    res.status(200).json(rows)
    res.end()
  } catch (error) {
    console.error(error.message);
  }
})

app.post('/api/comments/addComment', async (req, res) => {
  try {
    let conn = new DBCon(config)
    await conn.addComment(req.body)
  } catch (error) {
    console.error(res.message)
  }
})




app.listen(port , host, () => {
  console.log(`Server has been started on http://${host}:${port}`)
})
