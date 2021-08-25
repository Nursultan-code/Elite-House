import { Grid, makeStyles } from "@material-ui/core"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../Context/AuthContextProvider"


const useStyles = makeStyles((theme) => ({
    size: {
        width: '500px',
        height: '350px',

    },
    grid: {
        height: '400px'
    },
    color: {
        color: 'black',
        textDecoration: 'none'
    },
    btn: {
        height: '60px',
        fontSize: '20px',
        width: '100px',
        borderRadius: '50%',
        border: 0
    }
}))

const Signup = () => {
    const classes = useStyles()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <Grid className={classes.grid} style={{ marginTop: "150apx" }} >
            <Grid container alignItems="center" align="center" justify="center">
                <Card className={classes.size}>
                    <Card.Body>
                        <h2 className="text-center mb-4" style={{ color: "black", fontSize: '40px' }}>Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group style={{ fontSize: '25px' }} id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group style={{ fontSize: '25px' }} id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group style={{ fontSize: '25px' }} id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required />
                            </Form.Group>
                            <Button disabled={loading} className={classes.btn} type="submit" style={{ color: "black", backgroundColor: "gray" }} >
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link className={classes.color} to="/login">Log In</Link>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Signup;