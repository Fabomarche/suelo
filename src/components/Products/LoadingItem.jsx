import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'

const LoadingItem = () => {
    return (
        <Card style={{ width: '18rem' }} className="text-center shadow border-5 m-2" border="primary">
            <Container className="container flex d-flex">
                <Spinner animation="border" variant="primary"className="m-3" />
                <Card.Title>Cargando...</Card.Title>
            </Container>
            <Card.Body>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
    )
}

export default LoadingItem
