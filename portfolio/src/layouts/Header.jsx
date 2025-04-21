import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <span className={styles.spanHeader}>&lt;/&gt; Paulo Robert</span>
            <nav>
                <ul className={styles.links}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutme">Sobre</a></li>
                    <li><a href="#conhecimento">Conhecimentos</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}
