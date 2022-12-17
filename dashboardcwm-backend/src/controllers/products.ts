import { Request, Response } from "express"
import productos from '../models/producto'

export const getProducts = async (req: Request, res: Response) => {
    
    const listProduct = await productos.findAll()

    res.json(listProduct)

}

export const getProduct = async (req: Request, res: Response) => {

    const { id } = req.params ;

    const product = await productos.findOne({
        where: {
            id: id
        }
    })

    if(product) {
        res.json(product)
    }else{

        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        }) 
    }

}

export const deleteProduct = async (req: Request, res: Response) => {

    const { id } = req.params ;

    const product = await productos.findOne({
        where: {
            id: id
        }
    })

    if(!product) {

        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        }) 

    }else{

        await product.destroy()
        res.json({
            msg: 'El producto fue eliminado con exito!'
        })
    }

}

export const postProduct = async (req: Request, res: Response) => {

    try{
        
        const { body } = req ;

        await productos.create(body);

        res.json({
            msg: 'El producto fue creado con exito!'
        })

    } catch (error) {

        console.log(error)

        res.json({
            msg: 'Upps ocurrio un error, por favor comuniquese con el Soporte para brindarle una solucion'
        })

    }

}

export const updateProduct = async (req: Request, res: Response) => {

    try{

        const { id } = req.params ;
        const { body } = req ;

        const product = await productos.findOne({
            where: {
                id: id
            }
        })

        if(!product) {

            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            }) 
            
        }else{

            await product.update(body);

            res.json({
                msg: `El producto con el id ${id} ha sido actualizado correctamente!`
            })

        }

    }catch (error) {

        console.log(error)

        res.json({
            msg: 'Upps ocurrio un error, por favor comuniquese con el Soporte para brindarle una solucion'
        })

    }

}

