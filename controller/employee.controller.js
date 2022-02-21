const Employee = require('../model/employee.model');
const resPattern = require('../helpers/resPattern');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const bcrypt = require('bcrypt');

    exports.getAllEmployee = async (req, res, next) =>  {
        try {
            const { pageNo } = req.query;
            const page = (pageNo != null  && pageNo != undefined) ? pageNo : 1;
            const pageSize = 5;
            const employeeRes = await Employee.findAndCountAll({
                offset: (page-1)*pageSize,
				limit: pageSize,

                attributes: [
                    'id', 'name', 'email', 'mobile_no'
				]
            });
            const pages = Math.ceil(employeeRes.count / pageSize);
            const pageData = {
                total_record : employeeRes.count,
                per_page     : pageSize,
                current_page : page,
                total_pages  : pages
            }
            const employee = employeeRes.rows;
            return res.status(200).send({ employee, pageData });
        } catch (e) {
            console.log(e);
            return res.status(404).send(e);
        }
    },
    
    exports.getOneEmployee = async (req, res, next) => {
        try {
            const { id } = req.params;
            const employee = await Employee.findByPk(id);
            res.status(200).send(employee);               
            } catch (e) {
            console.log(e);
            return res.status(404).send(e);
        }
    },

    exports.addEmployee = async (req, res, next) => {
        try {
            const saveObj = {
                ...req.body,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            const employee = await Employee.create(saveObj);

            return res.status(200).send({ employee });
        } catch (e) {
            console.log(e);
            res.status(404).send(e);
        }
    },

    exports.updateEmployee = async (req, res, next) => {
        try {
            const saveObj = {
                ...req.body,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            const employee = await Employee.create(saveObj);

            return res.status(200).send({ employee });

        } catch (e) {
            console.log(e);
            res.status(404).send(e);
        }
    },

    exports.deleteEmployee = async (req, res, next) => {
        try {
            const decId = req.params.id;
            let saveObj = await Employee.findByPk(decId);
            if (!saveObj) return res.status(404).send({ message: 'Id not found' });
            saveObj.destroy();
            let obj = resPattern.successPattern(httpStatus.OK, saveObj, 'success');
            return res.status(obj.code).json(obj);
        } catch (e) {
            return next(new APIError(e.message, httpStatus.BAD_REQUEST, true));
        }
    }
