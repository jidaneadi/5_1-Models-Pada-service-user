module.exports = (sequelize, DataTypes) => {
    const Dosen = sequelize.define("Dosen",{
        id_dosen:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nama_dosen:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nip:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique : true
        },
        alamat:{
            type: DataTypes.STRING,
            allowNull: true
        },
        no_telp:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
}
