import { Card, Container, Row, Col, Figure, Form } from "react-bootstrap";

export default function TabIdentificacao( { data } ){
    return (
        <Container>
            <Row>
                <Col xs={8} style={{display:'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <div>
                        <Card.Title>Bairro: {data.bairro}</Card.Title>
                        <Card.Text>
                            {data.cidade} - {data.endereco}
                        </Card.Text>
                    </div>
                    
                    <Form style={{width: '100%'}} >
                        <div>
                            <Form.Check
                                inline
                                label="Aceitou"
                                name="group1"
                                type='radio'
                                id={`aceitou-${data.id}`}
                            />
                            <Form.Check
                                inline
                                label="Recusou"
                                name="group1"
                                type='radio'
                                id={`recusou-${data.id}`}
                            />
                        </div>
                    </Form>
                </Col>
                <Col xs={4} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Figure style={{margin: 0}}>
                        <Figure.Image
                            width={150}
                            height={150}
                            alt="Imagem imovel"
                            src={data.img}
                        />
                    </Figure>
                </Col>
            </Row>
        </Container>
    );
}