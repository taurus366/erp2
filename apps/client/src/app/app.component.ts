import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiComponent } from '@erp/ui';
import { UiService } from '@erp/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.initModules();
  }

  initModules(): void {
    console.log('initModules');
  }
}
