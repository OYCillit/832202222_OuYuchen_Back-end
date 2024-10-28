const { DataTypes } = require('sequelize');
const mysql = require('./database')

// 下注池
const addrbook = mysql.define('addrbook', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    type: { type: DataTypes.STRING },
    sex: { type: DataTypes.STRING },
    phone: { type: DataTypes.BIGINT },
    address: { type: DataTypes.STRING },
    time: { type: DataTypes.BIGINT }
}, {
    freezeTableName: true,  // 表名等于模型名
    timestamps: false,   // 不自动添加时间戳字段
})



module.exports = {
    addrbook
}