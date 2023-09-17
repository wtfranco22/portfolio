import { useState } from 'react';
import sendEmail from '../../utils/emailUtils';
import styles from './Form.module.css';
import { IoCloseSharp } from 'react-icons/io5';
import Loading from '../loading/Loading';
// eslint-disable-next-line react/prop-types
const Form = ({ close }) => {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    sendEmail(userData)
      .then(() => {
        alert('Enviado con exito!')
        setUserData({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch(() => { alert('Ups! Algo fallo, reintentalo') })
      .finally(() => { setLoading(false) })
  };
  const handleClick = () => {
    close();
  }
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  return (
    <div className={styles.modalBackground}>
      {loading && <Loading />}
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={handleClick}>
          <IoCloseSharp className={styles.icon} />
        </button>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3 className={styles.title}>Enviame un correo</h3>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required value={userData.name} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={userData.email} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" >Mensaje:</label>
            <textarea id="message" name="message" rows="6" required value={userData.message} onChange={handleChange} />
          </div>
          <button className={styles.contactButton} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
