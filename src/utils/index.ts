import { Skill } from '@/models'
import { computed } from 'vue'
import skillsYaml from '@/assets/skills.yaml?raw'
import { load } from 'js-yaml'

export const skills = load(skillsYaml) as Skill[]
export const getSkills = computed(
  () =>
    (skillnames: string[]): (Skill | undefined)[] =>
      skillnames.map((v) => skills.find((k) => k.name === v))
)
