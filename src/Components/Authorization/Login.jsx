import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { Grid, makeStyles } from "@material-ui/core"

import { BorderColor } from "@material-ui/icons"
import { useAuth } from "../Context/AuthContextProvider"


const useStyles = makeStyles((theme) => ({


}))

const Login = () => {
    const classes = useStyles()

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }
    console.log(currentUser.email)
    return (
        <Grid container justify="center" alignItems="center" style={{ color: "black", height: '500px' }}>
            <Card  >
                <Card.Body  >
                    <h2 className="text-center mb-4" style={{ color: "Black", fontSize: '40px' }} >Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Grid style={{ width: '100vw', }} container justify="center" align="center">
                        <Form onSubmit={handleSubmit} >
                            <Form.Group style={{ fontSize: '25px' }} id="email">
                                <Form.Label style={{ fontSize: '25px' }} >Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group >
                            <Form.Group style={{ fontSize: '25px' }} id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} type="submit" style={{ color: "white", backgroundColor: "gray", BorderColor: "gray" }} >
                                Log In
                            </Button>
                        </Form>
                    </Grid>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </Card>
        </Grid>
    )
}
export default Login;