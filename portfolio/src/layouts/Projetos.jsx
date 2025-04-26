import styles from './Projetos.module.css';
import ContainerProjetos from '../components/ContainerProjetos.jsx';

import { objImagens } from '../assets/OrganizarImages.js';

export default function Projetos() {
    return (
        <section id='projetos' className={styles.sectionProjetos}>
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

                    descriptionProject='O Project Costs é uma aplicação web para cadastro de projetos e controle de orçamentos, permitindo acompanhar serviços e custos associados. Desenvolvido com React.js no front-end e Spring Boot no back-end, o sistema garante uma gestão eficiente e segura dos dados.'

                    tecnologias={['ReactJS', 'React-Router-Dom', 'CSS-Modules', 'Spring Boot', 'Maven', 'JPA', 'PostgreSQL']}
                />

                <ContainerProjetos
                    imgProject={objImagens.fundoDesenvolvimento}

                    descriptionImg='Página em desenvolvimento'

                    tittleProject='Sistema de Reservas de Hotel'

                    linkSite='https://github.com/PauloRobertt/Sistema-de-Reservas-de-Hotel'
                    linkGitHub='https://github.com/PauloRobertt/Sistema-de-Reservas-de-Hotel'

                    descriptionProject='Este projeto consiste no desenvolvimento de um sistema web para reservas de hotéis, permitindo que usuários consultem quartos disponíveis, datas e categorias de hospedagem. O sistema é flexível e pode ser adaptado tanto para hotéis de pequeno porte quanto para redes maiores.'

                    tecnologias={['NodeJS', 'Express.js', 'Sequelize', 'ReactJS', 'Styled-Components', 'React-Router-Dom', 'PostgreSQL']}
                />

                <ContainerProjetos
                    imgProject={objImagens.projectAPi}

                    descriptionImg='API'

                    tittleProject='API Carros'

                    linkSite='https://github.com/gefilho/api_carros'
                    linkGitHub='https://github.com/gefilho/api_carros'

                    descriptionProject='API desenvolvida com Spring Boot para gerenciar carros e usuários. Implementação de autenticação com JWT, criptografia de senhas, QR Codes, documentação Swagger e geração de PDFs com informações dos carros cadastrados. Fui responsável pela segurança, autenticação, autorização, geração de QR Codes e PDFs.'

                    tecnologias={['Spring Boot', 'Spring Security', 'JWT', 'BCrypt', 'Swagger', 'QRCode', 'iText', 'PostgreSQL']}
                />

                <ContainerProjetos
                    imgProject={objImagens.projectControleEstoque}

                    descriptionImg='banner controle de Estoque'

                    tittleProject='Controle de Estoque'

                    linkSite='https://github.com/PauloRobertt/CONTROLE_DE_ESTOQUE'
                    linkGitHub='https://github.com/PauloRobertt/CONTROLE_DE_ESTOQUE'

                    descriptionProject='Sistema desenvolvido em Java para o controle de estoque de uma empresa fictícia. A aplicação permite realizar vendas, visualizar itens disponíveis e gerenciar quantidades. Foi implementada utilizando princípios da programação orientada a objetos (POO), como herança, interfaces, polimorfismo, abstração e tratamento de exceções. Os dados são armazenados e lidos a partir de arquivos .txt.'

                    tecnologias={['Java', 'POO', 'Manipulação de Arquivos .txt']}
                />

                <ContainerProjetos
                    imgProject={objImagens.projectRestaurante}

                    descriptionImg='Banner do projeto Restaurante'

                    tittleProject='Projeto Restaurante'

                    linkSite='https://projeto-mini-mundo.vercel.app'
                    linkGitHub='https://github.com/PauloRobertt/PROJETO-RESTAURANT'

                    descriptionProject='Este projeto é um site para um restaurante, apresentando um cardápio completo com todos os pratos. Os clientes podem buscar qualquer prato servido pelo restaurante através do nome, categoria ou descrição. O site foi desenvolvido utilizando React.js, com estilização em CSS, e está hospedado na Vercel.​'

                    tecnologias={['HTML5', 'CSS3', 'JavaScript', 'ReactJS']}
                />

                <ContainerProjetos
                    imgProject={objImagens.projectAgencia}

                    descriptionImg='Banner do projeto Agencia de Design'

                    tittleProject='Agência de Design'

                    linkSite='https://projeto-agencia-de-design.vercel.app'
                    linkGitHub='https://github.com/PauloRobertt/PROJETO-AGENCIA-DE-DESIGN'

                    descriptionProject='Este projeto consiste na criação de uma página web moderna e interativa utilizando React JS. A página é composta por múltiplos componentes que oferecem uma experiência rica ao usuário. Uma funcionalidade destacada é a capacidade de alterar dinamicamente o tema de todos os componentes através de um botão intuitivo.'

                    tecnologias={['HTML5', 'CSS3', 'JavaScript', 'ReactJS']}
                />
            </div>
        </section>
    );
}
