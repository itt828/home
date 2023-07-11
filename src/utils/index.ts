import { Skill } from '@/models'
import { skills } from '@/assets/skills'

export const getSkills = (skillnames: string[]): (Skill | undefined)[] =>
  skillnames.map((v) => skills.find((k) => k.name === v))
