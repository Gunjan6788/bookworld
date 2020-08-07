import React from 'react'

const ProductItem = (props) => {
    const { data, match, history } = props

    console.log(data, history)
    const item = data.find(item => item.id === Number(match.params.id))
    console.log(match, item)
    if (!item) {
        return <h4>Error:Item not found</h4>
    }

    const handleClick = () => {
        props.addToCart(item)
        history.push('/Cart')
    }

    return (
        <>
            <div className='container p-5'>
                <div className='row p-5'>
                    <div className='col-6 '>
                        <img src={item.img} className='img-fluid shadow p-3 mb-5 bg-white rounded"' alt={item.title} />
                    </div>
                    <div className='col-4 offset-2'>
                        <h1>T{item.title}</h1>
                        <h4>Price:{item.price}</h4>
                        <p>Language:{item.language}</p>
                        <button onClick={handleClick} className='btn btn-info'>Buy</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductItem