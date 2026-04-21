<script setup lang="ts">
import {ref} from 'vue';
import { useSearch } from '../composables/useSearch';
import EmployeeList from '../components/EmployeeList.vue';

const inputValue = ref('');
const matchQuery = ref('');


const {result, loading, error} = useSearch(matchQuery);

function handleSubmit(){
    matchQuery.value = inputValue.value;
}


</script>

<template>
    <h1>Match Views</h1>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="match-query">Find Employee Match</label>
            <input type="text" id="match-query" v-model="inputValue"/>
        </div>
        <button type="submit">Submit</button>
    </form>

    <div>
        <template v-if="loading">
            <h1>Loading...</h1>
        </template>
        <template v-else-if="error">
            <h1>{{ error }}</h1>
        </template>
        <template v-else>
            <EmployeeList :filteredEmployees="result?.searchEmployees" :loading="loading" :error="error" />
        </template>
    </div>
</template>