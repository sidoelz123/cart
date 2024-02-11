<template>
    <div v-for="(item, index) in   shopingCartDatas  " :key="index">
        <div class="card border-2  rounded-3 overflow-hidden" style="width: 18rem;">
            <div :style="{ 'background-image': 'url(' + item.img + ')' }"
                style="background-position: center;background-size: cover; height: 150px;">
            </div>
            <div class="card-body bg-white">
                <h5 class="card-title fw-bold fs-4   text-truncate">{{ item.name }}</h5>
                <p>{{ item.description }}</p>
                <div class="d-flex justify-content-between   ">
                    <p class="card-text m-0 p-0 fw-bold fs-5 ">Rp. {{ item.price }}</p>
                    <p><font-awesome-icon icon="star" size="sm" style="color: #ffc905;" /> {{ item.rate }}</p>
                </div>
                <p> stok {{ item.stock }}</p>
                <button v-if="item.stock > 0" class="btn btn-outline-primary w-100 mt-4 " type="submit"
                    @click="functionAddCart(item)">
                    Tambahkan ke Keranjang
                </button>
                <button v-else class="btn btn-outline-secondary mt-4" disabled>
                    Tambahkan ke Keranjang
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    emits: ['emit-addCart'],
    props: {
        shopingCartDatas: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods: {
        functionAddCart(item) {
            this.$emit('emit-addCart', item)
        }
    }
}

</script>