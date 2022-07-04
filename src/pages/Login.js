// 使用者登入

import { useState, useRef, useEffect } from "react";

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import TextField from "@mui/material/TextField"
import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link"
import { ThemeProvider } from "@mui/material/styles"

import { RiLoginBoxLine } from "react-icons/ri"

import { mainTheme } from "../themes";

const Login = () => {

    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        setErrMsg("")
    }, [email, pwd])

    return (
        <ThemeProvider theme={mainTheme}>
            <Container component="div" maxWidth="lg">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom: 8,
                        borderRadius: 5
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <RiLoginBoxLine />
                    </Avatar>
                    <Typography variant='h4'>
                        登入
                    </Typography>
                    <Box sx={{ width: "45%" }}>
                        <form>
                            <TextField
                                inputRef={emailRef}
                                margin="normal"
                                label="Email"
                                type="email"
                                required
                                fullWidth
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                label="password"
                                type="password"
                                required
                                fullWidth
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                            />
                            <Box
                                sx={{ marginTop: 3 }}
                            >
                                <Button
                                    fullWidth
                                    variant="contained"
                                >
                                    送出
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Login;
