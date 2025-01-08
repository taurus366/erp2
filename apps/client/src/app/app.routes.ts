import { Route } from '@angular/router';
import {AUTH_LOGIN_ROUTE_CONFIG} from '@erp/auth';

export const appRoutes: Route[] = [
  {
    ...AUTH_LOGIN_ROUTE_CONFIG
  }
];
