import styled from "styled-components";

export default function Home(){
    return (
        <Pagina>
            <h1>Angariação System 1.0</h1>
           <Imagem
                src="src\assets\images\cadastro-img.png"
                alt="logo sistema"
            />
        </Pagina>
    )
}

const Pagina = styled.section`
    min-height: 100vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Imagem = styled.img`
    width: 500px;
    height: 500px;
`