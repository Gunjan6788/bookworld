import React from 'react'
import { Route, Switch } from 'react-router-dom'
import data from '../component/data.json'
import Login from '../Authentication/Login'
import Home from '../component/Home'
import Product from '../Product/Product'
import Cart from '../component/Cart'
import Signup from '../Authentication/Signup'
import About from '../component/About'
import ProductItem from '../Product/ProductItem'

export default class PublicRoutes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cartsArray: []
        }
    }

    addToCart = (item) => {
        this.setState({
            cartsArray: [...this.state.cartsArray, item]
        })

        console.log(this.state.cartsArray)
    }

    removeFromCart = (id) => {
        const { cartsArray } = this.state
        console.log(cartsArray)

        this.setState({
            cartsArray: [...this.state.cartsArray].filter(item => {
                return item.id!==id
            })
        })


        console.log(cartsArray)
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path='/' exact render={(props) => <Home {...props} />} />
                    <Route path='/About' render={(props) => <About {...props} />} />
                    <Route path='/Login' render={(props) => <Login {...props} />} />
                    <Route path='/Signup' render={(props) => <Signup {...props} />} />
                    <Route path="/Products/:id" render={(props) => <ProductItem {...props} addToCart={this.addToCart} data={data.data} />} />
                    <Route path='/Products' render={(props) => <Product {...props} data={data.data} />} />
                    <Route path='/Cart' render={props => <Cart {...props} removeFromCart={this.removeFromCart} data={this.state.cartsArray} />} />
                    <Route path='/Product/sort/:orderBy(asc/desc)' render={(props) => <Product {...props} data={data.data} />} />

                    {
                        data.list.map(item => <Route path={`/${item}`} key={item} render={props => <Product data={data.data} addToCart={this.addToCart} {...props} />}></Route>)
                    }

                    <Route render={() => <div className='pt-5'>404 Page not found</div>} />
                </Switch>
            </>
        )
    }
}

