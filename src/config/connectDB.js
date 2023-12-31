const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('webook', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {

    try {
        await sequelize.authenticate();
        console.log('Kết nối cơ sở dữ liệu thành công!');
    } catch (error) {
        console.error('Không thể kết nối với cơ sở dữ liệu:', error);
    }
}

module.exports = connectDB;