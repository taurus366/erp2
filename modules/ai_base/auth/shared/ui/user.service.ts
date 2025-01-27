import { Injectable } from '@angular/core';
import { ILoginUser, IUser } from '../api/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { UserStorageUtil } from './storage/user-storage.util';
import { Observable } from 'rxjs';
import { ActionSuccessResponse } from '../api-gui/src/i-response';
import { tap } from "rxjs/operators";
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {


  isAuth = false;
  userInfo: IUser | null | undefined;

  constructor(
    protected http: HttpClient,
    private userStorageUtil: UserStorageUtil
  ) {
    super();

  }

  logout(): void {
    this.userStorageUtil.clearUserData();
    // this.updateAuthState(null);
  }

  updateAuthState(user: IUser | null): void {
    this.userInfo = user;
    this.isAuth = !!user;
  }

  login(body: ILoginUser, loading = true): Observable<ActionSuccessResponse<IUser>> {
    const options = { ...this.defaultOptions};
    return this.http.post<ActionSuccessResponse<IUser>>('http://localhost:3001/api/auth/auth/login', body, options)
      .pipe(tap(res => {
        this.updateAuthState(res.data as IUser);
        this.userStorageUtil.setUserData(res.data as IUser);
      }));
  }

}
