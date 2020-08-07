import React from 'react'
import data from './data.json'
import { Link } from 'react-router-dom'
import './Home.module.css'

export default class Home extends React.Component {

    render() {
        return (
            <>
                <div className='container pt-5'>
                    <div className='row pt-5'>
                        <div className='col-3 border-right'>
                            <h3 className='text-dark'>Browse by Category</h3>
                            {
                                data.list.map(item => <Link to={`Products`} key={item}><p>{item}</p></Link>)
                            }
                        </div>
                        <div className='col-9'>
                            <div className="jumbotron jumbotron-fluid"
                                style={{
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
                                    backgroundSize: "cover",
                                    height: "400px",
                                }}>
                                <div className="container">
                                    <h1 className="display-4 text-light">Todays Offer:<br/>10%off on <br/>every book</h1>
                                    <p className="text-light">Hurry Now!!!</p>
                                </div>
                            </div>
                            <div className="row">
                            {
                                data.data && data.data.map((item) => (
                                    <div className='col-3 p-4' key={item.id}>
                                        <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '100px' }}>
                                            <img src={item.img} className="card-img-top img-fluid" alt={item.id} style={{ height: "100px" }} />
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}