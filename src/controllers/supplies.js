import { supplies, collectionSuplies } from '../models/supplies.js'
import { validateRegisterSupplies } from '../schemas/registerSupplies.js'

export const suppliesRegister = async (req, res) => {
  try {
    const suplies = validateRegisterSupplies(req.body)
    const oldSuplies = await collectionSuplies.findOne({ name: suplies.name })
    console.log(oldSuplies)
    let toothPaste = oldSuplies.toothPaste
    let soap = oldSuplies.soap
    let toothBrush = oldSuplies.toothBrush
    let towel = oldSuplies.towel
    if (suplies.toothPaste) {
      toothPaste += suplies.toothPaste
    }
    if (suplies.soap) {
      soap += suplies.soap
    }
    if (suplies.toothBrush) {
      toothBrush += suplies.toothBrush
    }
    if (suplies.towel) {
      towel += suplies.towel
    }
    const updateSupplies = {
      toothPaste,
      soap,
      toothBrush,
      towel
    }
    await supplies.registerSuplies(updateSupplies)
    return res.status(200).json({ msg: 'Supplies registered', updateSupplies })
  } catch (error) {
    console.log(error)
  }
}
