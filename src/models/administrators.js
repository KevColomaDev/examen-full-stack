import { connectDB } from '../database.js'

const db = await connectDB()
const collectionAdmin = db.collection('Administrators')
const collectionPatients = db.collection('Patients')

export const administrators = {
  async login (email, password) {
    try {
      const administrator = await collectionAdmin.findOne({ email, password })
      return administrator
    } catch (error) {
      console.log(error.message)
    }
  },
  async registerPatient (patient) {
    try {
      const newPatient = await collectionPatients.insertOne(patient)
      return newPatient
    } catch (error) {
      console.log(error)
    }
  }
}
