import { Routes } from "@angular/router";
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const SessionsRoutes: Routes = [
  // {

    // children: [
    //   {
    //     path: 'signin',
    //     component: SigninComponent,
    //   },
    //   {
    //     path: "404",
    //     component: NotFoundComponent,
    //   }
    // ]
  // }/
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: "404",
    component: NotFoundComponent,
  }
];
