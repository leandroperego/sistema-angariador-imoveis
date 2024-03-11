import { Outlet } from 'react-router-dom';
import AsideMenu from '../Aside/AsideMenu';
import styles from './Layout.module.css';

export default function Layout(){

    return (
        <section className={styles.layout}>
            <aside className={styles.aside}>
                <AsideMenu />
            </aside>
            <main className={styles.main}>
                <Outlet />
            </main>
        </section>
    );
}