<template>
    <div>
        <AppHeader />
        <div class="test">{{ greetings }}</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import AppHeader from "@components/app-header.vue";

@Component({
    components: {
        AppHeader
    }
})

export default class App extends Vue {

    greetings = "Hello, let`s vue"
}
</script>

<style lang="scss">
</style>
