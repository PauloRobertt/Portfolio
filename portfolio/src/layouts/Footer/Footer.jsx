import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            Desenvolvido por <span className={styles.spanFooter}>Paulo Robert</span>
        </footer>
    )
}