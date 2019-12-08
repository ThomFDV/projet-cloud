'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const User = models.user;

class UserController {

    async addUser(lastname, firstname, email, pwd){
        return User.create({
            lastname,
            firstname,
            email,
            pwd
        });
    }

    async getUser(id) {
        return User.findOne({
            where: {
                id: id
            }
        });
    }

    async getAllUser() {
        try {
            return User.findAll();
        }
        catch(err) {
            console.log(err);
        }

    }

    async updateUser(updates, id){
        try{
            return User.update(updates, {
                where: {
                    id: id
                }
            });
        }catch(err){
            console.log(err);
        }
    }

    async removeUser(id) {
        User.destroy({
            where: {id: id}
        })
    }
}
module.exports = new UserController();
