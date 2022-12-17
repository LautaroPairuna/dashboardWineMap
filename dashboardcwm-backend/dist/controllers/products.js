"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProduct = yield producto_1.default.findAll();
    res.json(listProduct);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.default.findOne({
        where: {
            id: id
        }
    });
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.default.findOne({
        where: {
            id: id
        }
    });
    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito!'
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield producto_1.default.create(body);
        res.json({
            msg: 'El producto fue creado con exito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps ocurrio un error, por favor comuniquese con el Soporte para brindarle una solucion'
        });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const product = yield producto_1.default.findOne({
            where: {
                id: id
            }
        });
        if (!product) {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
        else {
            yield product.update(body);
            res.json({
                msg: `El producto con el id ${id} ha sido actualizado correctamente!`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps ocurrio un error, por favor comuniquese con el Soporte para brindarle una solucion'
        });
    }
});
exports.updateProduct = updateProduct;
