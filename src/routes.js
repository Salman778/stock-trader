import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'

const home = {
    path: "/",
    component: Home,
    name: "home"
}

const portfolio = {
    path: "/portfolio",
    component: Portfolio,
    name: "portfolio"
}

const stocks = {
    path: "/stocks",
    component: Stocks,
    name: "stocks"
}

const routes = [home, portfolio, stocks]


export default routes

