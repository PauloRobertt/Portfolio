import styles from './AboutMe.module.css';

import { HiDownload } from "react-icons/hi";

export default function AboutMe() {
    return (
        <section id='aboutme' className={styles.aboutMe}>
            <div className={styles.textAboutme}>
                <div>
                    <h2>Sobre Mim</h2>
                    <hr />
                </div>
                <p>
                    Formado em Análise e Desenvolvimento de Sistemas, com foco  em desenvolvimento web e tecnologia. Tenho experiência em projetos que exigem  planejamento, organização e pensamento lógico. Além disso, possuo conhecimentos  hem informática e no pacote Office (Word, Excel, PowerPoint). Sou comprometido,  adaptável e sempre em busca de aprendizado contínuo.
                </p>
                <button className={styles.buttonCurriculo}>
                    <HiDownload size={24} color={"#CCD6F6"} /> Baixar Currículo
                </button>
            </div>
            <div className={styles.imgAboutme}>
                <img src="" alt="" />
            </div>
        </section>
    )
}
