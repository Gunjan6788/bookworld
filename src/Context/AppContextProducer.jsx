import React, { createContext } from 'react'

export const AuthContext = createContext()

export default class AppContextProducer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: false,
            users: []
        }
    }

    toggleAuth = () => {
        this.setState({
            isAuth:!this.state.isAuth
        })
    }

    addUsers = (item) => {
        this.setState({
            users:[item,...this.state.users]
        },()=>console.log(this.state.users))
    }

    render() {
        const { isAuth, users } = this.state
        const { toggleAuth, addUsers } = this

        return (
            <AuthContext.Provider value={{isAuth,users,toggleAuth,addUsers}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}