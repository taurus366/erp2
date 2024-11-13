import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem, UiService } from './ui.service';

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'], // Fixed to `styleUrls`
})
export class UiComponent {
  menuItems: MenuItem[] = [];

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    // Define and add menu items with children and components
    this.uiService.addMenu({
      name: 'User',
      path: 'user',
      component: UiComponent,
      children: [
        { name: 'User List', path: 'user/list', component: UiComponent },
        { name: 'User New', path: 'user/new', component: UiComponent },
      ],
    });

    // Retrieve the menu items for display
    this.menuItems = this.uiService.getMenuItems();
  }
}
