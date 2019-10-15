<template>
    <div class="col-sm-12 col-md-4">
        <div class="panel panel-success">
            <h3 class="panel-title">
                {{stock.name}} <small>(Price: {{stock.price | currency}})</small>
            </h3>
        </div>
        <div class="panel-body">
            <div class="pull-left">
                <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
            </div>
            <br>
            <div class="pull-left">
                <button 
                class="btn btn-success" 
                @click="buyStock" 
                :disabled="quantity <= 0 || !Number.isInteger(Number(quantity)) || (quantity * stock.price) > funds"
                >Buy</button>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        props: {
            stock:{
                type: Object,
                required: true
            }
        },
        data(){
            return {
                quantity: 0
            }
        },
        methods: {
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch("buyStock", order)
                this.quantity = 0
            }
        },
        computed: {
            funds(){
                return this.$store.getters.funds
            }
        }
    }
</script>