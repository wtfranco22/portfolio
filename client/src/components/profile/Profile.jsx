import styles from './Profile.module.css'
const Profile = () => {
    return (
        <section id='profile' className={styles.container}>
            <div className={styles.profileContent}>
                <img src="/profile.png" alt="wtfranco22-foto-perfil" className={styles.profileImage} />
                <div className={styles.profileText}>
                    <p className={styles.greeting}>Hola! soy <b>Franco Rodríguez</b></p>
                    <h2 className={styles.title}>Desarrollador <br /> Full Stack | web & mobile</h2>
                    <p className={styles.description}>Trabajador independiente, desarrollando aplicaciones con nuevas tecnologías y mejorando en las que fueron aprendidas.</p>
                    <p className={styles.description}>
                        Siempre busco soluciones creativas y eficientes para los desafíos que enfrento, y estoy comprometido a entregar resultados de alta calidad en cada proyecto en el que me involucro.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Profile;