import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MenuItem, UiService } from './ui.service';

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UiComponent {
  menuItems : MenuItem[] = [];

  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit(): void {
    this.menuItems = this.uiService.getMenuItems();
  }
}
