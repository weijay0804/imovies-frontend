import React from 'react'

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import test1 from "../asset/images/test1.jpg"
import test2 from "../asset/images/test2.jpg"
import test3 from "../asset/images/test3.jpg"
import test5 from "../asset/images/test5.jpg"
import test_img from "../asset/images/test.jpg"

const Home = () => {
    const data = [
        { id: 1, data: "test1" },
        { id: 2, data: "test2" },
        { id: 3, data: "test3" },
        { id: 4, data: "test4" },
        { id: 5, data: "test5" },
        { id: 6, data: "test6" },
        { id: 7, data: "test7" },
        { id: 8, data: "test8" },
        { id: 9, data: "test9" }
    ]
    return (
        <Container maxWidth="xl">
            <Box sx={{ marginTop: "30px" }}>
                <Carousel fade>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={test1}
                            alt="First slide"
                            width='100%'
                            height="850px"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={test2}
                            alt="First slide"
                            width='100%'
                            height="850px"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={test3}
                            alt="First slide"
                            width='100%'
                            height="850px"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={test5}
                            alt="First slide"
                            width='100%'
                            height="850px"
                        />
                        <Carousel.Caption>
                            <h3>
                                <a href='https://www.themoviedb.org/movie/524434-eternals?language=zh-TW'>
                                    永恆族
                                </a>

                            </h3>
                            <p>this is a test inter.</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </Box>


            <h2>Movies</h2>
            <Box sx={{
                display: "inline-flex",
                flexDirection: "row",
                overflowX: "auto",
                width: "100%",
                marginTop: "10px",
                marginBottom: "25px",
                alignItems: "center",
            }}>

                {data.map(item => (
                    <Box sx={{ marginLeft: 5, marginBottom: 10, borderRadius: 30 }}>
                        <Card style={{ width: '10rem', borderRadius: 20 }}>
                            <Card.Img variant="top" src={test_img} />
                            <Card.Body>
                                <Card.Title>侏羅紀世界</Card.Title>
                                <Card.Text>
                                    2022-06-08
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Box>
                ))}
            </Box>

        </Container>



    )
}

export default Home