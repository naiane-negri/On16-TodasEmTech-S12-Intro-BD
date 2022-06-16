const DataModel = require('../models/modelSchema')

const createData = async (request, response) => {
    const {
       _id, index, guid, isActive,
        balance, tags
    } = request.body

    if (!_id || !balance) {
        return response
            .status(400)
            .json({ message: "O id e preço não pode estar vazio" })
    }

    try {
        const newData = new DataModel({
            _id: _id,
            index: index,
            guid: guid,
            isActive: isActive,
            balance: balance,
            tags: tags,
        })
        const savedData = await newData.save()
        response.status(201).json(savedData)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findAllData = async(request, response) => {
    try {
        const allDatas = await DataModel.find()
        response.status(200).json(allDatas)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findById = async (request, response) =>  {
    try {
        const findData = await DataModel.findById(Number(request.params.id))
        response.status(200).json(findData)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    createData, findAllData, findById
}