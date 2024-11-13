import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

export interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem[];
  component?: any; // Use `any` for component if the route directly points to a component
  loadChildrenn?: any; // The path to the module for lazy loading
}
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private menuItems: MenuItem[] = [];
  private routes: any[] = [];


  constructor(private router: Router) {}



  // Add a menu item and its associated routes
  addMenu(menuItem: MenuItem): void {
    this.menuItems.push(menuItem);
    if (menuItem.loadChildrenn) {
      // Lazy-loaded module path
      this.addLazyRoute(menuItem.path, menuItem.loadChildrenn);
    } else {
      // Regular component route
      this.addView(menuItem.path, menuItem.component);
    }

    // Recursively add children as routes
    if (menuItem.children) {
      menuItem.children.forEach((child) =>
        this.addMenu(child)
      );
    }
  }

  // Add a lazy-loaded view route dynamically
  addLazyRoute(routePath: string, loadChildrenPath: string): void {
    if (!this.router.config.some((route) => route.path === routePath)) {
      this.routes.push({
        path: routePath,
        loadChildren: () => import(loadChildrenPath).then((m) => m.default || m),
      });
      this.router.resetConfig([
        ...this.router.config,
        {
          path: routePath,
          loadChildren: () => import(loadChildrenPath).then((m) => m.default || m),
        },
      ]);
    }
  }

  // Add a view route dynamically
  addView(routePath: string, component: any): void {
    if (!this.router.config.some((route) => route.path === routePath)) {
      this.routes.push({ path: routePath, component });
      this.router.resetConfig([
        ...this.router.config,
        { path: routePath, component },
      ]);
    }
  }

  // Get current menu items for use in the UI
  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  // Get all dynamically added routes
  getRoutes(): any[] {
    return this.routes;
  }
}
