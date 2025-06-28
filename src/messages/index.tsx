// src/messages/index.ts
import en from './en.json';
import it from './it.json';

export function getMessages(locale: string) {
  switch (locale) {
    case 'it':
      return it;
    case 'en':
    default:
      return en;
  }
}
