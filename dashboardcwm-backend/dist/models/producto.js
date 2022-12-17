"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const productos = connection_1.default.define('producto', {
    producto: {
        type: sequelize_1.DataTypes.STRING
    },
    foto: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.NUMBER
    },
    destacado: {
        type: sequelize_1.DataTypes.TINYINT
    },
    activo: {
        type: sequelize_1.DataTypes.TINYINT
    }
});
exports.default = productos;
