"use strict";

class HomeworkController {
    greeting() {
        return {
            text: "Hello World!",
            uuAppErrorMap: {}
        }
    }
}

module.exports = new HomeworkController();
