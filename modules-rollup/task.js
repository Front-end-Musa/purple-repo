export class Task {
    message;
    constructor() {
        this.message = 'Coding';
    }

    get run() {
        return console.log(this.message);
    }
}