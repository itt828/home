import { z } from 'zod'

export const skill = z.object({
  name: z.string(),
  color: z.string()
})

export const work = z.object({
  title: z.string(),
  description: z.string(),
  descriptionDetail: z.string(),
  image: z.string(),
  skills: z.array(z.string())
})

export type Skill = z.infer<typeof skill>
export type Work = z.infer<typeof work>
