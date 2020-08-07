import React from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../Context/AppContextProducer'

const Cart = (props) => {

    const { data } = props
    console.log(data)

    if (data.length === 0) {
        return <h4 className='p-5'>Your Cart is empty</h4>
    }

    const handleDelete = (id) => {
        props.removeFromCart(id)
        console.log('ok')
    }


    return (
        <AuthContext.Consumer>
            {(values) => {
                const { isAuth } = values

                if (!isAuth) {
                    return <Redirect to={'/Login'} />
                }
                else {
                    return (
                        <div className='container p-5'>
                            <p>Your Cart Items</p>
                            <div className='row p-5'>
                                {data && data.map(item => (
                                    <div key={item.id} className="col-4 card p-3">
                                        <img src={item.img} className='img-fluid card-img-top' alt={item.title} />

                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.title}</h5>
                                            <h3>{item.price}</h3>
                                            <p>{item.language}</p>
                                            <button className='btn btn-info p-2' onClick={() => handleDelete(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
            }}

        </AuthContext.Consumer>
    )
    // }
}

export default Cart