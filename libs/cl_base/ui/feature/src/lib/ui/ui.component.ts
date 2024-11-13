import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem, UiService } from './ui.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'], // Fixed to `styleUrls`
})
export class UiComponent implements OnInit {
  menuItems: MenuItem[] = [];
  readonly browserTitle = 'client';

  constructor(private uiService: UiService, private title: Title) {}

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

    this.changePageTitle(this.browserTitle);
  }

  changePageTitle(title: string) {
    this.title.setTitle(title);
  }

}
