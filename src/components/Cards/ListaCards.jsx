import ListGroup from 'react-bootstrap/ListGroup';
import CardContato from './CardContato';
import { useState, useEffect } from "react";
import { getImoveis } from '../../infra/db/imoveisAngariacao';

export default function ListaCards(){

    const [listaImoveis, setListaImoveis] = useState([]);

    useEffect(() => {

        async function fetchData(){
            const imoveis = await getImoveis();
            setListaImoveis(imoveis);
        }
        fetchData();

    }, []);

    return (
        <ListGroup style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {
                listaImoveis?.map((dados, index) =>
                    <ListGroup.Item style={{border: 'none'}} key={index}>
                        <CardContato dados={dados} />
                    </ListGroup.Item>)
            }
            <ListGroup.Item></ListGroup.Item>
        </ListGroup>
    );
}