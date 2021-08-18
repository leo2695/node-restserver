const {
    request,
    response
} = require('express');


const usuariosGet = (req=request, res = response) => {
    const {q, token,type='untype'}=req.query;
    res.json({
        message: 'GET API Controller',
        q,
        token,
        type
    });
}
const usuariosPut = (req=request, res = response) => {
    const {
        id
    } = req.params;
    res.json({
        message: 'PUT API Controller',
        id
    });
}
const usuariosPost = (req=request, res = response) => {

    const {
        nombre,
        edad
    } = req.body;

    res.json({
        message: 'POST API Controller',
        nombre,
        edad
    });
}
const usuariosPatch = (req=request, res = response) => {
    res.json({
        message: 'PATCH API Controller'
    });
}
const usuariosDelete = (req=request, res = response) => {
    res.json({
        message: 'DELETE API Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}