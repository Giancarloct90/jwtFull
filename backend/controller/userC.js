const Users = require('../models/userM');
const jwt = require('jsonwebtoken');

const token = (req, res) => {
    const token = req.headers['x-access-token'];
    if (token === 'false') {
        res.status(401).json({
            ok: false,
            message: 'No token provided'
        })
    }
    let decoded = jwt.verify(token, 'mysecret');
    console.log(decoded);
    res.status(200).json({
        ok: true,
        message: 'recived'
    })
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
    console.log(req.body)
    res.json({
        message: 'recived'
    })
}

// Create a var
const userController = {
    signIn: signIn,
    signUp: signUp
}

module.exports = {
    userController
}