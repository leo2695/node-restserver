const Rol = require('../models/rol');
const Usuario = require('../models/usuario');

const esRolValido = async (rol = '') => {
    const existeRol = await Rol.findOne({
        rol
    });

    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe`);
    }
}

//verificar si correo existe
const existeEmail = async (correo='') => {
    
    const existeEmail = await Usuario.findOne({correo}); //va a buscar en el modelo un correo que sea igual al argumento que estoy enviando

    if (existeEmail) {
        throw new Error(`El correo: ${correo} ya existe`);
    }
}

//verificar si existe el usuario por id
const existeUsuarioID = async (id='') => {
    
    const existeUsuario = await Usuario.findById(id); //va a buscar en el modelo un correo que sea igual al argumento que estoy enviando

    if (!existeUsuario) {
        throw new Error(`El id: ${id} no existe`);
    }
}


module.exports = {
    esRolValido,
    existeEmail,
    existeUsuarioID
}