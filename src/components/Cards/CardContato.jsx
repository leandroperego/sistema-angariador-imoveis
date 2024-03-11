import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import TabIdentificacao from './NavCard/TabIdentificacao';
import { useState } from 'react';

function CardContato( { dados } ) {

      const [cardBody, setCardBody] = useState(<TabIdentificacao data={dados} />);

    function handleTabsClick(eventKey){
        switch (eventKey) {
            case 'identificacao':
                setCardBody(<TabIdentificacao data={dados} />);
                break;
            case 'dadosProprietario':
                setCardBody(<p>Dados proprietário</p>);
                break;
            case 'anotacoes':
                setCardBody(<p>anotacoes</p>);
                break;
        }
    
    }

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{textAlign: 'right', color: dados.comercializacao === 'Venda' ? 'red' : 'green' }}>{dados.comercializacao.toUpperCase()}</Card.Title>
        <Nav variant="tabs" defaultActiveKey="identificacao" onSelect={handleTabsClick}>
          <Nav.Item>
            <Nav.Link eventKey='identificacao'>Identificação</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled eventKey='dadosProprietario'>Dados Proprietário</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled eventKey='anotacoes'>
              Anotações
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        {cardBody}      
      </Card.Body>
    </Card>
  );
}

export default CardContato;