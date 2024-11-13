import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem[];
  component?: any; // Use `any` for generic component typing
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
    this.addView(menuItem.path, menuItem.component);

    // Recursively add children as routes
    if (menuItem.children) {
      menuItem.children.forEach((child) =>
        this.addView(child.path, child.component)
      );
    }
  }

  // Add a view route dynamically
  addView(routePath: string, component: any): void {
    // Ensure each route is unique to avoid duplicates
    if (!this.router.config.some((route) => route.path === routePath)) {
      this.routes.push({ path: routePath, component });
      this.router.resetConfig([...this.router.config, { path: routePath, component }]);
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
