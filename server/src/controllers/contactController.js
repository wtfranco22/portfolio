const contactHelper = require("../helpers/contactHelper");
const contactNotificationEmail = require("../utils/emailUtils");
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

module.exports = async (data) => {
    if (
        typeof data.name !== 'string' ||
        !isNaN(data.name) ||
        !regexEmail.test(data.email) ||
        !isNaN(data.email) ||
        typeof data.message !== 'string'
    ) throw new Error('invalid data');
    const save = await contactHelper(data);
    if (!save.save) {
        throw new Error("Error saving the message")
    } else {
        await contactNotificationEmail(data)
    }
    return save;
}