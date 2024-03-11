import styled from "styled-components";
import FormCadastro from "../../../components/Forms/FormCadastro";

export default function Cadastro(){
    return (
        <Pagina>
            <Header>
                <h2>Cadastro</h2>
            </Header>
            <Main>
                <FormCadastro />
            </Main>
        </Pagina>
    )
}

const Pagina = styled.section`
    min-height: 100vh;
    width: 100%;
    height: 100%;
`;

const Header = styled.header`
    border-bottom: 1px solid lightgray;
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Main = styled.section`
    padding: 40px;
`; 