import axios from 'axios';

const sendEmail = async (userData) => {
    try {
        const { data } = await axios.post(import.meta.env.VITE_URL_BACKEND, userData)
        return data.save;
    } catch (error) {
        alert(error.message)
    }
}
export default sendEmail;