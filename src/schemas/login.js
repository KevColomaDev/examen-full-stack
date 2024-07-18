import z from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

const requieredFields = loginSchema.required()

export const validateLogin = (data) => {
  const isValid = requieredFields.safeParse(data)
  if (!isValid.success) {
    return isValid.error
  }
  return isValid.data
}
