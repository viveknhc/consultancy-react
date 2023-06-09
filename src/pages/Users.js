import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Users() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('user-data.json')
            .then((response => {
                setData(response.data);
            }
            ))
    })
    return (

        <div>

            {data.map((item) => {
                return (
                    <div>
                        <Container className='mt-5 mx-auto'>
                            <Row>

                                <Col className='col-md-4'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>
                                            <Link to={'/details/${item.id}'}>{item.name}</Link> </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{item.phone}</Card.Subtitle>
                                            <Card.Text>
                                                {item.placeaddress}
                                            </Card.Text>
                                            <Card.Link href="#"><Link to="/details">More</Link></Card.Link>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                )
            })}
        </div>


    )
}
