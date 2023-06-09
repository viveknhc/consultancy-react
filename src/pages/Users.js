import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Users() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/user-data.json')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);
    return (
        <div>
            <ul>
               
                    <Container className='mt-5 mx-auto'>
                        <Row>

                        {data.map(user => (
                            <Col className='col-md-4'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <Link to={`/details/${user.id}`}>{user.name}</Link>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{user.phone}</Card.Subtitle>
                                        <Card.Text>
                                            {user.placeaddress}
                                        </Card.Text>
                                        <Card.Link href="#"><Link to={`/details/${user.id}`}>More</Link>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
))}

                        </Row>
                    </Container>
                
            </ul>
        </div>


    )
}
