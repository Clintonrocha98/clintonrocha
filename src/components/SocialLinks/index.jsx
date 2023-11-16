import styles from "./styles.module.scss";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <>
            <div className={styles.links}>
                <a href="https://github.com/Clintonrocha98" target="_blank">
                    Github
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
                <a href="https://github.com/Clintonrocha98" target="_blank">
                    <FaGithub />
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
        </>
    );
};
export default SocialLinks;
