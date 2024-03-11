import styled from "styled-components";
import ListaCards from "../../../components/Cards/ListaCards";

export default function Listagem() {

    return (
        <Pagina>
            <Header>
                <h2>Listagem Contatos</h2>
            </Header>
            <SectionListagem >
                <ListaCards />
            </SectionListagem>
        </Pagina>
    )
}

const Pagina = styled.section`
    min-height: 100vh;
    width: 100%;
    height: 100%;
`;

const SectionListagem = styled.section`
    padding: 40px;
`;

const Header = styled.header`
    border-bottom: 1px solid lightgray;
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;



