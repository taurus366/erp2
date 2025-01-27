import { BaseService } from './base.service';
import { IBaseDataService } from './i-base-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailSuccessResponse } from '../api-gui/src/i-response';
import { IPage, IPageRequest, IQuery } from './paging-types';

export abstract class BaseDataService<T> extends BaseService implements IBaseDataService<T>{

  constructor(protected http: HttpClient) {
    super();
  }

  getOne(id: number, loading = true): Observable<DetailSuccessResponse<T>> {
    const url = '';
    this.setLoading(loading? 'show': 'not-show');
    const options = {...this.defaultOptions};
    return this.http.get<DetailSuccessResponse<T>>(url, options);
  }


  // getAll(req: IPageRequest<T>, query: IQuery, loading = true): Observable<IPage<T>> {
  //   const url = '';
  //   this.setLoading(loading? 'show': 'not-show');
  //   const options = this.getAllOptions<T>(req, query);
  // }



}
