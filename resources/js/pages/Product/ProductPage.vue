<template>
    <div class="container pb-5">
        <div class="row justify-content-center">
            <h1 class="fw-bold fs-3 my-3 text-decoration-underline">Semua Produk</h1>
            <div class="row">
                <div class="col-7">
                    <div class="d-flex justify-content-start flex-wrap gap-4">
                        <Card :shopingCartDatas="allProducts" @emit-addCart="functionAddToCart" />
                    </div>
                </div>
                <div class="col">
                    <div class="bg-white p-5 rounded-3">
                        <ShopingCart :shoppingCartDatas="cartProducts" :totalPassing="total" @emit-click="functionDelete"
                            @emit-checkout="functionCheckout"></ShopingCart>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { ShopingCart, Card } from "@/components";
export default {
    data: function () {
        return {
            allProducts: [
                {
                    img: 'https://asset.kompas.com/crops/z-0iiIfScsgdUPMYcnVCqXtVuNc=/36x0:1236x800/1200x800/data/photo/2022/04/02/62485733a4a34.jpg',
                    name: "Indomie Goreng Rendang",
                    description: "Masakan instan terenak di dunia",
                    rate: 5,
                    stock: 10,
                    price: 3900,
                },
                {
                    img: 'https://img-global.cpcdn.com/recipes/8161ffc01ac0643a/1200x630cq70/photo.jpg',
                    name: "Mie Gelas Rendang",
                    description: "Mie instant khusus anak kosan",
                    rate: 4,
                    stock: 5,
                    price: 1500,
                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7ZR-WT4YKJliQYoMe6zo3kMgk8Ll54h3xA&usqp=CAU',
                    name: "Bakmi Jawa",
                    description: "Enaknya Minta nagih",
                    rate: 4,
                    stock: 80,
                    price: 10000,
                },
                {
                    img: 'https://lasegar.co.id/po-content/uploads/2504-ramen.jpg',
                    name: "Mie Ramen",
                    description: "masakan mi kuah ala Jepang ",
                    rate: 4,
                    stock: 80,
                    price: 10000,
                },
            ],
            cartProducts: [],
            total: 0,
            dataPass: "Data Passing 222",
            newStock: 0,
        };
    },
    methods: {
        functionAddToCart(allProducts) {
            allProducts.stock--;
            const existingIndex = this.cartProducts.findIndex(item => item.name === allProducts.name);
            if (existingIndex >= 0) {
                this.cartProducts[existingIndex].stock++;
                this.cartProducts[existingIndex].price += allProducts.price;
            }
            else {
                this.cartProducts.push({
                    name: allProducts.name,
                    description: allProducts.description,
                    stock: 1,
                    price: allProducts.price,
                });
            }
            this.total += allProducts.price;
            console.log(this.total);
        },
        functionDelete(index) {
            this.total = this.total - this.cartProducts[index].price;
            this.allProducts.forEach((data) => {
                if (data.name === this.cartProducts[index].name) {
                    data.stock += this.cartProducts[index].stock
                };
            },);
            this.cartProducts.splice(index, 1);
            console.log(index);
        },
        functionCheckout() {
            alert(`Anda Harus Membayar Rp. ${this.total}`)
        },
    },
    mounted() {
        console.log("Component mounted.");
    },
    components: { ShopingCart, Card }
};
</script>
