<script>
import { RouterLink } from 'vue-router'

</script>

<template>
    <header>
        <RouterLink to="/">VCA4D website</RouterLink>

        HEADER

    </header>

    <main>
        <slot></slot>
    </main>

    <footer>
        FOOTER
    </footer>
</template>

<style scoped lang="scss">
RouterLink{
    color: green;
}


</style>