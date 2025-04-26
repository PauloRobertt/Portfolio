import styles from './CardContato.module.css';

export default function CardContato({icon, text}) {

    function typeLink(type) {

        switch (type) {
            case 'E-Mail':
                return 'mailto:';
                break;
            case 'Telefone':
                return 'tel:+';
                break;
            case 'Linkedin':
                return 'https://www.linkedin.com/in/paulo-robert-lima-gomes-0b90b924a/'
                break;
            case 'GitHub':
                return 'https://github.com/PauloRobertt';
                break;
        }
    }

    return (
        <div className={styles.CardContato}>
            <a href={typeLink(text)}>
                <figure>
                    {icon}
                </figure>
                <p>{text}</p>
            </a>
        </div>
    )
}
