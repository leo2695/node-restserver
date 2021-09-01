const {
    Schema,
    model
} = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    imagen: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE'
        //emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

//puedo crear metodos para sobreescribir los existentes de Mongoose o crear personalizados
//sobreescribir
UsuarioSchema.methods.toJSON = function () {
    //tiene que ser una función normal, no puede ser flecha
    const {
        __v,
        password, _id,
        ...usuario
    } = this.toObject(); //acá los nombres que ponga especificamente no los veo en las respuestas de postman, solo los que deje en ...usuario
    //transformarlo
    usuario.uid=_id;
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);