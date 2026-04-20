
<script setup lang="ts">
import { useEmployees } from '../composables/useEmployees';
import { useSearch } from '../composables/useSearch';
import EmployeeCard from './EmployeeCard.vue';
import { ref} from 'vue';

const { result, loading, error } = useEmployees();


const search = ref('');

const {  result: searchResult, loading: searchLoading, error: searchError } = useSearch(search);

</script>

<template>
   <header>
    <input type="text" placeholder="search" v-model="search">
   </header>
    <template v-if="loading">
        <h1>Loading...</h1>
    </template>
    <template v-else-if="error">
        <h1>{{error}}</h1>
    </template>
    <template v-else>
        <div v-if="search">
            <template v-if="searchLoading">
                <h1>Loading...</h1>
            </template>
            <template v-else-if="searchError">
                <h1>{{searchError}}</h1>
            </template>
            <template v-else>
            <h1>Search</h1>
            <div v-for="employee in searchResult?.searchEmployees" :key="employee.id">
                <EmployeeCard :employee="employee" />
            </div>
            <p v-if="searchResult?.searchEmployees?.length === 0">No employees found</p>
            </template>
        </div>
        <div v-else>
            <h1>Employees</h1>
            <div v-for="employee in result?.employees" :key="employee.id">
                <EmployeeCard :employee="employee" />
            </div>
        </div>
    </template>
</template>