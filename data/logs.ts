import { databases, db } from '../lib/appwriteClient';

// Log a habit for a specific date with a status
export async function logHabit(habitId: string, date: string, status: string) {
  return await databases.createDocument(db.id, db.collections.logs, 'unique()', {
    habitId,
    date,
    status,
  });
}

// Get the current streak for a habit
export async function listLogs(habitId: string) {
  const response = await databases.listDocuments(db.id, db.collections.logs, [
    { key: 'habitId', value: habitId, operator: 'equal' },
  ]);
  return response.documents;
}
