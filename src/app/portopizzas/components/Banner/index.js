import { Title } from "../Title";
import styles from "./styles.module.scss";

const Banner = () => {
    return (
        <header className={styles.header}>
            <div className={styles.containerText}>
                <img src="../assets/portopizza/banner/logo.png" alt="teste " />
                <Title text={'Porto Pizzas'} subText={'19h - 00h'}/>
            </div>
        </header>
    );
};
export default Banner;
