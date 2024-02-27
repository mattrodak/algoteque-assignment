import { z } from 'zod'

export const searchSchema = z.object({
  city: z.string().min(1, 'City must be at least 1 character long'),
})

export type SearchSchema = z.infer<typeof searchSchema>
