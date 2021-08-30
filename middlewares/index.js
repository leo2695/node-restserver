const  validarCampos = require('../middlewares/validar-campos');
const  validarJWT = require('../middlewares/validar-jwt');
const  tipoRolValido = require('../middlewares/validar-rol');

module.exports={
    ...validarCampos,
    ...validarJWT,
    ...tipoRolValido
}