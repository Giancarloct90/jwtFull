const Users = require('../models/userM');
const jwt = require('jsonwebtoken');


const home = async (req, res) => {
    let usersDB = await Users.find();
    if (!usersDB) {
        return res.status(500).json({
            ok: false,
            message: 'Error Server'
        });
    }
    res.status(200).json({
        ok: true,
        message: 'success',
        users: usersDB
    });
}

// TO SAVE A NEW USER
const signUp = async (req, res) => {
    let {
        txtNombre,
        txtContrasenia,
        txtNumerCelular
    } = req.body;
    try {
        // Instanciamos el objeto e insertamos en la db
        let user = new Users();
        user.nombre = txtNombre;
        user.contrasenia = txtContrasenia;
        user.numero = txtNumerCelular;
        let userDB = await user.save();

        // Comprobamos si se inserto correctamente
        if (!userDB) {
            res.status(500).json({
                ok: false,
                message: 'Error DB'
            })
        }
        // id de user, 
        const token = jwt.sign({
            id: userDB._id
        }, 'mysecret', {
            expiresIn: 3600
        });
        res.status(200).json({
            ok: true,
            message: 'inserted success',
            user: userDB,
            token: token
        });

    } catch (e) {
        console.log('Error Triying to insert into db');
        res.status(400).json({
            ok: false,
            message: 'Error Trying to insert into db'
        })
    }
}

// To SignIn a users
const signIn = async (req, res) => {
    let {
        userName,
        userPassword
    } = req.body;
    try {

        let userDB = await Users.findOne({
            nombre: userName
        });
        if (!userDB) {
            console.log('el usuario no existe');
            return res.status(404).json({
                ok: false,
                message: 'El nombre de usuario no existe'
            });
        }
        console.log('Conatrasenia:', userDB.contrasenia, userPassword);
        if (!(userDB.contrasenia === userPassword)) {
            console.log('password incorrecto ');
            return res.status(404).json({
                ok: false,
                message: 'Password incorrecot'
            });
        }
        const token = jwt.sign({
            id: userDB._id
        }, 'mysecret', {
            expiresIn: 3600
        });
        return res.status(200).json({
            ok: true,
            message: 'signin correct',
            token: token
        })
    } catch (e) {
        res.status(500).json({
            ok: false,
            message: 'Server Error'
        });
    }
}

// Create a var
const userController = {
    signIn: signIn,
    signUp: signUp,
    home: home
}

module.exports = {
    userController
}