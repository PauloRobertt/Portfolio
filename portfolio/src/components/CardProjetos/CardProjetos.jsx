import styles from './CardProjetos.module.css';

import { MdMonitor } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";


export default function ContainerProjetos({ imgProject, descriptionImg, tittleProject, tecnologias, linkSite, linkGitHub, descriptionProject }) {

    return (
        <div className={styles.containerProject}>
            <figure className={styles.imgProject}>
                <img src={imgProject} alt={descriptionImg} />
            </figure>
            <div className={styles.conteudoProjeto}>
                <div className={styles.topoProjeto}>
                    <div className={styles.tittle}>
                        <MdMonitor className={styles.iconCardProject} color='var(--textColor)' />
                        <h4>{tittleProject}</h4>
                    </div>
                    <div className={styles.redirecionamento}>
                        <a href={linkSite} target="_blank" rel="noopener noreferrer">
                            <AiOutlineExport cursor='pointer' className={styles.iconCardProject} color='var(--textColor)' />
                        </a>
                        <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
                            <FaGithub cursor='pointer' className={styles.iconCardProject} color='var(--textColor)' />
                        </a>
                    </div>
                </div>
                <p>{descriptionProject}</p>
                <div className={styles.containerTecnologias}>
                    {tecnologias.map((value, index) => (
                        <div key={index} className={styles.tecnologia}>
                            {value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
