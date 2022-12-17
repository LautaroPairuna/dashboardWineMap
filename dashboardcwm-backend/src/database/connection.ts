import { Sequelize } from "sequelize";


const sequelize = new Sequelize('carrito_wine_map', 'root', '', {

    host: 'localhost',
    dialect: 'mysql'

});

export default sequelize;