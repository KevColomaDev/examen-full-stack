import { supplies, collectionSuplies } from '../models/supplies.js'
import { validateRegisterSupplies } from '../schemas/registerSupplies.js'

export const getSupplies = async (req, res) => {
  try {
    const getSupplies = await supplies.getSupplies()
    const { _id, ...others } = getSupplies
    return res.status(200).json(others)
  } catch (error) {
    console.log(error)
  }
}

export const suppliesRegister = async (req, res) => {
  try {
    const suppliesInput = validateRegisterSupplies(req.body)
    const oldSupplies = await collectionSuplies.findOne({ name: supplies.name })
    console.log(oldSupplies)
    let toothPaste = oldSupplies.toothPaste
    let soap = oldSupplies.soap
    let toothBrush = oldSupplies.toothBrush
    let towel = oldSupplies.towel
    if (suppliesInput.toothPaste) {
      toothPaste += suppliesInput.toothPaste
    }
    if (suppliesInput.soap) {
      soap += suppliesInput.soap
    }
    if (suppliesInput.toothBrush) {
      toothBrush += suppliesInput.toothBrush
    }
    if (suppliesInput.towel) {
      towel += suppliesInput.towel
    }
    const updateSupplies = {
      toothPaste,
      soap,
      toothBrush,
      towel
    }
    await supplies.registerSupplies(updateSupplies)
    return res.status(200).json({ msg: 'Supplies registered', updateSupplies })
  } catch (error) {
    console.log(error)
  }
}
