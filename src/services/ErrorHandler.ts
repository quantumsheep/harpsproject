'use strict';

export default class ErrorHandler {
    type: string;
    messages: string[];

    constructor() {
        this.type = "";
        this.messages = [];
    }

    add(message: string): this {
        this.messages.push(message);

        return this;
    }

    addMultiple(messages: string[]): this {
        this.messages.concat(messages);

        return this;
    }
}