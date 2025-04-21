import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <span>&lt;PR/&gt;</span>
            <nav>
                <div className={styles.mobileMenu}>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                
                <ul className={styles.links}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#conhecimento">Conhecimentos</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}
