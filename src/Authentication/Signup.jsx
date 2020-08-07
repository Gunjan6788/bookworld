import React from 'react'
import './Signup.module.css'

import { AuthContext } from '../Context/AppContextProducer'

export default class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            username: '',
        }
    }

    handleFormData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <AuthContext.Consumer>
                {
                    ({addUsers}) => {

                        const submitForm = (e) => {
                            e.preventDefault()
                            let add = this.state
                            addUsers(add)
                            alert("You are succsessfully signed up")
                        }
                
                        return (
                            <div className='container-sm '>
                                <div className='pt-sm-5 mt-sm-5 p-md-5 m-md-5'>

                                    <form onSubmit={submitForm} className='m-5 p-5'>
                                        <h3 className='text-muted pb-5'>Signup</h3>
                                        <div className='form-group'>
                                            <label>Email:</label>
                                            <input
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleFormData}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className='form-group'>
                                            <label>Username:</label>
                                            <input
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.handleFormData}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className='form-group'>
                                            <label>Password:</label>
                                            <input
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleFormData}
                                                className="form-control"
                                            />
                                        </div>

                                        <input type='submit' value='SUBMIT' className='btn btn-info p-2' />

                                        
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}