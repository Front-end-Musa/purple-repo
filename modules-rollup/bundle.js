(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    class User {
        task
        constructor(task) {
            this.task = task;
        }

        do() {
            return this.task.run;
        }
    }

    class Task {
        message;
        constructor() {
            this.message = 'Coding';
        }

        get run() {
            return console.log(this.message);
        }
    }

    const task = new Task(),
        user = new User(task);

    user.do();

}));
