const path=require('path');
const { v4: uuidv4 }=require('uuid');

const subirArchivo = (files, extensionesValidas=['png', 'jpg', 'pdf'], carpeta='') => {

    //promesa
    return new Promise((resolve, reject) => {

        const { archivo } = files;
        const nombreCortado = archivo.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];

        //Validar las extensiones
       //const extensionesValidas = ['png', 'jpg', 'pdf'];

        if (!extensionesValidas.includes(extension)) {
           return reject(`La extension ${extension} no es permitida`);
        }

        const nombreTemporal = uuidv4() + '.' + extension;
        //const uploadPath = path.join(__dirname , '../uploads/' , archivo.name);
        const uploadPath = path.join(__dirname, '../uploads/', carpeta, nombreTemporal);

        archivo.mv(uploadPath, (err) => {
            
            if (err) {
                reject(err);
            }

            resolve(nombreTemporal);
        });

    });
}


module.exports = {
    subirArchivo
}