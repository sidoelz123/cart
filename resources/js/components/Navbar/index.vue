<template>
    <nav class="navbar bg-body-tertiary position-fixed w-100 z-3 ">
        <div class="container mx-auto py-2  ">
            <router-link to="/" class="d-flex gap-1 align-items-center fs-5 text-decoration-none">
                <font-awesome-icon icon="truck-fast" class="navbar-brand " />
                <span class="fw-bold font-monospace text-body  ">OyiShop</span>
            </router-link>
            <div class="d-flex gap-5">
                <router-link to="/">Product</router-link>
                <router-link to="/">Keranjang</router-link>
                <router-link to="/">About</router-link>


            </div>

            <!-- <router-link to="/cart">
                <button class="btn btn-light  position-relative">
                    <font-awesome-icon icon="cart-shopping" />
                    <p
                        class="z-1 position-absolute top-0 end-0 me-1 bg-danger rounded text-white fw-bold fs-7 border border-white px-1">
                        0
                    </p>
                </button>
            </router-link> -->

        </div>
    </nav>
</template>