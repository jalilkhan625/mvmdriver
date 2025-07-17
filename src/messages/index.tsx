// src/messages/index.ts
import en from './en.json';
import it from './it.json';
import ru from './ru.json';
import fr from './fr.json';
import es from './es.json';
import zh from './zh.json';
import de from './de.json';

function isLocalhost(): boolean {
  return typeof window !== 'undefined' && window.location.hostname === 'localhost';
}

export function getMessages(locale: string) {
  if (isLocalhost()) {
    return en;
  }

  switch (locale) {
    case 'it':
      return it;
    case 'ru':
      return ru;
    case 'fr':
      return fr;
    case 'es':
      return es;
    case 'zh':
      return zh;
    case 'de':
      return de;
    case 'en':
    default:
      return en;
  }
}
