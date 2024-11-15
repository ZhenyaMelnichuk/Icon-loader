<template>
    <header>
        <img alt="logo" class="logo" src="@/assets/logo.svg" />
        <nav>
            <router-link :to="{ name: 'Home' }"> Home </router-link>
            <router-link :to="{ name: 'Main' }"> Main </router-link>
        </nav>
    </header>
</template>

<style lang="less" scoped>
header {
    display: flex;
    align-items: center;
    line-height: 1.5;
    max-height: 100vh;

    .logo {
        width: 4rem;
        margin-right: 2rem;
    }

    nav {
        width: 100%;

        a {
            padding: 0 1rem;
            border-left: 1px solid var(--color-border);

            &:first-of-type {
                border: 0;
            }
        }

        .router-link-exact-active {
            color: var(--color-text);
        }
    }
}
</style>
