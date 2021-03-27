const mysql = require('mysql2/promise');

module.exports = class DBConnection {
  constructor(config) {
    this.config = config
  }

  async getAllPosts() {
    try {
      const connection = await mysql.createConnection(this.config)
      const [rows] = await connection.execute('SELECT * FROM `posts`')
      return rows
    } catch (error) {
      console.error(error.message);
    }
  }

  async getUserPosts(post_id) {
    try {
      const connection = await mysql.createConnection(this.config)
      const [rows] = await connection.execute(`SELECT * FROM posts WHERE post_id='${post_id}'`)
      // console.log(rows)
      return rows
    } catch (error) {
      console.error(error.message);
    }
  }

  async getAllComments() {
    try {
      const connection = await mysql.createConnection(this.config)
      const [rows] = await connection.execute(`SELECT * FROM comments`)
      return rows
    } catch (error) {
    }
  }

  async getCommentsOnPost(id) {
    try {
      const connection = await mysql.createConnection(this.config)
      const [rows] = await connection.execute(`SELECT * FROM comments WHERE post_id='${id}'`)
      return rows
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // need to add user id to comment
  async addComment(req) {
    try {
      const connection = await mysql.createConnection(this.config)
      await connection
        .execute(`INSERT INTO comments (user_id, post_id, text, date) VALUES ('${req.user_id}','${req.post_id}','${req.text}', '${req.date}')`)
    } catch (error) {
      console.error(error.message);
    }
  }

}




