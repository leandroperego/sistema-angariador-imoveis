import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav(){

    const itensNav = [
        {
            name: 'Home',
            link: 'home'
        },
        {
            name: 'Cadastro',
            link: 'cadastro'
        },
        {
            name: 'Listagem de contatos',
            link: 'listagem-de-contatos',
        },
    ]

    return (
        <nav>
            <ul className="ulNav">
                {
                    itensNav.map((item, index) => 
                        <Link className={styles.itensMenu} to={`/${item.link}`} key={index}>
                            <li>
                                {item.name}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </nav>
    );
}