const { Car, User } = require('./../../models')

const index = async (req, res) => {
    const cars = await Car.findAll({
        include: ['User']
    })

    if (cars.length <= 0) {
        return res.status(403).json({
            message: 'Sem veiculos cadastrados'
        })
    }

    res.json(cars)
}

//DEFININDO METODO STORE
const store = async (req, res) => {

    //PEGANDO DADOS DO FRONT
    const { type, color, license_plate, user_id } = req.body

    //CRIANDO VARIAVEL COM OS DADOS DO CARRO
    const data = {
        type: type,
        color: color,
        licensePlate: license_plate,
        UserId: user_id
    }

    //CONSULTANDO NO BANCO SE EXISTE O USUÁRIO INFORMADO
    const user = await User.findOne({
        where: {
            id: user_id
        }
    });

    //SE NÃO HOUVER, MANDA MENSAGEM DE ERRO
    if (!user) {
        return res.status(404).json({
            message: 'Usuãrio não encontrado'
        })
    }

    //SE EXISTIR USUÁRIO, CADASTRA O CARRO
    const car = await Car.create({
        type: type,
        color: color,
        licensePlate: license_plate,
        UserId: user_id
    })

    //RETORNO O CARRO CADASTRADO
    res.json(car)
}

module.exports = {
    store,
    index
}