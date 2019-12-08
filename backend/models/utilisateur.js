/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const User = sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		lastname: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		firstname: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		pwd: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'user'
	});
	return User;
};

