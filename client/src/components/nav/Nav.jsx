import { useState } from "react"
import styles from "./Nav.module.css"
import { Link } from "react-scroll"
const Nav = () => {
    const [menu, setMenu] = useState(false);
    const handleClick = () => { setMenu(!menu) };
    return (
        <nav className={`${styles.container} ${menu ? styles.open : ''}`}>
            <Link to="https://www.linkedin.com/in/wtfranco22" target="_blank">
                <img className={styles.img} src="/logo.png" alt="logo-wtfranco22" />
            </Link>
            <div className={styles.mobileMenu} onClick={handleClick}>
                <div className={`${styles.bar} ${menu ? styles.open : ''}`} />
                <div className={`${styles.bar} ${menu ? styles.open : ''}`} />
                <div className={`${styles.bar} ${menu ? styles.open : ''}`} />
            </div>
            <ul className={`${styles.ul} ${menu ? styles.show : ''}`}>
                <li className={styles.li}>
                    <Link
                        to="profile"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                        className={styles.link}
                        onClick={handleClick}
                        >
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
                        className={styles.link}
                        onClick={handleClick}
                        >
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
                        className={styles.link}
                        onClick={handleClick}
                        >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;