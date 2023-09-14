import styles from './Form.module.css';
import { IoCloseSharp } from 'react-icons/io5';
// eslint-disable-next-line react/prop-types
const Form = ({ close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    close();
    // Aquí puedes agregar la lógica para enviar el correo electrónico o realizar alguna acción con los datos del formulario.
  };
  const handleClick = () => {
    close();
  }
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={handleClick}>
          <IoCloseSharp className={styles.icon} />
        </button>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3 className={styles.title}>Enviame un correo</h3>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" >Mensaje:</label>
            <textarea id="message" name="message" rows="6" required />
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
