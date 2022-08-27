// import User from "./../../models/user";
const { User } = require('./../../models')

const index = async (req, res) => {
    const users = await User.findAll({})

    res.json(users)
}

const show = async (req, res) => {
    const { id } = req.params

    const user = await User.findOne({
        where: {
            id: id
        },
        include: ['Cars']
    })

    if (!user) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        })
    }

    return res.json(user)
}

const store = async (req, res) => {
    const { name, document } = req.body

    const user = await User.create({
        name, document
    });

    // SE JÁ, NÃO CADASTRA

    console.log(`Usuário criado: ${user.id}`);

    res.json({
        message: "Create successfully"
    })
}

module.exports = {
    store,
    index,
    show
}