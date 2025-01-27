import { Inject, Injectable } from '@angular/core';
import { StorageUtil } from './storage.util';
import { LOCAL_STORAGE } from "@ng-web-apis/common";
import { IUser } from '../../api/api-interfaces';
import { STORAGE_KEY } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserStorageUtil extends StorageUtil {
  private userCache: IUser | null = null;  // Use null instead of undefined

  constructor(@Inject(LOCAL_STORAGE) readonly sessionStorage: Storage) {
    super(sessionStorage);
  }

  // Set user data in storage
  setUserData(user: IUser): void {
    this.userCache = user;
    this.setItem(STORAGE_KEY.USER_INFO, JSON.stringify(user));
  }

  // Get user info from cache or localStorage
  get userInfo(): IUser | null {
    if (this.userCache) {
      return this.userCache;
    }

    const data = this.getItem(STORAGE_KEY.USER_INFO);
    if (data) {
      try {
        this.userCache = JSON.parse(data);
      } catch (error) {
        console.error('Failed to parse user data from storage:', error);
        return null;  // Return null in case of parse error
      }
    }
    return this.userCache;
  }

  // Get the token from the stored user info
  get token(): string | null | undefined {
    const userInfo = this.userInfo;
    return userInfo ? userInfo.token : null;
  }

  // Clear user data from cache and storage
  clearUserData(): void {
    this.userCache = null;
    this.removeItem(STORAGE_KEY.USER_INFO);
  }
}
