const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');
const _ = require('lodash');

const EmployeeModel = sequelize.define('employee', {
    id:  {
		type: Sequelize.INTEGER.UNSIGNED,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
        type: Sequelize.STRING,
        defaultValue: null,
		allowNull: true
	},
	email: {
        type: Sequelize.STRING,
        defaultValue: null,
		allowNull: true
	},
	mobile_no: {
        type: Sequelize.STRING,
        defaultValue: null,
		allowNull: true
	}   
});


// EmployeeModel.getEmployee = async (reqData) => {
// 	try {
// 		return await EmployeeModel.findOne({
// 			where: {
// 				mobile_no : reqData.mobile_no
// 			},
// 			attributes: [ 'id', 'name', 'email', 'mobile_no' ]
// 		});
// 	} catch (e) {
// 		return false;
// 	}
// };

module.exports = EmployeeModel;
