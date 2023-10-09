import Card from "@/components/card";
import styles from "../styles/styles.module.scss";
import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
    const projects = [
        {
            name: "Blizzard",
            link: "https://blizzard-brchallenges.vercel.app/",
            preview: "/assets/blizzard-preview.webp",
            description:
                "Esse projeto é uma landing page da empresa Blizzard, ela é composta por um menu de navegação, um banner hero com as informações dos principais jogos da empresa(Diablo, HearthStone e World of Warcraft), a listagem dos jogos exclusivos e um rodapé com informações do download do app battle.net.",
        },
        {
            name: "Paquetá",
            link: "https://desafio-3-brchallenges.vercel.app/",
            preview: "/assets/paqueta-preview.webp",
            description:
                "Neste projeto, realizei o redesign do site da renomada marca de calçados Paquetá Calçados. O objetivo foi expandir sua presença online e proporcionar aos clientes uma experiência digital atraente e funcional.",
        },
        {
            name: "Pomolist",
            link: "https://pomo-list-front-end.vercel.app/",
            preview: "/assets/pomolist-preview.webp",
            description:
                "O PomoList é uma aplicação web minimalista projetada para ajudar os usuários a aumentar sua produtividade. Os usuários podem criar listas de tarefas, e acompanhar seu progresso de forma simples e eficiente.",
        },
    ];
    return (
        <main className={styles.Main}>
            <section className={styles.content}>
                <header>
                    <div className={styles.links}>
                        <a href="https://wa.me/5573988599299" target="_blank">
                            Whatsapp
                        </a>{" "}
                        /{" "}
                        <a
                            href="https://www.instagram.com/clinton_rocha98/"
                            target="_blank"
                        >
                            Instagram
                        </a>{" "}
                        /{" "}
                        <a
                            href="https://www.linkedin.com/in/clintonrocha/"
                            target="_blank"
                        >
                            Linkedin
                        </a>
                    </div>

                    <div className={styles.icons}>
                        <a href="https://wa.me/5573988599299" target="_blank">
                            <BsWhatsapp />
                        </a>

                        <a
                            href="https://www.instagram.com/clinton_rocha98/"
                            target="_blank"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/clintonrocha/"
                            target="_blank"
                        >
                            <BsLinkedin />
                        </a>
                    </div>
                </header>

                <section className={styles.perfil}>
                    <img src="./perfil.webp" />
                    <p>Olá, eu sou Clinton Rocha👋🏽</p>
                    <h1>
                        Transformando ideias em realidade digital: Produtos,
                        Marcas e Experiências.
                    </h1>
                </section>

                <section className={styles.info}>
                    <div className={styles.cardInfo}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="44"
                            fill="none"
                            viewBox="0 0 44 44"
                        >
                            <path
                                fill="#9A9A9A"
                                d="M27.658 17.173l-9.71 5.792v-5.792h9.71zM7.719 13.323a.761.761 0 100-1.523.761.761 0 000 1.523zM5.548 13.323a.761.761 0 100-1.523.761.761 0 000 1.523zM3.378 13.323a.761.761 0 100-1.523.761.761 0 000 1.523z"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M31.462 14.655v17.41c0 .82-.669 1.49-1.49 1.49H2.49c-.82 0-1.489-.67-1.489-1.49v-20.13c0-.82.668-1.49 1.49-1.49h27.482c.821 0 1.49.67 1.49 1.49v2.72zM1 14.655h30.462"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M27.658 17.173h-9.71v5.792h9.71v-5.792zM15.32 17.173H4.804v13.822h10.518V17.172z"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.803 30.994l5.26-6.908 5.258-6.913"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.803 17.173l5.26 6.913 5.258 6.909M17.948 22.965l9.71-5.792M17.948 26.163h9.71M17.948 29.032h4.853"
                            ></path>
                        </svg>
                        <h2>UX & UI</h2>
                        <p>
                            Projetar interfaces intuitivas, eficientes e
                            agradáveis de usar.
                        </p>
                    </div>

                    <div className={styles.cardInfo}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="44"
                            fill="none"
                            viewBox="0 0 44 44"
                        >
                            <path
                                fill="#9A9A9A"
                                d="M10.52 29.615a5.102 5.102 0 00-4.4-2.538 5.102 5.102 0 00-4.4 2.538 5.17 5.17 0 01-.678-2.538c0-1.1.339-2.116.931-2.962C2.904 22.846 4.385 22 6.12 22c1.735 0 3.216.846 4.147 2.115.592.847.93 1.862.93 2.962a5.17 5.17 0 01-.677 2.538zM28.965 30.884c.931 0 1.693.762 1.693 1.693 0 .465-.212.888-.508 1.184-.296.297-.72.508-1.185.508H21.35c-.93 0-1.692-.761-1.692-1.692 0-.466.211-.889.507-1.185.297-.296.72-.508 1.185-.508h7.615z"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                d="M33.196 9.308v25.384a2.546 2.546 0 01-2.538 2.539h-11a2.546 2.546 0 01-2.539-2.539V9.308a2.546 2.546 0 012.539-2.539h11a2.546 2.546 0 012.538 2.539zm0 0v.127"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                d="M22.196 23.27h5.923a2.546 2.546 0 012.539 2.538v.846a2.546 2.546 0 01-2.539 2.538h-5.923a2.546 2.546 0 01-2.538-2.538v-.846c0-1.396 1.1-2.539 2.538-2.539z"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M11.154 32.788c1.438 0 2.58-1.142 2.58-2.538v-9.52a2.546 2.546 0 012.539-2.538h.846M10.223 24.115a5.13 5.13 0 00.93-2.961c0-2.793-2.284-5.077-5.076-5.077S1 18.36 1 21.154c0 1.1.338 2.115.93 2.961"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M10.52 29.615a5.17 5.17 0 00.676-2.538c0-1.1-.338-2.116-.93-2.962C9.335 22.846 7.854 22 6.119 22c-1.734 0-3.215.846-4.146 2.115a5.129 5.129 0 00-.93 2.962c0 .93.253 1.777.676 2.538"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M1.72 29.615a5.102 5.102 0 014.4-2.538 5.102 5.102 0 014.4 2.538c.423.762.676 1.608.676 2.539 0 .211 0 .423-.042.634-.17 1.27-.761 2.37-1.692 3.174a4.97 4.97 0 01-3.343 1.269 4.97 4.97 0 01-3.342-1.27 5.056 5.056 0 01-1.735-3.807c0-.93.212-1.777.677-2.539z"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M2.735 35.962C2.946 34.312 4.343 33 6.035 33h.084c1.693 0 3.131 1.312 3.3 2.962M6.077 33c-.931 0-1.65-.761-1.65-1.692 0-.931.761-1.692 1.692-1.692.93 0 1.692.761 1.692 1.692 0 .93-.719 1.692-1.65 1.692h-.084z"
                            ></path>
                        </svg>
                        <h2>Web & Mobile App</h2>
                        <p>
                            Transformando ideias em experiências excepcionais de
                            aplicativos móveis e da Web.
                        </p>
                    </div>

                    <div className={styles.cardInfo}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="44"
                            fill="none"
                            viewBox="0 0 44 44"
                        >
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M32.688 21.577v10.746M3.75 32.323V15.315a2.257 2.257 0 012.242-2.242h23.185"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M15.13 32.323c0 .846.678 1.227 1.524 1.227h3.088c.846 0 1.523-.38 1.523-1.227h14.047v1.48c0 .89-.72 1.608-1.608 1.608H2.608c-.889 0-1.608-.719-1.608-1.607v-1.481h14.13zM10.604 21.577h2.539M7.643 19.039l1.269 1.269-1.27 1.269M7.643 26.738h2.538M11.873 26.738h3.808M7.643 24.2h4.442M13.989 24.2h2.538M18.22 24.2h3.384"
                            ></path>
                            <path
                                fill="#9A9A9A"
                                d="M37.766 15.23l-2.496 1.566-2.581 1.608-2.539-1.608-2.538-1.565 2.538-1.608 2.539 1.608h.042l2.496-1.608 2.539 1.608z"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M35.27 16.796l2.496 1.608-5.077 3.173-5.077-3.173 2.538-1.608M32.688 15.23v-.042l.043.043"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M30.15 13.623l-2.538 1.608 2.538 1.565 2.539 1.608 2.58-1.608 2.497-1.565-2.539-1.608"
                            ></path>
                            <path
                                stroke="#9A9A9A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M30.15 13.623l-2.538-1.565 5.077-3.173 5.077 3.173-2.539 1.565-2.496 1.608h-.042l-2.539-1.608z"
                            ></path>
                        </svg>
                        <h2>Desenvolvimento</h2>
                        <p>
                            Dando vida à sua visão com as últimas tendências em
                            tecnologia e design.
                        </p>
                    </div>
                </section>

                <section className={styles.projects}>
                    <h1>Projetos</h1>
                    <p>
                        Crio interfaces interativas e responsivas, transformando
                        ideias em experiências digitais incríveis. Tenho
                        habilidades em desenvolvimento, garantindo uma estética
                        atraente e uma experiência de usuário intuitiva.
                        Trabalho de forma colaborativa, buscando sempre entregar
                        resultados de qualidade.
                    </p>
                    <div className={styles.containerCards}>
                        {projects.map((project) => (
                            <Card
                                name={project.name}
                                link={project.link}
                                src={project.preview}
                                description={project.description}
                                key={project.name}
                            />
                        ))}
                    </div>
                </section>

                <section className={styles.contato}>
                    <h1>Conte-me sobre seu próximo projeto</h1>
                    <a href="mailto: clintongoncalvesrocha@gmail.com">
                        Entrar em contato
                        <HiOutlineMail />
                    </a>
                </section>

                <footer>
                    <p>© 2023 All rights reserved.</p>
                    <div className={styles.links}>
                        <a href="https://wa.me/5573988599299" target="_blank">
                            Whatsapp
                        </a>{" "}
                        /{" "}
                        <a
                            href="https://www.instagram.com/clinton_rocha98/"
                            target="_blank"
                        >
                            Instagram
                        </a>{" "}
                        /{" "}
                        <a
                            href="https://www.linkedin.com/in/clintonrocha/"
                            target="_blank"
                        >
                            Linkedin
                        </a>
                    </div>

                    <div className={styles.icons}>
                        <a href="https://wa.me/5573988599299" target="_blank">
                            <BsWhatsapp />
                        </a>

                        <a
                            href="https://www.instagram.com/clinton_rocha98/"
                            target="_blank"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/clintonrocha/"
                            target="_blank"
                        >
                            <BsLinkedin />
                        </a>
                    </div>
                </footer>
            </section>
        </main>
    );
}
