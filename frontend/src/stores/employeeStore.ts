import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmployeeStore = defineStore("employee", () => {
  const activeFilter = ref("all");

  const selectedEmployee = ref(null);

  function setActiveFilter(filter: string) {
    activeFilter.value = filter;
  }

  function setSelectedEmployee(employee: any) {
    selectedEmployee.value = employee;
  }

  return {
    activeFilter,
    setActiveFilter,
    selectedEmployee,
    setSelectedEmployee,
  };
});
