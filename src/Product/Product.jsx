import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const { data, match } = props
    console.log(match)

    if(match.params.orderBy){
        let order = match.params.orderBy
        
        if(order==='asc'){
            data.sort((a,b)=> a.name - b.name)
        }
        else{
            data.sort((a,b) => a.name < b.name)
        }
    }


    return (

        <>
            <div className='container pt-5'>
                <div className='row'>
                    {/* <div className='col-3 border-right'>
                        <h2>Sort</h2>
                        <Link to='/Product/sort/asc'>A-Z</Link>
                        <Link to='/Product/sort/desc'>Z-A</Link>
                    </div> */}

                    <div className='col-9 offset-2'>
                        <div className='row'>
                            {
                                data && data.map((item) => (
                                    <div className='col-md-6 col-12 p-4' key={item.id}>
                                        <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '300px' }}>
                                            <img src={item.img} className="card-img-top img-fluid" alt={item.id} style={{ height: "350px" }} />
                                            <div className="card-body">
                                                <Link to={`${match.url}/${item.id}`}><h5 className="card-title" >{item.title}</h5></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}

export default Product