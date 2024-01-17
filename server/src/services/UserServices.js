const Services = require('./Services.js');

class UserServices extends Services {
    constructor(){
        super('User');
    };
};

module.exports = UserServices;