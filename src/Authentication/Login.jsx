
import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, TextField, Container, Box } from '@material-ui/core'
import Styles from './Signup.module.css'
import { AuthContext } from '../Context/AppContextProducer'

function LogIn(props) {
    let username = React.createRef()
    let password = React.createRef()

    return (
        <AuthContext.Consumer>
            {(values) => {
                const { users, toggleAuth, isAuth } = values

                const handleClick = (e) => {
                    e.preventDefault()
                    let uname = username.current.value
                    let pass = password.current.value

                    if(uname==='' || pass==='')
                        alert('Please enter the data')
                    else if(users.length===0){
                        alert('Sign up first')
                    }
                    users.forEach(element => {
                        if (element.username === uname && element.password === pass) {
                            toggleAuth()
                            alert("you are successfully logged in")
                        }
                        else
                            alert('Please sign up')
                    });
                }

                {
                    if (isAuth)
                        return <Redirect to='/' />
                }

                return (
                    <Container classes={{ root: Styles.box }} maxWidth="sm">
                        <Box display='flex' justifyContent="center" margin={3} >
                            <TextField
                                label="Username"
                                variant="outlined"
                                inputRef={username}
                            />
                        </Box>
                        <Box display='flex' justifyContent="center" margin={3}>
                            <TextField
                                label="Password"
                                variant="outlined"
                                inputRef={password}
                            />
                        </Box>
                        <Box display='flex' justifyContent="center" margin={3} >
                            <Button variant='contained' color='primary' onClick={handleClick}>Login</Button>
                        </Box>
                    </Container >
                )
            }}
        </AuthContext.Consumer>
    )
}

export default LogIn