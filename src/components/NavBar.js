// 導覽列

import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

import { FaHotjar } from "react-icons/fa"
import { MdLeaderboard } from "react-icons/md"
import { BiMoviePlay } from "react-icons/bi"

import nav_logo from "../asset/images/popcorn.png"

const NavItem1 = ({ item = "" }) => {
    return (
        <Nav>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">分類</Nav.Link>
            <NavDropdown title="電影" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">最近熱門</NavDropdown.Item>
                <NavDropdown.Item href="#action4">排行榜</NavDropdown.Item>
            </NavDropdown>
            {item}
        </Nav>
    )
}


const NotLogin = () => {
    return (
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <NavItem1 />
            <Nav>
                <Nav.Link href='#'>Login</Nav.Link>
            </Nav>

        </Nav>

    )
}

const NavBar = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (
        <Navbar bg="light" expand="sm" sticky='top'>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={nav_logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="prpcorn" />
                    {' '}
                    Imovies
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">分類</Nav.Link>
                        <NavDropdown title="電影" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <FaHotjar color='#ff6768' />
                                {" "} 最近熱門
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <MdLeaderboard color='#96ceb4' />
                                {" "} 排行榜
                            </NavDropdown.Item>
                        </NavDropdown>
                        {
                            isLogin && <Nav.Link href='#usermovies'>使用者電影</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {isLogin ?
                            <Nav.Link href="#deets" onClick={() => setIsLogin(false)}>Logout</Nav.Link>
                            :
                            <Nav.Link href="#deets" onClick={() => setIsLogin(true)}>Login</Nav.Link>
                        }


                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar