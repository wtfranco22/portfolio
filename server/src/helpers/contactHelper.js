const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (data) => {
    const saveContact = await prisma.user.create({
        data: data,
    });
    await prisma.$disconnect();
    if (saveContact) {
        return { save: true }
    }
    throw new Error(error.message);
}