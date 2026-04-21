<script setup lang="ts">
import { useRoute } from "vue-router";
import { useEmployee } from "../composables/useEmployee";
import { ref } from "vue";
const { id } = useRoute().params;

const employeeId = ref(id as string);

const { result, loading, error } = useEmployee(employeeId);
</script>

<template>
  <div>
    <template v-if="loading">
      <h1>Loading...</h1>
    </template>
    <template v-else-if="error">
      <h1>{{ error }}</h1>
    </template>
    <template v-else>
      <h1>{{ result?.employee.name }}</h1>
      <p>{{ result?.employee.position }}</p>
      <p>{{ result?.employee.email }}</p>
      <div v-for="skill in result?.employee.skills" :key="skill">
        <span>{{ skill }}</span>
      </div>
    </template>
  </div>
</template>
