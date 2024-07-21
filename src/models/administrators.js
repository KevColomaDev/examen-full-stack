import { connectDB } from '../database.js'

const db = await connectDB()
const collectionAdmin = db.collection('administrators')

export const administrators = {
  async login (email, password) {
    try {
      const administrator = await collectionAdmin.findOne({ email, password })
      return administrator
    } catch (error) {
      console.log(error.message)
    }
  }
}
