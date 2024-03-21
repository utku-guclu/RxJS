"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemAlerts$ = exports.userMentions$ = exports.newMessage$ = void 0;
const rxjs_1 = require("rxjs");
// Observable for new messages
exports.newMessage$ = new rxjs_1.Observable((subscriber) => {
    setInterval(() => {
        subscriber.next("New message received");
    }, 3000);
});
// Observable for user mentions
exports.userMentions$ = new rxjs_1.Observable((subscriber) => {
    setInterval(() => {
        subscriber.next("You were mentioned in a message");
    }, 5000);
});
// Observable for system alerts
exports.systemAlerts$ = new rxjs_1.Observable((subscriber) => {
    setInterval(() => {
        subscriber.next("System alert: Server down");
    }, 10000);
});
