import styles from './Projetos.module.css';
import ContainerProjetos from '../components/ContainerProjetos.jsx';

import { objImagens } from '../assets/OrganizarImages.js';

export default function Projetos() {
    return (
        <section className={styles.sectionProjetos}>
            <div className={styles.tittleProjetos}>
                <h2>Projetos</h2>
                <h3>Confira meus projetos</h3>
            </div>
            <div className={styles.projetos}>
                <ContainerProjetos
                    imgProject={objImagens.projectCosts}

                    descriptionImg='Página Home do projeto costs'

                    tittleProject='Projeto Costs'

                    linkSite='https://github.com/PauloRobertt/Project_Costs'
                    linkGitHub='https://github.com/PauloRobertt/Project_Costs'

                    descriptionProject='Este projeto é uma aplicação full stack desenvolvida com React.js no front-end e Spring Boot no back-end. Utiliza o banco de dados relacional PostgreSQL e segue boas práticas de versionamento com Git Flow. O objetivo principal é gerenciar projetos e seus serviços associados, garantindo o controle de orçamento e custos utilizados.'

                    tecnologias={['ReactJS', 'Spring Boot', 'PostgreSQL']}
                />

                <ContainerProjetos
                    imgProject={objImagens.fundoDesenvolvimento}

                    descriptionImg='Página Home do projeto costs'

                    tittleProject='Projeto Costs'

                    linkSite='https://github.com/PauloRobertt/Project_Costs'
                    linkGitHub='https://github.com/PauloRobertt/Project_Costs'

                    descriptionProject='Este projeto é uma aplicação full stack desenvolvida com React.js no front-end e Spring Boot no back-end. Utiliza o banco de dados relacional PostgreSQL e segue boas práticas de versionamento com Git Flow. O objetivo principal é gerenciar projetos e seus serviços associados, garantindo o controle de orçamento e custos utilizados.'

                    tecnologias={['ReactJS', 'Spring Boot', 'PostgreSQL']}
                />

                <ContainerProjetos
                    imgProject={objImagens.projectRestaurante}

                    descriptionImg='Banner do projeto Restaurante'

                    tittleProject='Projeto Restaurante'

                    linkSite='https://projeto-mini-mundo.vercel.app'
                    linkGitHub='https://github.com/PauloRobertt/PROJETO-RESTAURANT'

                    descriptionProject='Este projeto consiste na criação de um site para um restaurante, com foco na exibição de um cardápio completo e organizado. O principal objetivo é permitir que os clientes encontrem facilmente qualquer prato oferecido pelo restaurante, por meio de filtros de busca por nome, categoria ou descrição.'

                    tecnologias={['HTML5', 'CSS3', 'ReactJS']}
                />

                <ContainerProjetos
                    imgProject={objImagens.projectAgencia}

                    descriptionImg='Banner do projeto Agencia de Design'

                    tittleProject='Projeto Agencia de Design'

                    linkSite='https://projeto-agencia-de-design.vercel.app'
                    linkGitHub='https://github.com/PauloRobertt/PROJETO-AGENCIA-DE-DESIGN'

                    descriptionProject='Este projeto tem como proposta o desenvolvimento de uma página composta por múltiplos componentes reutilizáveis. A principal funcionalidade é a presença de um botão capaz de alternar o tema da aplicação, afetando dinamicamente todos os componentes da interface. A implementação será feita utilizando React JS.'

                    tecnologias={['HTML5', 'CSS3', 'ReactJS']}
                />
            </div>
        </section>
    );
}
