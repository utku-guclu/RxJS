"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredNotifications$ = exports.combinedNotifications$ = void 0;
const observables_1 = require("./observables");
const rxjs_1 = require("rxjs");
// Combine multiple event streams into one
exports.combinedNotifications$ = (0, rxjs_1.merge)(observables_1.newMessage$.pipe((0, rxjs_1.map)(message => `New message: ${message}`)), observables_1.userMentions$.pipe((0, rxjs_1.map)(mention => `You were mentioned: ${mention}`)), observables_1.systemAlerts$.pipe((0, rxjs_1.map)(alert => `System alert: ${alert}`)));
// Filter notifications based on user preferences
exports.filteredNotifications$ = exports.combinedNotifications$.pipe((0, rxjs_1.filter)(notification => notification.startsWith('New message')));
