<template>
    <h1>Keranjang Belanja</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in shoppingCartDatas" :key="index" class="table align-middle">
                <td>{{ item.name }}</td>
                <td>{{ item.stock }}</td>
                <td>Rp. {{ item.price }}</td>
                <td>
                    <button class="btn btn-danger text-bg-danger" @click="functionClick(index)">Delete</button>
                </td>
            </tr>
            <tr>
                <th colspan="2">Total:</th>
                <th>Rp. {{ totalPassing }}</th>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-success" @click="functionCheckout()">Checkout</button>

    <!-- <button class="btn btn-primary" @click="$emit('emit-click', 'Params')">Submit Button</button> -->
    <!-- <button class="btn btn-primary" @click="$emit('emit-click', listData)"></button> -->
</template>

<script>
export default {
    emits: ['emit-click', 'emit-checkout'],
    props: {
        totalPassing: Number,
        titlePass: String,
        shoppingCartDatas: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    methods: {
        functionClick(item) {
            this.$emit('emit-click', item)
        },
        functionCheckout() {
            this.$emit('emit-checkout')
        },
    }
}
</script>

<style></style>