import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const request = {
      content: 'some content',
      category: 'some category',
      recipientId: 'some recipient id',
    };

    const { notification } = await sendNotification.execute(request);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  })
})