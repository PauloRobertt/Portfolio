import styles from './Menu.module.css';

import { IoMdClose } from "react-icons/io";

export default function Menu({ toggleFunction, statusMenu }) {
    return (
        <div className={`${statusMenu ? styles.statusAtivo : styles.statusInativo} ${styles.menu}`}>
            <IoMdClose
                className={styles.menuIcon}
                onClick={toggleFunction}
                color='var(--textColor)'
            />
            <nav className={styles.mobile}>
                <ul className={styles.mobileLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutme">Sobre</a></li>
                    <li><a href="#conhecimento">Conhecimentos</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}
