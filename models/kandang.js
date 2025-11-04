const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Kandang', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        Nama_Hewan : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Nama_Petugas : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Usia_Hewan : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        Jenis_Hewan : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        Tahun_Lahir : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    }, {
        tableName : 'kandang',
        timestamps : false,
        freezeTableName : false
    });
    return Komik;
}