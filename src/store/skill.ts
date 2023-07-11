import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { Skill } from "../models";

export const useSkillStore = defineStore("skill", () => {
  const skills = ref<Skill[]>([]);
  const setSkills = () => {};
  const getSkills = computed(() => (skillNames: string[]): Skill[] => {
    return skillNames.map(
      (name) => skills.value.filter((v) => v.name == name)[0]
    );
  });
  return {
    skills,
    setSkills,
    getSkills,
  };
});
