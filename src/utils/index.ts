import { Skill, skill } from '@/models'
import { skills } from '@/assets/skills'
import { computed } from 'vue'

export const getSkills = computed(
  () =>
    (skillnames: string[]): (Skill | undefined)[] =>
      skillnames.map((v) => skills.find((k) => k.name === v))
)
