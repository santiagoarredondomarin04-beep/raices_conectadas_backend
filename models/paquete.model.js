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
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false

    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Incluye: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Itinerario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Incluye: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LimitePersonas: {
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