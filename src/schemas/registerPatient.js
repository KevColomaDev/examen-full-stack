import z from 'zod'

const registerPatientSchema = z.object({
  name: z.string(),
  admissionDate: z.string().default(new Date().toLocaleDateString()),
  departureDate: z.string().optional(),
  habitation: z.string()
})

export const validateRegisterPatient = (data) => {
  const isValid = registerPatientSchema.safeParse(data)
  if (!isValid.success) {
    return isValid.error
  }
  return isValid.data
}
