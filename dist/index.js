"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("./operators");
// Subscribe to combined notifications and display them in the UI
const combinedSubscription = operators_1.combinedNotifications$.subscribe(notification => {
    console.log('Displaying notification:', notification);
});
// Subscribe to filtered notifications based on user preferences
const filteredSubscription = operators_1.filteredNotifications$.subscribe(notification => {
    console.log('Displaying filtered notification:', notification);
});
// Unsubscribe from notifications after 10 seconds
setTimeout(() => {
    combinedSubscription.unsubscribe();
    filteredSubscription.unsubscribe();
}, 10000); // 10 seconds delay
