const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/database');

const Paquete = sequelize.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false

    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idTipoProveedor: {
        type: DataTypes.INT,
        allowNull: false
    },
        idDestino: {
        type: DataTypes.INT,
        allowNull: false
    }
}, {
    tableName: 'paquete',
    timestamps: false
});

module.exports = paquete;