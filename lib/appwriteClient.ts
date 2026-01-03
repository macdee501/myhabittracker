import { Client, Account, ID, Models, Databases, Functions } from 'react-native-appwrite';

const client = new Client();

client.setEndpoint('https://fra.cloud.appwrite.io/v1').
setProject('6924528400241a1154c2');

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);

export const db = {
    id: '6958e3c6002b3ec7658c',
    collections: {
        habits: 'habits',
        logs:'logs',
    }
}