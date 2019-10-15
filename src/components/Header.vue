<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav"> 
                <!-- class="nav-item active" -->
                <!-- class="nav-link" -->
                <router-link class="nav-item" tag="li" to="/portfolio" active-class="active">
                    <a class="nav-link">Portfolio <span class="sr-only">(current)</span></a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/stocks" active-class="active">
                    <a class="nav-link">Stocks</a>
                </router-link>
                <button class="btn btn-link" @click="randomStocks">End Day</button>

               <div>
                    <b-dropdown id="dropdown-1" text="Load&Save" class="m-md-2">
                        <b-dropdown-item @click="dropdown(true)">Load Data</b-dropdown-item>
                        <b-dropdown-item @click="dropdown(false)">Save Data</b-dropdown-item>
                    </b-dropdown>
                </div>
            </ul>
            <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
        </div>
    </nav>
</template>

<script>
    export default {
        computed: {
            funds(){
                return this.$store.getters.funds
            }
        },
        methods: {
            randomStocks(){
                this.$store.dispatch("randomStocks")
            },
            dropdown(boolean){
                if(boolean){
                   this.$http.get("data.json")
                   .then(res => res.json())
                   .then(data => {
                        if(data)
                            this.$store.dispatch("initialStocks", data.stocks)
                            this.$store.dispatch("setStockPortofolio", data.stockPortofolio)
                            this.$store.dispatch("setFunds", data.funds)
                   })
                   .catch(err => console.error(err))
                }                    
                else {
                     const data = {
                        funds: this.$store.getters.funds,
                        stockPortofolio: this.$store.getters.stockPortfolio,
                        stocks: this.$store.getters.stocks
                    }
                    this.$http.put("data.json", data)
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
                }
            }
        }
    }
</script>