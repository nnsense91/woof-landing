<template>
    <header>{{ headerTitle }}</header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component'

@Component
export default class AppHeader extends Vue {
    headerTitle = "header-title"
}
</script>

<style scoped>

</style>