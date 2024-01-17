const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends Controller{
    constructor(){
        super(userServices);
    };
};

module.exports = UserController;