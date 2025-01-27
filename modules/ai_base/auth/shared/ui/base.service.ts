import { HttpHeaders } from '@angular/common/http';

export abstract class BaseService {
  private _restURL?: string;
  private headers?: HttpHeaders;


  protected get defaultOptions() {
    return {
      headers: this.headers || {},
      observe: 'body' as const,
      responseType: 'json' as const,
    }
  }

  protected setLoading(loading: 'show' | 'not-show') {
    this.setHeaders({loading: loading});
  }

  protected setHeaders(headers: {[name: string]: string | string[]}) {
    if(!this.headers)
      throw new Error('BaseService: property headers was used but its value was not set');
    Object.keys(headers).forEach(headerName => this.headers = this.headers?.set(headerName, headers[headerName]));
  }
}
