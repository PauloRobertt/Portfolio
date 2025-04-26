import styles from './AboutMe.module.css';

import { objImagens } from '../assets/OrganizarImages.js';
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
                    Sou formado em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web e tecnologia. Tenho experiência em projetos que demandam planejamento estratégico, organização e raciocínio lógico. Além disso, possuo sólidos conhecimentos em informática e no pacote Office (Word, Excel e PowerPoint). Sou uma pessoa comprometida, adaptável e estou sempre em busca de evolução contínua, tanto pessoal quanto profissionalmente.
                </p>
                <button className={styles.buttonCurriculo}>
                    <HiDownload size={24} color={"#CCD6F6"} /> Baixar Currículo
                </button>
            </div>
            <div className={styles.imgAboutme}></div>
        </section>
    )
}
