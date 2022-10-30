module.exports=(sequelize, DataTypes) => {
    const Khs = ("Khs", {
        id_mk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
        },
        nama_mk :{
            type: DataTypes.STRING,
            allowNull: false
        },
        npm:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique : true
        },
        tahun_ajaran:{
            type: DataTypes.STRING,
            allowNull: true
        },
        semester:{
            type: DataTypes.STRING,
            allowNull: true
        },
        jadwal:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: "khs"
    });
    return Khs;
}
