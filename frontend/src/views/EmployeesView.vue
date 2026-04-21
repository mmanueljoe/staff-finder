<script setup lang="ts">
import EmployeeList from "../components/EmployeeList.vue";
import { useEmployeeStore } from "../stores/employeeStore";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useEmployees } from "../composables/useEmployees";
import { type Employee } from "../types/types";
import SkillFilter from "../components/SkillFilter.vue";

const store = useEmployeeStore();
const { activeFilter } = storeToRefs(store);
const { result, loading, error } = useEmployees();

const filteredEmployees = computed(() => {
  if (activeFilter.value === "all") return result?.value?.employees;

  return result.value?.employees.filter((e: Employee) =>
    e.skills.includes(activeFilter.value),
  );
});

const skills = computed((): string[] => {
  const allSkills: string[] =
    result.value?.employees.flatMap((e: Employee) => e.skills as string[]) ??
    [];
  return ["all", ...new Set(allSkills)];
});
</script>

<template>
  <div class="container">
    <SkillFilter :skills="skills" @filter="store.setActiveFilter" />
    <div>
      <RouterLink to="/upload">Upload Employee</RouterLink>
    </div>
    <EmployeeList
      :filteredEmployees="filteredEmployees"
      :loading="loading"
      :error="error"
    />
  </div>
</template>
