import { combinedNotifications$, filteredNotifications$ } from './operators';

// Subscribe to combined notifications and display them in the UI
const combinedSubscription = combinedNotifications$.subscribe(notification => {
  console.log('Displaying notification:', notification);
});

// Subscribe to filtered notifications based on user preferences
const filteredSubscription = filteredNotifications$.subscribe(notification => {
  console.log('Displaying filtered notification:', notification);
});

// Unsubscribe from notifications after 10 seconds
setTimeout(() => {
  combinedSubscription.unsubscribe();
  filteredSubscription.unsubscribe();
}, 10000); // 10 seconds delay