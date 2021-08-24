const {
    Router
} = require('express');
const {
    check
} = require('express-validator');
const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
} = require('../controllers/user');
const {
    esRolValido, existeEmail, existeUsuarioID
} = require('../helpers/db-validators');
const {
    validarCampos
} = require('../middlewares/validar-campos');

const router = Router();




router.get('/', usuariosGet);

//ACTUALIZAR
router.put('/:id',[
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioID),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPut);

//CREAR
router.post('/', [
    //arreglo de middlewares
    check('nombre', 'El campo es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener una longitud mínima de 6').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(existeEmail),
    //check('rol', 'No es válido').isIn('ADMIN_ROLE','USER_ROLE'),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPost);

//BORRAR
router.delete('/:id',[
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioID),
    validarCampos
], usuariosDelete);
router.patch('/', usuariosPatch);

module.exports = router;