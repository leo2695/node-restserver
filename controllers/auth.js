const {
    response
} = require("express");
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const {
    generarJWT
} = require("../helpers/generarJWT");



const loginController = async (req, res = response) => {

    const {
        correo,
        password
    } = req.body;

    try {

        //verificar si el email existe
        const usuario = await Usuario.findOne({
            correo
        });

        if (!usuario) {
            return res.status(400).json({
                messagge: 'Usuario no es correcto - correo'
            });
        }

        //verificar si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                messagge: 'Usuario no es correcto - estado'
            });
        }

        //verificar el password
        const passwordValido = bcryptjs.compareSync(password, usuario.password);

        if (!passwordValido) {
            return res.status(400).json({
                messagge: 'Usuario no es correcto - password'
            });
        }

        //generar JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

module.exports = {
    loginController
}