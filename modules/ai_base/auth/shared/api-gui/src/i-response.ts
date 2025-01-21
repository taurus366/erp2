import {HTTP_STATUS_CODE} from './http/http-status-codes'

export interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message?: string;
  detailData?: Partial<T>;
  listData?: Partial<T>;
  total?: number;
}

// create, update, delete, archive
export class ActionSuccessResponse<T> implements IResponse<T> {
  success = true
  statusCode = HTTP_STATUS_CODE.OK
  message: string
  data: Partial<T>

  constructor(options: {
    message: string,
    data: Partial<T>
  }) {
    this.message = options.message
    this.data = options.data
  }
}
