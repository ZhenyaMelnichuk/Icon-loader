<template>
    <Header />
    <main>
        <RouterView />
    </main>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    components: {
        Header
    }
}
</script>
