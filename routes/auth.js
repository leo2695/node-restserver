const {
    Router
} = require('express');

const {
    check
} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { loginController } = require('../controllers/auth');

const router = Router();

router.post('/login',[
    check('correo','El correo es obligatorio').isEmail(),
    check('password','La contraseña no es válida').not().isEmpty(),
    validarCampos
],loginController);


module.exports = router;