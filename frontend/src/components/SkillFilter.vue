<script setup lang="ts">
import { ref } from 'vue';
import { type PropType } from 'vue';


const props = defineProps({
    skills: Array as PropType<string[]>
});

const filter = ref('');

const emit = defineEmits(['filter']);
</script>

<template>
<select id="filter" v-model="filter" @change="emit('filter', filter)">
    <option v-for="skill in skills" :value="skill" :key="skill">
        {{ skill }}
    </option>
</select>
</template>