import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem, UiService } from './ui.service';
import { Title } from '@angular/platform-browser';
import { SigninComponent } from './views/sessions/signin/signin.component';

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
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
        { name: 'User List', path: 'user/list' , component: SigninComponent},
        { name: 'User New', path: 'user/new', component: UiComponent },
      ],
    });
    // const menuItem2: MenuItem = {
    //   name: 'Settings',
    //   path: 'settings',
    //   modulePath: './settings/settings.module#SettingsModule',  // Lazy loaded module
    // };

    // Retrieve the menu items for display
    this.menuItems = this.uiService.getMenuItems();

    this.changePageTitle(this.browserTitle);
  }

  changePageTitle(title: string) {
    this.title.setTitle(title);
  }
}
