const mysql = require('mysql2/promise');

module.exports = class DBConnection {
  constructor(config) {
    this.config = config
  }

  async getAllPosts() {
    try {
      const connection = await mysql.createConnection(this.config)
      const [rows] = await connection.execute('SELECT * FROM `blog`')
      return rows
    } catch (error) {
      console.error(error.message);
    }
  }

  async getUserPosts(user_id) {
    try {
      const connection = await mysql.createConnection(this.config)
      const [rows] = await connection.execute(`SELECT * FROM 'blog' WHERE 'user_id' = ${user_id}`)
    } catch (error) {
      console.error(error.message);
    }
  }

  async getAllComments() {
    try {
      const connection = await mysql.createConnection(this.config)
      const [rows] = await connection.execute(`SELECT * FROM 'comments'`)
    } catch (error) {
    }
  }

  async getCommentsOnPosts(comment_id) {
    try {
      const connection = await mysql.createConnection(this.config)
      const [rows] = await connection.execute(`SELECT * FROM 'comments' WHERE 'comment_id' = ${comment_id}`)
    } catch (error) {
      console.error(error.message);
    }
  }

}




