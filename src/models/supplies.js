import { connectDB } from '../database.js'

const db = await connectDB()
export const collectionSuplies = db.collection('Suplies')

export const supplies = {
  async getSuplies () {
    try {
      const suplies = await collectionSuplies.find().toArray()
      return suplies
    } catch (error) {
      console.log(error.message)
    }
  },

  async registerSuplies (suplies) {
    try {
      const newSuplies = await collectionSuplies.findOneAndUpdate({ name: suplies.name }, { $set: suplies }, { upsert: true })
      return newSuplies
    } catch (error) {
      console.log(error.message)
    }
  },

  async registerSupliesRoom (suplies) {
    try {
      const newSuplies = await collectionSuplies.findOneAndUpdate({ name: suplies.name }, { $set: suplies }, { upsert: true })
      return newSuplies
    } catch (error) {
      console.log(error.message)
    }
  }
}
