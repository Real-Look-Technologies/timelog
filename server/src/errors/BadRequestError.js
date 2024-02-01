const { ApiError } = require("../utils/ApiError");

class BadRequestError extends ApiError{
    constructor(message){
        super(message, 400);
    }
}