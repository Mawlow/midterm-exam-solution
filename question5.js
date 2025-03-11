const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const app = express();

// Where to input?

const sequelize = new Sequelize('gallegoDB', 'Marlo', 'Gallego', {
host: 'localhost',
dialect: 'mysql'
});

const User = sequelize.define('User', {
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
name: { type: DataTypes.STRING, allowNull: false },
email: { type: DataTypes.STRING, allowNull: false, unique: true },
status: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

app.get('/users', async (req, res) => {
const users = await User.findAll();
res.json(users);
});

// Sync database and start server
sequelize.sync().then(() => {
app.listen(3000, () => console.log('Server running on port 3000'));
});