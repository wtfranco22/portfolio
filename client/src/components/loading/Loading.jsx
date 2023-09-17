import styles from './Loading.module.css';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className={styles.container}>
            <FaSpinner className={styles.icon} />
            <p className={styles.text}>Enviando...</p>
        </div>
    );
};

export default Loading;
