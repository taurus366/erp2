import { Injectable } from '@angular/core';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotAuthGuardService implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return undefined;
  }
}
