import styles from './Header.module.css';
import Logotipo from '../Assets/Logo.png';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logotipo} />
        </header>
    )
}