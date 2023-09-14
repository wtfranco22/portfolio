import styles from "./Nav.module.css"
import { Link } from "react-scroll"
const Nav = () => {
    return (
        <nav className={styles.container}>
                <Link to="https://www.linkedin.com/in/wtfranco22" target="_blank">
                    <img className={styles.img} src="/logo.png" alt="logo-wtfranco22" />
                </Link>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link
                        to="profile"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                        className={styles.link}>
                        Inicio
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={700}
                        className={styles.link}>
                        Proyectos
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={700}
                        className={styles.link}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;