<template>
    <NavBar />
    <section class="bg-body-secondary mb-3 " style="padding-top: 6em">
        <router-view />
    </section>
    <Footer />
</template>
<script>
import { NavBar, Footer } from "@/components";
export default {
    components: { NavBar, Footer },
};
</script>