import Nav from '../../../components/Nav/Nav';
import styled from 'styled-components';

import { useContext } from 'react';
import { userContext } from '../../../App';
import { Link, useNavigate } from 'react-router-dom';
import { toDisconnect } from '../../../infra/users';

export default function AsideMenu(){

    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        toDisconnect();
        navigate('/');
        setUser({ 'id': '', 'nome': '', 'email': '' });
    }

    return (
        <>
            <Aside className="menuAside">
                <Header>
                    <Tittle>Olá {user.name ? user.name : ''}</Tittle>
                    <InfoLogin>
                        <Email>
                            {user.email ? user.email : ''}
                        </Email>
                        
                    </InfoLogin>
                </Header>
                <Section>
                    <Nav />
                </Section>
                <Footer>
                    <Access>
                        {user.id && 
                            <Link onClick={handleLogout}>
                                Logout
                            </Link> 
                        }
                    </Access>
                </Footer>
            </Aside>
        </>
    );
}

const Aside = styled.aside`
    border: 1px solid lightgray;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Section = styled.section`
    height: 100%;
`;

const Header = styled.header`
    border-bottom: 1px solid lightgray;
    height: 20%;
    display: flex;
    flex-direction: column;
`;

const Footer = styled.footer`
    border-top: 1px solid lightgray;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Tittle = styled.h3`
    font-size: 18px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoLogin = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Email = styled.span`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Access = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
`;