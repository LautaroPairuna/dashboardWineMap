import { DataTypes } from 'sequelize';
import DataBase from '../database/connection';

const productos = DataBase.define('producto', {

    producto: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.NUMBER
    },
    destacado: {
        type: DataTypes.TINYINT
    },
    activo: {
        type: DataTypes.TINYINT
    }

})

export default productos;