import { IEndpoint } from './i-endpoint';
import { Observable } from 'rxjs';

export interface IOrder<T> {
  orderBy: keyof T
  orderType: 'asc' | 'desc'
}

export interface IPageRequest<T> {
  pageIndex?: number
  limit?: number
  order?:IOrder<T>
}

export interface IPage<T> {
  data:T[]
  total: number
  limit: number
  pageIndex: number
}

export interface IQuery {
  [name: string]: any|any[]
}
export type PaginatedRequest<T> = (req: IPageRequest<T>, query: IQuery, endpoint?: IEndpoint) => Observable<IPage<T>>
