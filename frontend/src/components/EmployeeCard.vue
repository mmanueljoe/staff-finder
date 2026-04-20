<script setup lang="ts">
import type { Employee } from '../types/types.js';
import { RouterLink } from 'vue-router';
import { type PropType } from 'vue';

const props = defineProps({
 employee: {
    type: Object as PropType<Employee>,
   required: true
 }
})
</script>


<template>

<RouterLink :to="`/profile/${props.employee.id}`">
    <div>
        <h2>{{props.employee.name}}</h2>
        <p>{{props.employee.position}}</p>
        <p>{{props.employee.email}}</p>
        <div v-for="skill in props.employee.skills" :key="skill">
            <span>{{skill}}</span>
        </div>
    </div>
</RouterLink>

</template>