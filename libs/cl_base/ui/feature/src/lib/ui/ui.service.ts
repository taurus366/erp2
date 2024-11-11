import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItem {
  name: string;
  route: string;
  children?: MenuItem[];
}
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private menuItems: MenuItem[] = [];
  // private routes: any[] = [];
  private routes: any[] = [];
  constructor(private router: Router) {}

  //  // Register routes and menu for the User module
  //     this.uiService.addRoute('/user', UserComponent);

  //   this.uiService.addMenu({
  //       name: 'User',
  //       route: '/user',
  //       children: [
  //         { name: 'User List', route: '/user/list' },
  //         { name: 'User New', route: '/user/new' },
  //       ],
  //     });
  // Add a menu item to the UI
  addMenu(menuItem: MenuItem): void {
    this.menuItems.push(menuItem);
  }

   // Add a view component (route) to the UI
  addView(routePath: string, component: any) {
    this.routes.push({ path: routePath, component });
    this.router.resetConfig([...this.router.config, { path: routePath, component }]);
  }

//   // Get current menu items
  getMenuItems() {
    return this.menuItems;
  }

//   // Get all routes for the app (used for dynamic routing)
  getRoutes() {
    return this.routes;
  }

}
