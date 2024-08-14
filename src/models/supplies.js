import { db } from './administrators.js'
export const collectionSuplies = db.collection('Supplies')

export const supplies = {
  async getSupplies () {
    try {
      const supplies = await collectionSuplies.find().toArray()
      return supplies[0]
    } catch (error) {
      console.log(error.message)
    }
  },

  async registerSupplies (supplies) {
    try {
      const newSupplies = await collectionSuplies.findOneAndUpdate({ name: supplies.name }, { $set: supplies }, { upsert: true })
      return newSupplies
    } catch (error) {
      console.log(error.message)
    }
  }

  // async registerSupliesRoom (suplies) {
  //   try {
  //     const newSuplies = await collectionSuplies.findOneAndUpdate({ name: suplies.name }, { $set: suplies }, { upsert: true })
  //     return newSuplies
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
}
