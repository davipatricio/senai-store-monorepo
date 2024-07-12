import JSONdb from 'simple-json-db';

export const db = new JSONdb('./db.json', { asyncWrite: true });
