<script  setup lang="ts">
const props = defineProps({
    isOpen: Boolean
});

const emit = defineEmits(['close']);
</script>

<template>
<div class="modal" v-if="isOpen">
    <div class="modal-content">
        <header>
        <slot name="header"></slot>
        <button @click="emit('close')">X</button>
        </header>
        <main>
        <slot name="body"></slot>
        </main>
        <footer>
        <slot name="footer"></slot>
        </footer>
    </div>
</div>
</template>