import { Link } from 'react-router-dom';
import styles from './Contact.module.css';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaLinkedin } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import { useState } from 'react';
import Form from '../form/Form';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const handleForm = () => {
        setShowForm(!showForm);
    };
    return (
        <section id="contact" className={styles.container}>
            <div className={styles.contactContent}>
                <div className={styles.contactText}>
                    <h2 className={styles.contactTitle}>¡Conectáte conmigo!</h2>
                    <p className={styles.contactDescription}>
                        Estoy emocionado de conectar con vos en mis redes sociales y voy a estar
                        disponible para cualquier consulta o colaboración.
                    </p>
                    <p className={styles.contactDescription}>
                        No dudes en seguirme y enviarme un mensaje en cualquiera de mis
                        perfiles de redes sociales. Estoy acá para ayudar.
                    </p>
                    <p className={styles.contactDescription}>
                        Por último, te dejo la posibilidad de enviarme un correo por este medio.
                    </p>
                </div>
                <div className={styles.socialLinks}>
                    <Link to="https://www.linkedin.com/in/wtfranco22" className={styles.socialLink}>
                        Linkedin: <FaLinkedin className={styles.icon} />
                    </Link>
                    <Link to="https://www.github.com/wtfranco22" className={styles.socialLink}>
                        Github: <TbBrandGithubFilled className={styles.icon} />
                    </Link>
                    <Link to="mailto:wtfranco22@gmail.com" className={styles.socialLink}>
                        Email: <SiGmail className={styles.icon} />
                    </Link>
                </div>
                <button className={styles.contactButton} onClick={handleForm}>Enviar email</button>
            </div>
            {showForm && <Form close={handleForm}/>}
        </section>
    );
};

export default Contact;
