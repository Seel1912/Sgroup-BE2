import bcrypt from 'bcryptjs'
const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8
            return v.toString(16)
        }
    )
}
let users = [
    {
        id: uuid(),
        name: 'dang huy hoang',
        age: 20,
    },
    {
        id: uuid(),
        name: 'nguyen dac dat',
        age: 20,
    },
    {
        id: uuid(),
        name: 'nguyen thanh hung',
        age: 20,
    },
]

export const getAllUser = async (req, res) => {
    console.log('router running')
    try {
        return res.status(200).json({ users })
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const userFinded = users.find((user) => user.id == id)
        if (!userFinded) {
            return res.status(404).json({ message: 'notfound' })
        }
        return res.status(200).json(userFinded)
    } catch (error) { }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).json({ message: 'something wrong' })
        }
        users = users.map((user) =>
            user.id == id ? { id: user.id, ...req.body } : user
        )
        return res.status(204).send()
    } catch (error) {
        console.log(error)
    }
    next()
}

export const addNewUser = async (req, res) => {
    try {
        console.log('post', req.body)
        const newUser = { id: uuid(), ...req.body }
        users.push(newUser)
        return res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
    }
    next()
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        users = users.filter((user) => user.id != id)
        return res.status(204).send()
    } catch (error) {
        console.log(error)
    }
}
