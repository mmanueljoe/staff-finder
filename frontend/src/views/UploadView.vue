<script setup lang="ts">
import { reactive, ref } from "vue";
import { type EmployeeInput } from "../types/types";
import { useUpload } from "../composables/useUpload";

const skillsInput = ref('');

const success = ref(false);

const { mutate, loading, error } = useUpload();

const formData = reactive<EmployeeInput>({
  name: "",
  position: "",
  department: "",
  skills: [""],
  email: "",
});

async function handleSubmit() {
 formData.skills = skillsInput.value.split(",").map((skill) => skill.trim());

 await mutate(formData);
 success.value = true;


 // reset
  formData.name = ''
  formData.position = ''
  formData.department = ''
  formData.skills = []
  skillsInput.value = ''
  formData.email = ''
}
</script>

<template>
  <h1>Employee Details</h1>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" />
    </div>
    <div class="form-group">
      <label for="position">Position:</label>
      <input type="text" id="position" v-model="formData.position" />
    </div>
    <div class="form-group">
      <label for="department">Department:</label>
      <input type="text" id="department" v-model="formData.department" />
    </div>
    <div class="form-group">
      <label for="skills">Skills:</label>
      <input
        type="text"
        id="skills"
        v-model="skillsInput"
        placeholder="Comma separated values"
      />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" />
    </div>
    <button type="submit">{{loading ? 'Uploading...' : 'Upload'}}</button>
  </form>
  <p>{{error}}</p>
  <p v-if="success">Employee uploaded successfully!</p>
</template>
