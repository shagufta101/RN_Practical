
// https://private-c31a5-task27.apiary-mock.com

const staging = 'private-c31a5-task27.apiary-mock.com';
const production = 'private-c31a5-task27.apiary-mock.com';

const runningUrl = process.env.NODE_ENV === 'production' ? production : staging;

const httpUrl = `http://${runningUrl}`;
const httpsUrl = `https://${runningUrl}`;

export default class Connection {
  static getBaseUrl() {
    return httpsUrl;
  }

 
}