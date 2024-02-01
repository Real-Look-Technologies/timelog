const { ApiError } = require("../utils/ApiError");

class NotFoundError extends ApiError {
    constructor(message){
        super(message, 404);
    }
}