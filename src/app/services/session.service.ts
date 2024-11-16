import { Injectable } from '@angular/core';

export enum Key {
  Token = '__TOKEN__'
}

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  set<T extends object | string>(key: Key, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: Key): T | null {
    const sessionStorageItem = sessionStorage.getItem(key);
    return sessionStorageItem ? JSON.parse(sessionStorageItem) : null;
  }

  delete(key: Key): void {
    sessionStorage.removeItem(key);
  }
}