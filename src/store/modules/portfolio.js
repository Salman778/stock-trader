const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    "BUY_STOCK"(state, {stockId, quantity, stockPrice}){
        quantity = parseInt(quantity)
        const record = state.stocks.find(stock => stock.id == stockId)
        if (state.funds >= (quantity * stockPrice)){
            if (record)
                record.quantity += quantity
            else
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            state.funds -= quantity * stockPrice
        }
    },
    "SELL_STOCK"(state, {stockId, quantity, stockPrice}){
        quantity = parseInt(quantity)
        const record = state.stocks.find(stock => stock.id == stockId)
        if (record.quantity >= quantity){
            record.quantity -= quantity
            state.funds += quantity * stockPrice
            record.quantity ||  state.stocks.splice(state.stocks.indexOf(record), 1)
        }
    },
    "SET_stockPortofolio"(state, stocks){
        state.stocks = stocks
    },
    "SET_FUNDS"(state, funds){
        state.funds = funds
    }
}


const actions = {
    sellStock({commit}, order){
        commit("SELL_STOCK", order)
    },
    setStockPortofolio({commit}, stocks){
        commit("SET_stockPortofolio", stocks)
    },
    setFunds({commit}, funds){
        commit("SET_FUNDS", funds)
    }
}


const getters = {
    stockPortfolio: (state, getters) => state.stocks.map(portfolioStock => {
        const record = getters.stocks.find(stock => portfolioStock.id == stock.id)
        return {
            id: portfolioStock.id,
            quantity: portfolioStock.quantity,
            name: record.name,
            price: record.price
        }
    }),
    funds: state => state.funds
}

const portfolio = {state, getters, mutations, actions}

export default portfolio