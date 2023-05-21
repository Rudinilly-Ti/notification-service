import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count Recipient Notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-id' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-id' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'another-id' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-id',
    });

    expect(count).toBe(2);
  });
});
